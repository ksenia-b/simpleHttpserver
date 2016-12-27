var http = require('http');

//req – объект запроса («request»), то есть то, что прислал клиент (обычно браузер), из него читаем данные.
//res – объект ответа («response»), в него пишем данные в ответ клиенту.
http.createServer(function(req, res){
	res.writeHead(200, {'Content-type': 'text/plain'}); //res.writeHead(HTTP-код, [строка статуса], {заголовки}) пишет заголовки
	res.write('I am little cute girl'); //res.write(txt) пишет текст в ответ
	res.end(); //res.end(txt) – завершает запрос ответом
}).listen(1488);
