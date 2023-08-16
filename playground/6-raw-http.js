const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=8a56c8e37a90e8dc240b5b71c09cce9c&query=45,-75&units=f'

const request = http.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)

    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()