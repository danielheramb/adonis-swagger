'use strict'

const { Command } = require('@adonisjs/ace')
const path = require('path')
//const SwaggerAssetPath = require('swagger-ui-dist').getAbsoluteFSPath()

class SwaggerCreateConfig extends Command {
  static get signature () {
    return `
      swagger:create_config
    `
  }

  static get description () {
    return 'Create config file'
  }

  async handle (args, options) {
    this.info('Creating config/swagger.js')
    await this.copy(path.join(__dirname, '../config/swagger.js'), 'config/swagger.js')
    this.success(`${this.icon('success')} Completed`)
  }
}

module.exports = SwaggerCreateConfig
