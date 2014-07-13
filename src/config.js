var config= (function(){
    // public methods
    function getAccessToken(){
        return localStorage.access_token || "";
    }

    function getInstanceUrl(){
        return localStorage.instance_url || "";
    }

    function setAccessToken(access_token){
        localStorage.access_token = access_token;
    }

    function setInstanceUrl(instance_url){
        localStorage.instance_url = instance_url;
    }

    function removeAuth(){
        localStorage.removeItem("access_token");
        localStorage.removeItem("instance_url");
    }

    return {
        getAccessToken: getAccessToken,
        getInstanceUrl: getInstanceUrl,
        setAccessToken: setAccessToken,
        setInstanceUrl: setInstanceUrl,
        removeAuth:     removeAuth
    };

    // private methods

}());