$(function () {
    var socket = io();
    $('form').submit(function(){
        var post = {};
        post.postUser = $("input[name=postUser]").val();
        post.postTitle = $("input[name=postTitle]").val();
        post.postImage = $("input[name=postImage]").prop('files')[0];
        socket.emit('CreatePost', post);
        return false;
    });
});