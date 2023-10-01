import format from '@/src/api/common/dateFormat'

export default class LogFactory {
  private static level = process.env.LOGGER_LEVEL

  static error(message: any) {
    if (
      this.level === 'error' ||
      this.level === 'info' ||
      this.level === 'debug'
    )
      console.error(this.format('ERROR'), message)
  }

  static info(message: any) {
    if (this.level === 'info' || this.level === 'debug')
      console.info(this.format('INFO'), message)
  }

  static debug(message: any) {
    if (this.level === 'debug') console.debug(this.format('DEBUG'), message)
  }

  static log(message: any) {
    console.log(this.format('LOG'), message)
  }

  private static format(type: string) {
    return `${format('[yyyy-MM-dd HH:mm:ss]', new Date())} [${type}]`
  }
}
