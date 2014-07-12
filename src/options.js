$(function(){
    $("#login").click(function(){
        chatter.openAuthorizePage();
    });

    $("#logout").click(function(){
        config.removeAuth();
        location.reload();
    });

    if(chatter.isLoggedIn()){
        $("#not_logged_in_area").hide();
        chatter.getCurrentUserInfo(function(user){
            $("#username").text(user.username);
        });
    } else{
        $("#logged_in_area").hide();
    }
});
