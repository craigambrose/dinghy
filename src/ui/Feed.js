import React, {Component} from 'react'

const Client = require('ssb-client')
const pull = require('pull-stream')

function loadMessages (handleMessage) {
  Client((err, sbot) => {
    if (err) throw err

    var source = sbot.createFeedStream({ reverse: true, limit: 10 })
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
    this.setState({messages: [message, ...this.state.messages]})
  }

  render () {
    const messages = this.state.messages || []
    return (
      <layout width='95%' height='95%'>
        { messages.map(this.renderMessage.bind(this)) }
      </layout>
    )
  }

  renderMessage (message) {
    return <box key={message.key} width='90%'><text>{message.key}</text></box>
  }
}

export default Feed
