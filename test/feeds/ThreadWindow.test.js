import ThreadWindow from '../../src/feeds/ThreadWindow'
import expect from 'expect.js'

function buildRootPost (key) {
  return {
    key: key,
    value: { type: 'post', text: 'Introducing myself' }
  }
}

describe('ThreadWindow', function () {
  describe('adding roots', function () {
    context('when the window isnt full', function () {
      it('adds the first root', function () {
        const window = new ThreadWindow()
        window.addRoot(buildRootPost('intro'))
        expect(window.rootKeys()).to.eql(['intro'])
      })

      it('doesnt add the same root twice', function () {
        const window = new ThreadWindow()
        window.addRoot(buildRootPost('intro'))
        window.addRoot(buildRootPost('intro'))
        expect(window.rootKeys()).to.eql(['intro'])
      })
    })

    describe('when the window is full', function () {
      it('holds newer message in the lobby', function () {
        const window = new ThreadWindow({maxSize: 1})
        window.addRoot(buildRootPost('intro'))
        window.addRoot(buildRootPost('second'))
        expect(window.rootKeys()).to.eql(['intro'])
        expect(window.lobbyKeys()).to.eql(['second'])
      })
    })
  })
})

// A new root message creates a thread and adds it to the window
// On a new reply
//    if it already has a thread in the window
//        wants to update that thread
//    if it doesn't have a thread in the window
//        wants to create a thread and offer it to the window