juiced
======

JavaScript but Juiced

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/juiced.svg)](https://www.npmjs.com/package/@theindividualcompany/juiced))
[![Downloads/week](https://img.shields.io/npm/dw/juiced.svg)](https://www.npmjs.com/package/@theindividualcompany/juiced))
[![License](https://img.shields.io/npm/l/juiced.svg)](https://github.com//theindividualcompany/juiced/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @theindividualcompany/juiced
$ juiced COMMAND
running command...
$ juiced (-v|--version|version)
@theindividualcompany/juiced/0.0.2 darwin-x64 node-v12.16.1
$ juiced --help [COMMAND]
USAGE
  $ juiced COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`juiced component NAME [OUT]`](#juiced-component-name-out)
* [`juiced crud NAME [OUT]`](#juiced-crud-name-out)
* [`juiced help [COMMAND]`](#juiced-help-command)
* [`juiced page NAME [OUT]`](#juiced-page-name-out)

## `juiced component NAME [OUT]`

describe the command here

```
USAGE
  $ juiced component NAME [OUT]

ARGUMENTS
  NAME  name of component (PascalCase)
  OUT   [default: /Users/femi/projects/individual/juiced] output directory (defaults to components/)

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/component.ts](https://github.com/theindividualcompany/juiced/blob/v0.0.2/src/commands/component.ts)_

## `juiced crud NAME [OUT]`

Create new component

```
USAGE
  $ juiced crud NAME [OUT]

ARGUMENTS
  NAME  name of model (PascalCase)
  OUT   [default: /Users/femi/projects/individual/juiced/pages/api] output directory (defaults to pages/api/)

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/crud.ts](https://github.com/theindividualcompany/juiced/blob/v0.0.2/src/commands/crud.ts)_

## `juiced help [COMMAND]`

display help for juiced

```
USAGE
  $ juiced help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `juiced page NAME [OUT]`

Create new page

```
USAGE
  $ juiced page NAME [OUT]

ARGUMENTS
  NAME  name of page (PascalCase)
  OUT   [default: /Users/femi/projects/individual/juiced/pages] output directory (defaults to pages/)

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/page.ts](https://github.com/theindividualcompany/juiced/blob/v0.0.2/src/commands/page.ts)_
<!-- commandsstop -->
