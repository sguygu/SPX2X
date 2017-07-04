var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/NewsFeed.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('CreatePost', function(post){
        console.log(post.postUser);
        console.log(post.postTitle);
        console.log(post.postImage);

        io.emit('CreatePost', post);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
   
