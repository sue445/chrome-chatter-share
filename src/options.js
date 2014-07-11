$(function(){
    $("#login").click(function(){
        chatter.openAuthorizePage();
    });

    $("#logout").click(function(){
        config.removeAuth();
        location.reload();
    });

    if(chatter.isLoggedIn()){
        $("#not_logged_in").hide();
        chatter.getCurrentUserInfo(function(user){
            $("#username").text(user.username);
        });
    } else{
        $("#logged_in").hide();
    }
});
