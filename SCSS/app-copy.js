const pokemon = require("pokemon");
const fs = require("fs");
const http = require("http");
const { hasIn } = require("immutable");

const len = [
  "de",
  "en",
  "fr",
  "es",
  "ja",
  "ko",
  "ru",
  "th",
  "zh-Hans",
  "zh-Hant",
];

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    for (let i = 0; i < len.length; i++) {
      response.write("<button>" + len[i] + "</button>");
    }

    for (let i = 0; i < pokemon.all().length; i++) {
      for (let j = 0; j < len.length; j++) {
        response.write("<li>" + pokemon.all(len[j])[i] + "</li>");
      }
    }

    response.write(
      "<script>" +
        'const len = ["de","en","fr","es","ja","ko","ru","th","zh-Hans","zh-Hant"];'
    );
    response.write(`for(let i = 0 ; i < len.length; i++){
        const btn = document.getElementsByTagName('button')
        const li = document.getElementsByTagName('li')

        btn[i].addEventListener('click',function(e){
            function pokeLanguage(x,y){
                if (e.target.innerText === x){
                  for(let j=0 ; j < 9050 ; j++){
                    li[j].style.display = ''
                      if (j%10 !== y){
                          li[j].style.display = 'none'
                      }
                  }
              }};

              for( let k = 0 ; k < 10 ; k ++ ){
                pokeLanguage(len[k],k);
              }
})
    }`);
    response.end("</script>");
  })
  .listen(8080);
