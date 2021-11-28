// Create division for clear button and input text
const buttonDiv = document.createElement("div");
buttonDiv.id = "buttonDiv";
buttonDiv.style.margin = "10px";

// Creating a clear button
const clearButton = document.createElement("button");
clearButton.style.width = "100px";
clearButton.style.height = "50px";
clearButton.style.textAlign = "center";
clearButton.id = "clearButton";
clearButton.append(document.createTextNode("Clear"));
clearButton.style.fontSize = "20px";
clearButton.style.backgroundColor = "lightgray";

// on button click event
clearButton.addEventListener("click", clearButtonEvent);

// creating input text field
const inputData = document.createElement("input");
inputData.setAttribute("type", "text");
inputData.id = "inputData";
inputData.style.marginLeft = "20px";
inputData.style.width = "300px";
inputData.style.height = "40px";
inputData.style.fontSize = "24px";

inputData.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        inputDataFunction(inputData.value);
        // console.log(inputData.value);
    }
})

// adding button and input filed to buttonDiv and buttonDiv to body
buttonDiv.appendChild(clearButton);
buttonDiv.appendChild(inputData);
document.body.appendChild(buttonDiv);

// Create division for table
const tableDiv = document.createElement("div");
tableDiv.id = "tableDiv"
tableDiv.style.margin = "10px"

// Create table
const table = document.createElement("table");
table.id = "myTable";
table.style.border = "solid";
table.style.borderCollapse = "collapse";
table.style.fontSize = "20px";

// creating table body
const tableBody = document.createElement("tbody");
tableBody.id = "tBody";
table.appendChild(tableBody);

let numericColumnValue = -1; // count for numeric column
let alphabeticColumnArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]; // array for alphabetic column
let arrayCount = -1; // count for array
let cellId = "";

// loop for creating table row and column with it's data
for (let i = 0; i < 11; i++) {
    const tr = document.createElement("tr");
    tableBody.appendChild(tr);

    numericColumnValue++;

    for (let j = 0; j < 11; j++) {
        const td = document.createElement("td");

        td.style.width = "150px";
        td.style.height = "50px";
        td.style.textAlign = "center";
        td.style.border = "solid";

        // for 1st column
        if (j === 0) {
            td.style.width = "50px";
        }

        // for 1st column except 1st row
        if (i !== 0 && j === 0) {
            td.appendChild(document.createTextNode(numericColumnValue.toString()));
            td.style.backgroundColor = "lightgray";
        }

        // for 1st row except 1st column
        if (i === 0 && j !== 0) {
            td.style.fontWeight = "bolder";
            arrayCount++;

            td.appendChild(document.createTextNode(alphabeticColumnArray[arrayCount]));
            td.style.backgroundColor = "lightgray";
        }

        // for table cell where row and column value is 0
        if (i === 0 && j === 0) {
            td.style.backgroundColor = "lightgray";
        }

        // for every table cell except 1st row and 1st column
        if (i !== 0 && j !== 0) {
            td.id = (alphabeticColumnArray[i-1] + j); // setting up table cell id like A1, A2, A3...
            // console.log(td.id);
            td.style.borderColor = "blue";

            td.addEventListener("click", tableCellClick);
        }

        tr.appendChild(td); // add table data to table row
    }
}

// adding table to division and division to body
tableDiv.appendChild(table);
document.body.appendChild(tableDiv);

// function to manipulate input field and table cell
function inputDataFunction(data) {
    if (data.charAt(0) === "=") {
        let firstId = data.charAt(1)+data.charAt(2);
        let secondId = data.charAt(4)+data.charAt(5);

        console.log(firstId);
        console.log(secondId);

        let firstVal = document.getElementById("\"" + firstId.toString() + "\"").value;
        let secondVal = document.getElementById("\"" + secondId.toString() + "\"").value;

        console.log(firstVal);
        console.log(secondVal);

        document.getElementById(getCellId()).value = firstVal + secondVal;
    }
    else {
        document.getElementById(getCellId()).innerHTML = data;
    }

    document.getElementById("inputData").value = "";
    document.getElementById("inputData").blur();

    document.getElementById(getCellId()).style.backgroundColor = "";
}

// invoked whenever user click on table cell
function tableCellClick() {
    document.getElementById("inputData").focus();
    cellId = this.id;
    document.getElementById(cellId).style.backgroundColor = "yellow";
}

// return table cell ID
function getCellId() {
    return cellId;
}

// remove all data from table
function clearButtonEvent() {
    document.getElementById("tBody").empty();
}