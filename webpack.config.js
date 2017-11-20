const path = require('path');

module.exports = require('./dll-webpack-config')(
  {
    root:path.resolve(__dirname),
    venders:require('./vender-list.js'),
    dllList:['@talentui/dll-react']
  }
)