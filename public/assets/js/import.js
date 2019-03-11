$(function () {
    $(".addBtn").on("click", function () {
        let newName = {
            name: $("#burgerName").val().trim()
        }

        $.ajax("/api/burger", {
            type: "POST",
            data: newName
        }).then(function () {
            console.log("added new burger");
            location.reload();
        })
    })

    $(".deleteBtn").on("click", function () {
        console.log($(this).attr("data-which"));
        let id = $(this).attr("data-which");
        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(function () {
            console.log("deleted burger");
            location.reload();
        })
    })

    $(".devourBtn").on("click", function () {
        let id = $(this).attr("data-which");
        console.log(id);
        let devour = $(this).attr("data-newDevour");
        console.log(devour + " is devour attr on button")
        let newDevour = {
            devoured: devour,
        }
        console.log(newDevour);
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevour
        }).then(function (result) {
            console.log(result)
            // add reload
            location.reload();
        })
    })


})
