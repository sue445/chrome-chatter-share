var chatter = (function(){
    // OAuth Configuration
    var login_url    = 'https://login.salesforce.com/';
    var client_id    = '3MVG9A2kN3Bn17hsXCLd3JHayKA_4lVHkqfvD.R4Ut3k4Haw7idK3YGmkX7XrxAKlNqqS0svqtIgT0uG3qThc';
    var redirect_uri = 'https://login.salesforce.com/services/oauth2/success';
    var state        = "Chrome_Chatter_Bookmark";

    // public methods
    function openAuthorizePage(){
        chrome.tabs.create({
            url: getAuthorizeUrl(login_url, client_id, redirect_uri)
        })
    }

    function isLoggedIn(){
        return config.getAccessToken().length > 0;
    }

    return {
        openAuthorizePage: openAuthorizePage,
        isLoggedIn: isLoggedIn
    };

    // private methods
    function getAuthorizeUrl(login_url, client_id, redirect_uri){
        return login_url+'services/oauth2/authorize?display=page'
            +'&response_type=token&client_id='+escape(client_id)
            +'&redirect_uri='+escape(redirect_uri)
            +'&state=' + state;
    }

    function createClient(){
        return new forcetk.Client(client_id, login_url);
    }
}());
