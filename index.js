'use strict'

const data = require('./config/data.json')

module.exports = (type) => {
  return type ? data[type] : data
}
