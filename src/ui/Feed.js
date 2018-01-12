import React, {Component} from 'react'

class Feed extends Component {
  render () {
    return (
      <box top='center'
        left='center'
        width='50%'
        height='50%'
        border={{type: 'line'}}
        style={{border: {fg: 'blue'}}}>
        The Feed
      </box>
    )
  }
}

export default Feed
