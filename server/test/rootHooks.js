const app = require("./testServer");
const http = require("http");
let server;

before((done) => {
    server = http.createServer(app).listen(9127);
    console.log("server started \n");
    setTimeout(done, 2000);
});

after((done) => {
    server.close(() => {
        console.log("server closed");
    });
    setTimeout(done, 2000);
});

//hyperfine -r 5 --warmup 1 "mocha test" :  to check time
