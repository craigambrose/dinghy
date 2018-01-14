import React, {Component} from 'react'
import { map } from 'lodash'
import { registerLogHandler } from './logger'

class Console extends Component {
  constructor () {
    super()
    this.state = { logs: [] }
  }

  componentDidMount () {
    registerLogHandler(this.handleLog.bind(this))
  }

  handleLog (text) {
    const newLogs = [text, ...this.state.logs].slice(0, 5)
    this.setState({logs: newLogs})
  }

  render () {
    const messages = this.state.logs.map((string, index) => <box key={index} width='90%'><text>{string}</text></box>)
    return <layout top={0} bottom={0} left={0} right={0}>{messages}</layout>
  }
}

export default Console
