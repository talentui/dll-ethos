const path = require('path');

module.exports = require('@talentui/dll-webpack-config')(
  {
    root:path.resolve(__dirname),
    venders:require('./vender-list.js')
  }
)