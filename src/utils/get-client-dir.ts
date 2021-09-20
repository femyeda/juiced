import {projectRoot} from './get-project-root'

// TODO: User recursive find dir
const getClientDir = (source: string) => {
  return `${source}/client`
}

export const clientDir = getClientDir(`${projectRoot}`)
