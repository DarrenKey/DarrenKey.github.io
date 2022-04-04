

$(document).ready(() => {
    //code here
    console.log("should work");
    console.log("update");
    $(".timekeep").click(() => {
        if (!$(".animations").is(":visible")) {
            $(".animations").slideDown("fast", () => {
                $(".timekeep-gif").show("fast")
            })
        }
        else {
            $(".timekeep-gif").hide("fast", () => {
                $(".animations").slideUp("fast")
            })

        }

    });

});
