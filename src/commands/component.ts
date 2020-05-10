import {Command, flags} from '@oclif/command'

import editor from '../utils/editor'

import {componentsDir} from './../utils/get-components-dir'
import {projectRoot} from './../utils/get-project-root'

export default class Component extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{
    name: 'name',
    required: true,
    description: 'name of component (PascalCase)',
  }, {
    name: 'out',
    required: false,
    description: 'output directory (defaults to components/)',
    default: componentsDir || projectRoot
  }]

  async run() {
    const {args} = this.parse(Component)

    const name = args.name
    const outputDir = args.out
    this.log(`Creating new component ${name}`)

    const params = {
      name,
    }

    try {
      editor.copyTpl(
        '/Users/femi/projects/individual/juiced/src/templates/component',
        outputDir,
        params
      )
      editor.commit(() => {
        this.log('done')
      })
    } catch (error) {
      this.error(error)
    }
  }
}
