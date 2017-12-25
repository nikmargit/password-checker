$(document).ready(function() {
    const tableDiv = $("#table-div");
    const password = $("#password");
    const body = $("body");

    const cells = [
        "One number",
        "One uppercasse letter",
        "One lowercasse letter",
        "At least 8 chars",
        "At least one special char"
    ];
    let valid = ["", "", "", "", ""];

    function drawTable() {
        tableDiv.empty();
        let table = $("<table>");
        let tr, td;
        $.each(cells, function(index) {
            tr = $("<tr>");
            td = $("<td>");
            td1 = $("<td>");
            td.html(cells[index]);
            if (valid[index]) {
                td.attr("class", "cool");
                td1.html('<i class="fa fa-check-circle"></i>');
            } else {
                td.attr("class", "notCool");
                td1.html('<i class="fa fa-times"></i>');
            }
            tr.append(td1);
            tr.append(td);
            table.append(tr);
        });
        tableDiv.append(table);
    }

    function changeBackground() {
        var countTrue = valid.reduce(function(a, b) {
            return b ? a + 1 : a;
        }, 0);

        switch (countTrue) {
            case 1:
                body.css("background-color", "#FF2300");
                break;
            case 2:
                body.css("background-color", "#FF6900");
                break;
            case 3:
                body.css("background-color", "#FFC100");
                break;
            case 4:
                body.css("background-color", "#F7FF00");
                break;
            case 5:
                body.css("background-color", "#58FF00");
                break;
        }
    }

    function checkPass() {
        valid = ["", "", "", "", ""];
        const char = password.val();
        for (let i = 0; i < char.length; i++) {
            if (char.length > 7) valid[3] = true;

            if (char.charCodeAt(i) > 47 && char.charCodeAt(i) < 58) {
                valid[0] = true;
            } else if (char.charCodeAt(i) > 64 && char.charCodeAt(i) < 91) {
                valid[1] = true;
            } else if (char.charCodeAt(i) > 96 && char.charCodeAt(i) < 123) {
                valid[2] = true;
            } else if (char[i].toLowerCase() === char[i].toUpperCase()) {
                valid[4] = true;
            }
        }
        changeBackground();
        drawTable();
    }

    $(password).keyup(function() {
        checkPass();
    });
});
