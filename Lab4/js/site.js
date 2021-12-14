// Creating a clear button
const cardContainerDiv = document.createElement("div");
cardContainerDiv.className = "grid-container";
cardContainerDiv.style.visibility = "hidden";

let cardDivArray = [];
let imgArray = [];
let cardBody = [];
let cardTitle = [];
let cardText = [];

for (let i = 0; i < 8; i++) {
    cardDivArray[i] = document.createElement("div");
    cardDivArray[i].className = "card grid-item";
    cardDivArray[i].style.width = "18rem";

    imgArray[i] = document.createElement("img");
    imgArray[i].id = "img" + i;
    imgArray[i].className = "card-img-top";
    imgArray[i].alt = "img " + (i + 1);
    cardDivArray[i].appendChild(imgArray[i]);

    cardBody[i] = document.createElement("div");
    cardBody[i].className = "card-body";

    cardTitle[i] = document.createElement("h5");
    cardTitle[i].className = "class-title";
    cardBody[i].appendChild(cardTitle[i]);

    cardText[i] = document.createElement("p");
    cardText[i].className = "card-text";
    cardBody[i].appendChild(cardText[i]);

// append card body to card div
    cardDivArray[i].appendChild(cardBody[i]);
}

// append card to cardContainerDiv
for (let i = 0; i < 8; i++) {
    cardContainerDiv.appendChild(cardDivArray[i]);
}

// add cardContainerDiv to body
document.body.appendChild(cardContainerDiv);

// Show posts button onClick event
document.getElementById("showPostsButton").addEventListener("click", function () {
    cardContainerDiv.style.visibility = "visible";

    let url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let i = 0; i < 8; i++) {
                // console.log(`${data[i].title}`);
                // console.log(`${data[i].body}`);

                cardTitle[i].innerHTML = `${data[i].title}`;
                cardText[i].innerHTML = `${data[i].body}`;
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    url = 'https://jsonplaceholder.typicode.com/photos';

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let i = 0; i < 8; i++) {
                // console.log(`${data[i].url}`);

                imgArray[i].src = new URL(`${data[i].url}`);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
});