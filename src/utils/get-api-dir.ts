import {readdirSync} from 'fs'
import {resolve} from 'path'

import {projectRoot} from './../utils/get-project-root'

// TODO: User recursive find dir
const getApiDir = (source: string) => {
  return `${source}/pages/api`
}

export const apiDir = getApiDir(`${projectRoot}`)
