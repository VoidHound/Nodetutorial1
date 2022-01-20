const http = require('http');

const server = http.createServer((req,res)=>{ 
    if(req.url === '/'){
        res.write('Welcome to our homepage');
    }
    else if(req.url === '/about'){
        res.write('Here is a short history')
    }
    else{
        res.write(`
        <h1>Oops!</h1>
            <p>We can't seem to find the page that you are looking for</p>
            <a href="/">Homepage</a>
        `)
    }
    res.end();
});

server.listen(5000);