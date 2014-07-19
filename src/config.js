var config= (function(){
    // public methods
    function getAccessToken(){
        return localStorage.access_token || "";
    }

    function getRefreshToken(){
        return localStorage.refresh_token || "";
    }

    function getInstanceUrl(){
        return localStorage.instance_url || "";
    }

    function setRefreshToken(refresh_token){
        localStorage.refresh_token = refresh_token;
    }

    function saveAuthentication(access_token, instance_url){
        localStorage.access_token = access_token;
        localStorage.instance_url = instance_url;
    }

    function removeAuth(){
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("instance_url");
    }

    return {
        getAccessToken:     getAccessToken,
        getRefreshToken:    getRefreshToken,
        getInstanceUrl:     getInstanceUrl,
        saveAuthentication: saveAuthentication,
        setRefreshToken:    setRefreshToken,
        removeAuth:         removeAuth
    };

    // private methods

}());