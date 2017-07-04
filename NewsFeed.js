$(function () {
    var socket = io();
    socket.on('CreatePost', function(post){
        var $title = $("<span>", {"class": "tite", "text": post.postTitle});
        var $user = $("<span>", {"class": "user", "text": post.postUser});
        var $image = $("<img>", {"class": "image", "src": '#'});

        var reader = new FileReader();
        reader.onload = function(e){
            $image.attr('src', e.target.result);
        }
        var blob = new Blob([post.postImage], {type: "image/jpeg"});
        reader.readAsDataURL(blob);
        
        var $post = $("<div>", {"class" : "post"});
        $post.append($title).append($user).append($image);
        $('#posts').append($post);
        
        //$('#messages').append($('<li>').text(post.postUser));
        //$('#messages').append($('<li>').text(post.postTitle));
        //$('#messages').append($('<li>').text(post.postTitle));
    });
});