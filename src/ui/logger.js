
let handlers = []

export function registerLogHandler (handler) {
  handlers.push(handler)
}

export const console = {
  log: (text) => {
    handlers.map((handler) => {
      handler(text)
    })
  }
}
