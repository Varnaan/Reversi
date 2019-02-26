let static = require('node-static');
let http = require('http');

let port = process.env.PORT;
let directory = __dirname + '/public';

if (typeof port == 'undefined' || !port) {
    directory = './public';
    port = 8080;
}

let file = new static.Server(directory);

const app = http.createServer(
    function (req, res) {
        request.addListener('end',
            function () {
                file.server(req, res);
            }
        ).resume();
    }
).listen(port);

console.log("Server runnin' on" + port);