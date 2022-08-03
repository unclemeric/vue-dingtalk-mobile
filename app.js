const ssd = require('simple-sftp-deploy')
const path = require('path')
ssd.deploy({
  is_bak: false,
  remote_path: '/xxx/frontweb/xxx',
  assets_path: path.resolve(__dirname, './dist'),
  host: '',
  port: '22',
  user: 'xxx',
  password: 'xxx'
})
