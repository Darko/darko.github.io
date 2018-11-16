require('dotenv').config()

const NODE_ENV = process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV || 'production';

const api = {
  development: 'http://localhost:6969',
  production: 'https://myattemptat.design/api'
}

const domainMap = {
  development: `http://${window.location.host}`,
  production: `https://myattemptat.design`
}

export default {
  api: api[NODE_ENV],
  domain: domainMap[NODE_ENV]
}
