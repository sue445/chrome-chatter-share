$(function(){

    var getQueryValue = function(query_string, name){
        query_string = "&" + query_string + "&";
        var regexp = new RegExp("&" + name + "=(.+?)&");
        var matches = query_string.match(regexp);
        return decodeURIComponent(matches[1]);
    };

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if(request.action === "Chrome_Chatter_Share_login_success"){
            var access_token = getQueryValue(request.query_string, "access_token");
            var instance_url = getQueryValue(request.query_string, "instance_url");
            config.setAccessToken(access_token);
            config.setInstanceUrl(instance_url);
            sendResponse("success");
        }
    });

});