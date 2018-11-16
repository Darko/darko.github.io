require('dotenv').config()

const PLATFORM = process.env.REACT_APP_PLATFORM || process.env.PLATFORM || 'production';

const api = {
  development: 'http://localhost:6969',
  production: 'https://myattemptat.design/api'
}

export default {
  api: api[PLATFORM]
}
