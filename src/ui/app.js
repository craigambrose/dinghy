import React from 'react'
import blessed from 'blessed'
import {render} from 'react-blessed'
import Layout from './Layout'

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed hello world'
})

// Adding a way to quit the program
screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  return process.exit(0)
})

// Rendering the React app using our screen
render(<Layout />, screen)
