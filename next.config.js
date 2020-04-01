const dotenv = require('dotenv')
const yaml = require('js-yaml');
const fs = require('fs');
dotenv.config()

let obj = yaml.safeLoad(fs.readFileSync('./eg.yaml', 'utf8'));

console.log(obj, '读取配置文件');
module.exports = {
  /* config options here */
  env: {
      name: 'mall of asia'
  }
}