var chatter = (function(){
    // OAuth Configuration
    var login_url    = 'https://login.salesforce.com/';
    var client_id    = '3MVG9A2kN3Bn17hsXCLd3JHayKA_4lVHkqfvD.R4Ut3k4Haw7idK3YGmkX7XrxAKlNqqS0svqtIgT0uG3qThc';
    var redirect_uri = 'https://login.salesforce.com/services/oauth2/success';
    var state        = "Chrome_Chatter_Share";
    var version      = "/v30.0";
    var max_page_size = 250;

    // public methods
    function openAuthorizePage(){
        chrome.tabs.create({
            url: getAuthorizeUrl(login_url, client_id, redirect_uri)
        });
    }

    function getCurrentUserInfo(callback){
        var client = createClient();
        client.ajax(version + "/chatter/users/me", callback);
    }

    function getCurrentUserGroups(callback){
        var client = createClient();
        client.ajax(version + "/chatter/users/me/groups?pageSize=" + max_page_size, callback);
    }

    function postLink(args){
        args.successCallback = args.successCallback || function(){};
        args.errorCallback   = args.errorCallback   || function(){};

        var payload = {
            attachment: {
                attachmentType: "Link",
                url:            args.url,
                urlName:        args.title
            },
            body: {
                messageSegments: [
                    {
                        type: "Text",
                        text: args.comment
                    }
                ]
            }
        };

        var client = createClient();
        client.ajax(
            version + "/chatter/feeds/record/"+ args.group_id + "/feed-items",
            args.successCallback,
            args.errorCallback,
            "POST",
            JSON.stringify(payload)
        );
    }

    function isLoggedIn(){
        return config.getAccessToken().length > 0 && config.getInstanceUrl().length > 0;
    }

    return {
        openAuthorizePage:    openAuthorizePage,
        getCurrentUserInfo:   getCurrentUserInfo,
        getCurrentUserGroups: getCurrentUserGroups,
        postLink:             postLink,
        isLoggedIn:           isLoggedIn
    };

    // private methods
    function getAuthorizeUrl(login_url, client_id, redirect_uri){
        return login_url+'services/oauth2/authorize?display=page&response_type=token&client_id=' + encodeURIComponent(client_id) +
            '&redirect_uri='+encodeURIComponent(redirect_uri) +'&state=' + state;
    }

    function createClient(){
        var client = new forcetk.Client(client_id, login_url);
        client.proxyUrl = null;
        client.setSessionToken(config.getAccessToken(), null, config.getInstanceUrl());
        return client;
    }
}());
