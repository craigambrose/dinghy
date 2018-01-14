import React from 'react'
import { get } from 'lodash'

const stylesheet = {
  bordered: {
    border: { type: 'line' },
    style: {
      border: { fg: '#99CCFF' }
    }
  }
}

export default class Feed extends React.Component {
  render () {
    const { message } = this.props
    return (
      <box key={message.key} width='100%' class={stylesheet.bordered}>
        <text>{get(message, 'value.content.text')}</text>
      </box>
    )
  }
}
