import {Command, flags} from '@oclif/command'
import {capitalize, toLower} from 'lodash'

import editor from '../utils/editor'

import {pageDir} from './../utils/get-page-dir'
import {projectRoot} from './../utils/get-project-root'

export default class Page extends Command {
  static description = 'Create new page'

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
    description: 'output directory (defaults to pages/)',
    default: pageDir || projectRoot
  }]

  async run() {
    const {args, flags} = this.parse(Page)

    const name = args.name
    const outputDir = args.out
    this.log(`Creating new page ${name}`)

    const params = {
      name,
      lowerPageName: toLower(name),
      upperPageName: capitalize(name)
    }

    try {
      editor.copyTpl(
        '/Users/femi/projects/individual/juiced/src/templates/page',
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
