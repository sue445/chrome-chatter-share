$(function(){
    $("#login").click(function(){
        chatter.openAuthorizePage();
    });

    $("#logout").click(function(){
        config.setAccessToken("");
        location.reload();
    });

    if(chatter.isLoggedIn()){
        $("#not_logged_in").hide();
    } else{
        $("#logged_in").hide();
    }
});
