$(function() {
    $(".addBtn").on("click", function(e) {
        e.preventDefault();
        let newBurger = {
            name: $(".nameInput").val().trim(),
        }
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger,
        }).then(result => {
            console.log(result);
            location.reload();
        })
        console.log(name)
    })
})