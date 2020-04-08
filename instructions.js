'use strict'

const path = require('path')
const swaggerUiDist = require('swagger-ui-dist')
const swaggerUiAssetPath = swaggerUiDist.getAbsoluteFSPath()

module.exports = async function (cli) {
  try {
    await cli.makeConfig('swagger.js', path.join(__dirname, 'config/swagger.js'))
    cli.command.completed('create', 'config/swagger.js')

    await cli.copy(path.join(__dirname, swaggerUiAssetPath), 'public/docs')
    cli.command.completed('copy assets', 'public/docs')
  } catch (error) {
    // ignore errors
    cli.error(error)
  }
}
