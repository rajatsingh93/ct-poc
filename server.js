var http = require('http');
var fs = require('fs');

const week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

//create a server object:
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'}); // http header
var url = req.url;
var reqUrl=url.replace('/','');
 if(url ==='/'){
	fs.readFile('./index.html',function (error, data) {
       if (error) {
            res.writeHead(404);
            res.write('File not found!');
        } else {  	
            res.write(data);
        }
        res.end();
    });
 }else if(week.indexOf(reqUrl) != -1){
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	res.write('<h1>'+reqUrl +" "+time+'</h1>'); //write a response
    res.end(); //end the response
 }else{
    res.write('<h1>Page not found<h1>'); //write a response
    res.end(); //end the response
 }

}).listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});