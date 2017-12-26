$(document).ready(function() {
    const tableDiv = $("#table-div");
    const password = $("#password");
    const body = $("body");
    let table;

    const cells = [
        "At least one number",
        "One uppercasse letter",
        "One lowercasse letter",
        "At least eight chars",
        "One special character"
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
                td1.html('<i class="fa fa-check-circle cool"></i>');
            } else {
                td.attr("class", "notCool");
                td1.html('<i class="fa fa-times notCool"></i>');
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
                $(":root").css("--main-color", "#BE1500");
                break;
            case 2:
                $(":root").css("--main-color", "#982A00");
                break;
            case 3:
                $(":root").css("--main-color", "#723F00");
                break;
            case 4:
                $(":root").css("--main-color", "#4C5400");
                break;
            case 5:
                $(":root").css("--main-color", "#266900");
                tableDiv.html('<i class="fa fa-check-circle cool done"></i>');
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
        drawTable();
        changeBackground();
    }

    $(password).keyup(function() {
        checkPass();
    });
    $(password).keydown(function() {
        checkPass();
    });
});
