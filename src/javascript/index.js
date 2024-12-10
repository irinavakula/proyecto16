$(document).ready(function() {
    $("#createBtn").click(function() {
        $("#crudForm")[0].reset();
        $("#crudForm button").show().text("Create");
        $("#inputId").prop("disabled", false);
    });

    $("#readBtn").click(function() {
        var id = $("#inputId").val();
        if (id) {
            $.ajax({
                url: "/api/read/" + id,
                method: "GET",
                success: function(response) {
                    $("#inputData").val(response.data);
                    $("#crudForm button").hide();
                },
            })
        }
    })
})