import React, {Component} from 'react'
import Feed from './Feed'
// import Console from './Console'

const stylesheet = {
  bordered: {
    border: { type: 'line' },
    style: {
      border: { fg: 'blue' }
    }
  }
}

class Layout extends Component {
  render () {
    return (
      <element>
        <box top='20%' left={0} right={0} bottom={0} label=' Your Scuttlebutt Feed ' class={stylesheet.bordered}>
          <Feed />
        </box>
        {
          /* <box top='70%' left={0} right={0} bottom={0} label=' Console Logs ' class={stylesheet.bordered}>
            <Console />
          </box> */
        }
      </element>
    )
  }
}

export default Layout
