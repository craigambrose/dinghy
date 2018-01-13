import { map } from 'lodash'

export default class ThreadWindow {
  constructor () {
    this.roots = []
  }

  addRoot (msg) {
    this.roots.push(msg)
  }

  rootKeys () {
    return map(this.roots, 'key')
  }
}
