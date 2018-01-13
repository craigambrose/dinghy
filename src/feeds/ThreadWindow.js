import { map, merge, find } from 'lodash'

const defaultOptions = {
  maxSize: 10
}

export default class ThreadWindow {
  constructor (options = {}) {
    this.roots = []
    this.lobby = []
    this.options = merge(defaultOptions, options)
  }

  addRoot (msg) {
    if (this._isFull()) {
      this._addToLobby(msg)
    } else {
      if (!find(this.roots, { key: msg.key })) {
        this.roots.push(msg)
      }
    }
  }

  rootKeys () {
    return map(this.roots, 'key')
  }

  lobbyKeys () {
    return map(this.lobby, 'key')
  }

  // PRIVATE

  _isFull () {
    return this.roots.length >= this.options.maxSize
  }

  _addToLobby (msg) {
    this.lobby.push(msg)
  }
}
