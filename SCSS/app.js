const pokemon = require('pokemon');
const fs = require('fs');
const http = require('http');

fs.writeFile('./pokemon.html',"", (err) => {
    if (err) {
        console.log(err);
    }}
    );

for ( let i = 0 ; i < pokemon.all().length ; i++){
    fs.appendFile('pokemon.html', "<li>" + pokemon.all('ko')[i]+ "</li>", (err) => {
        if (err) {
            console.log(err);
        }})};

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end(fs.readFileSync('./pokemon.html'));
}).listen(8000)