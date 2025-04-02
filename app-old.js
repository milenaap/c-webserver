
import http from 'http';

http.createServer( (req, res) => {

    // res.writeHead(200, {'Content-Type': 'aplication/json'});

    
    res.write('hola mundo');
    res.end();
})

.listen(8080);

console.log('Escuchando el puerto', 8080);
