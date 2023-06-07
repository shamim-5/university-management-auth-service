import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorlogger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🛢 Database connected successfully`)

    app.listen(config.port, () => {
      logger.info(`🚀 Example app listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error(`Failed to connect to database`, error)
  }
}

main()
