let APIURL = ''

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000'
        break
    case 'cnw-bluealbum-client.herokuapp.com':
    APIURL = 'https://cnw-bluealbum-server.herokuapp.com'
    break
}

export default APIURL