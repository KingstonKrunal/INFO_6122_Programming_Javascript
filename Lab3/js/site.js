let clickCount = false;

function mouseOverEvent(data) {
    const message = document.getElementById("message");
    message.style.display = "block";
    message.innerHTML = data;
}

function generateTable() {
    if (!clickCount) {
        clickCount = true;

        const tableDiv = document.createElement("div");
        tableDiv.id = "tableDiv"
        tableDiv.style.margin = "10px"

        const table = document.createElement("table");
        table.style.borderSpacing = "5px";

        const tableBody = document.createElement("tbody");
        table.appendChild(tableBody);

        let tableDataCount = 0;

        for (let i = 0; i < 5; i++) {
            const tr = document.createElement("tr");
            tableBody.appendChild(tr);

            for (let j = 0; j < 3; j++) {
                const td = document.createElement("td");

                td.style.width = "100px";
                td.style.height = "50px";
                td.style.textAlign = "center";
                td.style.borderBottom = "5px solid LightGray";
                // td.style.borderBottomWidth = "5px solid";

                tableDataCount++;

                td.id = "cell" + tableDataCount;
                // console.log(td.id);

                td.appendChild(document.createTextNode("Cell " + tableDataCount));
                tr.appendChild(td);

                if (tableDataCount % 2 === 0) {
                    td.style.backgroundColor = "DimGray";
                } else {
                    td.style.backgroundColor = "Bisque";
                }
            }
        }

        tableDiv.appendChild(table);
        document.body.appendChild(tableDiv);
    } else {
        alert("Table has already been generated.");
    }

    for (let i = 1; i <= 15; i++) {
        document.getElementById(`cell${i}`).onmouseover = function () {
            mouseOverEvent(document.getElementById(`cell${i}`).textContent)
        };
    }
}

document.getElementById("generateButton").addEventListener("click", generateTable);