import ThreadWindow from '../../src/feeds/ThreadWindow'
import expect from 'expect.js'

describe('ThreadWindow', function () {
  describe('adding roots', function () {
    it('adds the first root', function () {
      const rootMessage = {
        key: 'intro',
        value: { type: 'post', text: 'Introducing myself' }
      }
      const window = new ThreadWindow()

      window.addRoot(rootMessage)

      expect(window.rootKeys()).to.eql(['intro'])
    })
  })
})
