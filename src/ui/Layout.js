import React, {Component} from 'react'
import Feed from './Feed'

const stylesheet = {
  bordered: {
    border: {
      type: 'line'
    },
    style: {
      border: {
        fg: 'blue'
      }
    }
  }
}

class Layout extends Component {
  render () {
    return (
      <box top='center' left='center' width='100%' height='100%' label=' Your Scuttlebutt Feed ' class={stylesheet.bordered}>
        <Feed />
      </box>
    )
  }
}

export default Layout
