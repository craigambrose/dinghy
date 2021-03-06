import React, {Component} from 'react'
import Post from './Post'
import ThreadWindow from '../feeds/ThreadWindow'

const Client = require('ssb-client')
const pull = require('pull-stream')

const threads = new ThreadWindow()

function loadMessages (handleMessage) {
  Client((err, sbot) => {
    if (err) throw err

    var minutes = 60 * 1000
    var hours = 60 * minutes
    var someTimeAgo = Number(new Date()) - 24 * hours

    var source = sbot.createFeedStream({ reverse: true, gt: someTimeAgo, live: true })
    var sink = pull.drain(handleMessage)

    pull(
      source,
      sink
    )
  })
}

class Feed extends Component {
  constructor () {
    super()
    this.state = {messages: []}
  }

  componentDidMount () {
    loadMessages(this.receivedMessage.bind(this))
  }

  receivedMessage (message) {
    if (message.sync) return

    const content = (message.value && message.value.content) || {}
    if (content.type === 'post' && !content.root) {
      threads.addRoot(message)
      this.setState({messages: threads.threads()})
    }
  }

  render () {
    const messages = this.state.messages || []
    return (
      <layout top={0} bottom={0} left={0} right={0}>
        { messages.map(this.renderMessage.bind(this)) }
      </layout>
    )
  }

  renderMessage (message) {
    return <Post key={message.key} message={message} />
  }
}

export default Feed
