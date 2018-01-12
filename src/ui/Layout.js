import React, {Component} from 'react'
import Feed from './Feed'

class Layout extends Component {
  render () {
    return (
      <box top='center'
        left='center'
        width='50%'
        height='50%'
        border={{type: 'line'}}
        style={{border: {fg: 'blue'}}}>
        <Feed />
      </box>
    )
  }
}

export default Layout
