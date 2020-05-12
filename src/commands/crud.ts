import {Command, flags} from '@oclif/command'
import {capitalize, toLower} from 'lodash'

import editor from '../utils/editor'

import {apiDir} from './../utils/get-api-dir'
import {projectRoot} from './../utils/get-project-root'

export default class Component extends Command {
  static description = 'Create new component'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{
    name: 'name',
    required: true,
    description: 'name of model (PascalCase)',
  }, {
    name: 'out',
    required: false,
    description: 'output directory (defaults to pages/api/)',
    default: apiDir || projectRoot
  }]

  async run() {
    const {args} = this.parse(Component)

    const name = args.name
    const outputDir = args.out
    this.log(`Creating crud api operations ${name}`)

    const params = {
      lowerModelName: toLower(name),
      upperModelName: capitalize(name)
    }

    try {
      editor.copyTpl(
        '/Users/femi/projects/individual/juiced/src/templates/crud',
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
