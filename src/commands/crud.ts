import { Command, flags } from "@oclif/command";
const camelCase = require("camelcase");
import { capitalize, toLower } from "lodash";
const _pluralize = require("pluralize");

import editor from "../utils/editor";

import { apiDir } from "./../utils/get-api-dir";
import { projectRoot } from "./../utils/get-project-root";

const pascalCase = (str: string) => camelCase(str, { pascalCase: true });

function pluralize(input: string): string {
  return _pluralize.isPlural(input) ? input : _pluralize.plural(input);
}

function singular(input: string): string {
  return _pluralize.isSingular(input) ? input : _pluralize.singular(input);
}

function toSingularCamelCase(input: string): string {
  return camelCase(singular(input));
}
function toPluralCamelCase(input: string): string {
  return camelCase(pluralize(input));
}
function toSingularPascalCase(input: string): string {
  return pascalCase(singular(input));
}
function toPluralPascalCase(input: string): string {
  return pascalCase(pluralize(input));
}

export default class Component extends Command {
  static description = "Generate api routes for schema.";

  static flags = {
    help: flags.help({ char: "h" }),
    withCors: flags.boolean(),
    withAuth: flags.boolean()
  };

  static args = [
    {
      name: "name",
      required: true,
      description: "name of model (PascalCase)",
    },
    {
      name: "out",
      required: false,
      description: "output directory (defaults to pages/api/)",
      default: apiDir || projectRoot,
    },
  ];

  async run() {
    const { args, flags } = this.parse(Component);
    const name = args.name;
    const outputDir = args.out;
    this.log(`Generating api routes for ${name}`);

    const params = {
      lowerModelName: toLower(name),
      upperModelName: capitalize(name),
      camelCaseSingularModelName: toSingularCamelCase(name),
      camelCasePluralModelName: toPluralCamelCase(name),
      pascalCaseSingularModelName: toSingularPascalCase(name),
      pascalCasePluralModelName: toPluralPascalCase(name),
    };

    let templateDir = "crud";

    if (flags.withAuth && flags.withCors) {
      templateDir = "crudWithCorsWithAuthentication"
    }
    try {
      editor.copyTpl(
        `/Users/femi/projects/juiced/src/templates/${templateDir}`,
        outputDir,
        params
      );
      editor.commit(() => {
        this.log("done");
      });
    } catch (error) {
      this.error(error);
    }
  }
}
