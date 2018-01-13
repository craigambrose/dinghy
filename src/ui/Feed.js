import React, {Component} from 'react'
import { get } from 'lodash'

const Client = require('ssb-client')
const pull = require('pull-stream')

function loadMessages (handleMessage) {
  Client((err, sbot) => {
    if (err) throw err

    var minutes = 60 * 1000
    var someTimeAgo = Number(new Date()) - 60 * minutes

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
    return <box key={message.key} width='90%'><text>{JSON.stringify(get(message, 'value.content'))}</text></box>
  }
}

export default Feed
