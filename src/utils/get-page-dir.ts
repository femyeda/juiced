import {projectRoot} from './../utils/get-project-root'

// TODO: User recursive find dir
const getPageDir = (source: string) => {
  return `${source}/pages`
}

export const pageDir = getPageDir(`${projectRoot}`)
