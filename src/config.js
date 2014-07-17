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

    function setAccessToken(access_token){
        localStorage.access_token = access_token;
    }

    function setRefreshToken(refresh_token){
        localStorage.refresh_token = refresh_token;
    }

    function setInstanceUrl(instance_url){
        localStorage.instance_url = instance_url;
    }

    function removeAuth(){
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("instance_url");
    }

    return {
        getAccessToken:  getAccessToken,
        getRefreshToken: getRefreshToken,
        getInstanceUrl:  getInstanceUrl,
        setAccessToken:  setAccessToken,
        setRefreshToken: setRefreshToken,
        setInstanceUrl:  setInstanceUrl,
        removeAuth:      removeAuth
    };

    // private methods

}());