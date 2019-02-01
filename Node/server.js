const server = require('net').createServer();
const {StringDecoder} = require('string_decoder');
const decoder = new StringDecoder('utf8');
const bad = ['aa','ss','a'];

server.on('connection', socket => { 
    console.log('client connection');
    let username = false;
    // socket.username = 'ADMIN'

    socket.on('data', data => {

        let msg = decoder.write(data).trim();
       
        if  (!username) {
            username = msg;
            process.stdout.write(`${ username } joined \n`);
           
        } else {
            process.stdout.write(`${ username } says: ${ msg }\n`);
        } 

        if(msg === 'logout'){
            socket.end();
        }

    });

   socket.on('end', () => {
       console.log('bye');
   })
});

server.listen(8080, () => {
    console.log(`server listening port ${8080}`                                                 );
});



//cliente
