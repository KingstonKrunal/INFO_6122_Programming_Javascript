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

// on button click invoke clearButtonEvent
clearButton.addEventListener("click", clearButtonEvent);

// creating input text field
const inputElement = document.createElement("input");
inputElement.setAttribute("type", "text");
inputElement.id = "inputElement";
inputElement.style.marginLeft = "20px";
inputElement.style.width = "300px";
inputElement.style.height = "40px";
inputElement.style.fontSize = "24px";

// adding an event listener on input text element
inputElement.addEventListener("keyup", function ({keyCode}) {
    // key code 13 is for enter
    if (keyCode === 13) {
        inputElementFunction(inputElement.value);
    }
})

// adding button and input filed to buttonDiv and buttonDiv to body
buttonDiv.appendChild(clearButton);
buttonDiv.appendChild(inputElement);
document.body.appendChild(buttonDiv);

// Create division for table
const tableDiv = document.createElement("div");
tableDiv.id = "tableDiv"
tableDiv.style.margin = "10px"

// Create table
const table = document.createElement("table");
table.id = "spreadsheet";
table.style.border = "solid";
table.style.borderCollapse = "collapse";
table.style.fontSize = "20px";

// creating table body
const tableBody = document.createElement("tbody");
tableBody.id = "tBody";
table.appendChild(tableBody);

// selectedCellID will store cell ID value
let selectedCellID = null;

// loop for creating table row and column with it's data
function createTable() {
    let numericColumnValue = -1; // count for numeric column
    let alphabeticColumnArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]; // array for alphabetic column
    let arrayCount = -1; // count for array

    for (let i = 0; i < 11; i++) {
        // creating a table raw element
        const tr = document.createElement("tr");
        tableBody.appendChild(tr);

        numericColumnValue++; // plus 1 increment

        for (let j = 0; j < 11; j++) {
            // creating a table data element
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
                td.id = (alphabeticColumnArray[j - 1] + i); // setting up table cell id like A1, A2, A3...
                td.style.borderColor = "blue";

                // will invoke tableCellClick method on click
                td.addEventListener("click", tableCellClick);
            }

            tr.appendChild(td); // add table data to table row
        }
    }
}

createTable();

// adding table to division and division to body
tableDiv.appendChild(table);
document.body.appendChild(tableDiv);

let cellValues = {}; // map for getting two cell values

// function to manipulate input field and table cell
function inputElementFunction(data) {
    if (data.charAt(0) === "=") {
        // =A10+B10 (format)
        let result = data.toUpperCase().match(/[A-Za-z0-9]+/g);

        let firstVal = document.getElementById(result[0]).textContent;
        let secondVal = document.getElementById(result[1]).textContent;

        // this will set addition of two cell values
        document.getElementById(selectedCellID).textContent = parseInt(firstVal) + parseInt(secondVal);
    } else {
        document.getElementById(selectedCellID).innerHTML = data;
    }

    inputElement.value = ""; // input text value set to empty
    inputElement.blur(); // input text will be out of focus

    document.getElementById(selectedCellID).style.backgroundColor = ""; // background colour of cell will set to default after entering value

    cellValues[selectedCellID] = data.toUpperCase();
}

// invoked whenever user click on table cell
function tableCellClick() {
    // if selectedCellID is not null, background colour will set to null
    if (selectedCellID !== null) {
        document.getElementById(selectedCellID).style.backgroundColor = "";
    }

    inputElement.focus(); // on cell click input text element will be focused
    selectedCellID = this.id;

    // if cell has value, value will be set to input text otherwise it will set to empty
    if (cellValues[selectedCellID] !== undefined) {
        inputElement.value = cellValues[selectedCellID];
    } else {
        inputElement.value = "";
    }

    // cell background colour will set to yellow upon selection
    document.getElementById(selectedCellID).style.backgroundColor = "yellow";
}

// remove all data from table
function clearButtonEvent() {
    inputElement.value = "";

    // clear all styling and values
    for (let key of Object.keys(cellValues)) {
        document.getElementById(key).textContent = "";
        document.getElementById(key).style.backgroundColor = "";
    }

    document.getElementById(selectedCellID).style.backgroundColor = "";
    cellValues = {};
}