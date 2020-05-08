import {readdirSync} from 'fs'
import {resolve} from 'path'

import {projectRoot} from './../utils/get-project-root'

const getComponentDir = (source: string) => {
  return readdirSync(source, {withFileTypes: true})
    .filter(file => file.isDirectory())
    .map(file => file.name)
    .filter(name => name === 'components')
    .map(file => resolve(file))[0]
}

export const componentsDir = getComponentDir(projectRoot)
