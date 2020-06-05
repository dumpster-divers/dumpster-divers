const axios = require('axios')

const baseURL = 'http://127.0.0.1:5000'

const request = axios.create({
  baseURL,
  timeout: 0,
})

request.interceptors.response.use(
  (result) => {
    const data = result.data

    return data
  },
  (error) => Promise.reject(error)
)

module.exports = request
