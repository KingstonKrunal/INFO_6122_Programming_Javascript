// Creating a clear button
const cardContainerDiv = document.createElement("div");
cardContainerDiv.className = "grid-container";
cardContainerDiv.style.visibility = "hidden";

// // Card 1
// const cardDiv1 = document.createElement("div");
// cardDiv1.className = "card grid-item";
// cardDiv1.style.width = "18rem";
//
// const img1 = document.createElement("img");
// img1.id = "img1";
// img1.className = "card-img-top";
// img1.alt = "img 1";
// cardDiv1.appendChild(img1);
//
// const cardBody1 = document.createElement("div");
// cardBody1.className = "card-body";
//
// const title1 = document.createElement("h5");
// title1.className = "class-title";
// cardBody1.appendChild(title1);
//
// const cardText1 = document.createElement("p");
// cardText1.className = "card-text";
// cardBody1.appendChild(cardText1);
//
// // append card body to card div
// cardDiv1.appendChild(cardBody1);

// "cardDiv1", "cardDiv2", "cardDiv3", "cardDiv4", "cardDiv5", "cardDiv6", "cardDiv7", "cardDiv8"
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