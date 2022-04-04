
const hideEveryting = (callback) => {
    $("#timekeep-gif").slideUp(() => {
        $("#timekeep-animation").slideUp("fast", () => {

            $("#mst-gif").slideUp("fast", () => {
                $("#mst-animation").slideUp("fast",
                    callback
                )
            })

        })
    })


}


$(document).ready(() => {
    //code here
    console.log("should work");
    console.log("update");

    // Timekeep click animation
    $("#timekeep").click(() => {
        if (!$("#timekeep-animation").is(":visible")) {
            hideEveryting(() => {
                $("#timekeep-animation").slideDown("fast", () => {
                    $("#timekeep-gif").slideDown()
                })
            });
        }
        else {
            $("#timekeep-gif").slideUp(() => {
                $("#timekeep-animation").slideUp("fast")
            })

        }

    });

    // MST click animation
    $("#mst").click(() => {
        if (!$("#mst-animation").is(":visible")) {
            hideEveryting(() => {
                $("#mst-animation").slideDown("fast", () => {
                    $("#mst-gif").slideDown("fast")
                })
            })
        }
        else {
            $("#mst-gif").slideUp("fast", () => {
                $("#mst-animation").slideUp("fast")
            })

        }

    });

});
