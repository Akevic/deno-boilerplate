import { Log } from '../deps'

await Log.setup({
  handlers: {
    console: new Log.handlers.ConsoleHandler('DEBUG'),
  },

  loggers: {
    default: {
      level: 'DEBUG',
      handlers: ['console']
    }
  }
})

const log = Log.getLogger()

export {
  log
}
