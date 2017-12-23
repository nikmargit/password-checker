$(document).ready(function() {
    const tableDiv = $("#table-div");
    const password = $("#password");
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
        drawTable();
    }

    $(password).keyup(function() {
        checkPass();
    });
});
