$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var nameInput = $("#user-name");
  $("#user-form").on("submit", handleUserFormSubmit);

  function handleUserFormSubmit(event) {
        console.log("working");
        event.preventDefault();
        if (!nameInput.val().trim().trim()) {
            return;
        }
        upsertUser({
            name: nameInput
                .val()
                .trim()
        });
    }

    function upsertUser(UserData) {
        $.post("/api/users", UserData).then(function() {
            //getusers
         window.location.href = "/user";   
        });
    }

    function createUserRow(UserData) {
        console.log(UserData);
        var newTr = $("<tr>");
        newTr.data("user", UserData);
        newTr.append("<td>" + UserData.name + "</td>");
        return newTr;
    }

    function getusers() {
        $.get("/api/users", function (data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createUserRow(data[i]));
            }
            renderUserList(rowsToAdd);
            nameInput.val("");
        });
    }

    function renderUserList(rows) {
        authorList.children().not(":last").remove();
        authorContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            authorList.prepend(rows);
        } else {
            renderEmpty();
        }
    }

    function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("You must enter a name before you continue!");
        authorContainer.append(alertDiv);
    }

});