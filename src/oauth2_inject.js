/**
 * @author James Valentine
 * Taken from: https://github.com/borismus/oauth2-extensions/blob/master/lib/oauth2_inject.js
 * based on: http://smus.com/oauth2-chrome-extensions
 */

// This script serves as an intermediary between the the oauth result and our processing of it.

var state = "Chrome_Chatter_Share";
var login_success_action = "Chrome_Chatter_Share_login_success";

// Get all ? params from this URL
var url = window.location.href;

//Only intercept responses that are actually for us by using the state variable in the response URL

if (url.indexOf(state) > 0) {

    var query_string = url.substring(url.indexOf('#') + 1);

    // Also append the current URL to the params
    query_string += '&from=' + encodeURIComponent(url);

    // Redirect back to the extension itself so that we have priveleged
    // access again
    var redirect = chrome.extension.getURL('oauth_result.html');

    chrome.extension.sendMessage({action: login_success_action, query_string : query_string}, function(success) {
        // console.log("Got a login response success result of: " + success);
        if (success) {
            var addedElement = document.createElement('h1');
            addedElement.appendChild(document.createTextNode('Authorisation successful. Please close this window'));

            var body = document.body;
            body.insertBefore(addedElement, body.firstChild);
        }
    });
}

