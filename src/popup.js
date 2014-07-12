var showAlert = function(args){
    $("#alert_area").empty();

    var close_button = $("<button/>").addClass("close").attr("data-dismiss", "alert");
    $("<span/>").attr("aria-hidden", "true").html("&times;").appendTo(close_button);
    $("<span/>").addClass("sr-only").text("Close").appendTo(close_button);

    var alert = $("<div/>").addClass("alert alert-dismissible").addClass(args.alert_class).attr("role", "alert");
    close_button.appendTo(alert);

    if(args.caption){
        $("<strong/>").text(args.caption).appendTo(alert);
    }

    $("<span/>").text(" " + args.message).appendTo(alert);
    alert.appendTo($("#alert_area"));
};

$(function(){
    $("#login").click(function(){
        chatter.openAuthorizePage();
    });

    if(chatter.isLoggedIn()){
        $("#not_logged_in_area").hide();
        chatter.getCurrentUserInfo(function(user){
            $("#username").text(user.username);
        });
    } else{
        $("#logged_in_area").hide();
    }

    chrome.tabs.query({active: true}, function(tabs){
        var current_tab = tabs[0];
        if(current_tab.url.match(/^chrome:/)){
            $("#title").val("");
            $("#url").val("");
            $("#share").attr("disabled", "disabled");
        } else{
            $("#title").val(current_tab.title);
            $("#url").val(current_tab.url);
            $("#share").removeAttr("disabled");
            $("#comment").focus();
        }
    });

    chatter.getCurrentUserGroups(function(user_group_page){
        $.each(user_group_page.groups, function(i, group){
            $("<option>").val(group.id).text(group.name).appendTo($("#group"));
        });
    });

    $("#share").click(function(){
        chatter.postLink({
            group_id: $("#group").val(),
            url:      $("#url").val(),
            title:    $("#title").val(),
            comment:  $("#comment").val(),
            successCallback: function(feed_item){
                $("#url").val("");
                $("#title").val("");
                $("#comment").val("");

                showAlert({
                    alert_class: "alert-success",
                    caption:     "Success",
                    message:     "Successful in post"
                });
            }, errorCallback: function(jqXHR, textStatus, errorThrown){
                showAlert({
                    alert_class: "alert-warning",
                    caption:     jqXHR.statusText,
                    message:     jqXHR.responseJSON[0].message
                });
            }
        });
    });
});
