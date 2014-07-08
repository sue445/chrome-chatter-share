var config= (function(){
    // public methods
    function getAccessToken(){
        return localStorage["access_token"] || "";
    }

    function setAccessToken(access_token){
        localStorage["access_token"] = access_token;
    }

    return {
        getAccessToken: getAccessToken,
        setAccessToken: setAccessToken
    };

    // private methods

}());