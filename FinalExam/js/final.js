/******
 * HTML code for form is provided for you.
 * Fill the form with dog name. Use this name to be displayed as heading for dog information
 * Upon clicking the submit button perform following tasks
 * 1.hide div with an id formContent
 * 2. Get the page working as shown in the screenshot
 *
 * To obtain data as shown in the screenshot you would require to do the following:
 *
 * Create an asynchronous function loadDogInfo() that accepts two parameters url and dogName.
 * Retrieve a list of dog breed using the URL https://dog.ceo/api/breeds/list/all.
 * This url must be passed as a parementer for loadDogInfo() function
 * Once you retrieve dog breeds, choose one random dog breed.
 * You can either create your own function to get random breed or Use the function provided to you.
 * Once you have got a single dog breed use the link https://dog.ceo/api/breed/<insert_breed_here>/images/random to fetch a random image
 * Also get a random dog fact from the link https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1
 *
 * CSS is coded for you so you do not need to make any changes to css file.
 * HTML file is also provided for you. You are not allowed to add any markup on HTML file.
 *
 * Apart from the HTML code provided to you, you would need to create HTML elements using JavaScript.
 * You would need to add following structure inside of the content div
 *  h1 -> Dog's name obtained from the form
 *  img -> contains the image retrieved from the link provided
 *  div -> a wrapper for a paragraph containing a random fact retrieved from the link provided
 *****/


document.getElementById("btnSubmit").addEventListener("click", function () {
    document.getElementById("formContent").style.display = "none";

    let contentDiv = document.getElementById("content");

    // h1 element for dog name
    const h1ForDogName = document.createElement("h1");
    h1ForDogName.id = "dogName";
    h1ForDogName.style.textAlign = "center";
    h1ForDogName.innerHTML = document.getElementById("txtBoxDogName").value;

    contentDiv.appendChild(h1ForDogName);

    let url = "https://dog.ceo/api/breeds/list/all";

    let dogBreed = JSON.stringify(loadDogInfo(url));

    // set image
    const imgForDog = document.createElement("img");
    imgForDog.id = "imgDog";
    // imgForDog.src = new URL("https://dog.ceo/api/breed/" + dogBreed + "/images/random");
    imgForDog.alt = "Dog Image";

    fetch("https://dog.ceo/api/breed/" + dogBreed + "/images/random")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            imgForDog.src = new URL(`${data.url}`);
        })
        .catch(function (error) {
            console.log(error);
        })

    contentDiv.appendChild(imgForDog);

    // set info
    const dataForDog = document.createElement("p");
    dataForDog.id = "dataForDog";

    url = "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1";

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById("dataForDog").innerHTML = data;
        })
        .catch(function (error) {
            console.log(error);
        });
});

async function loadDogInfo(url) {
    // const result = await randomDogBreed();

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data.message[document.getElementById("txtBoxDogName").value]);
            return data.message[document.getElementById("txtBoxDogName").value];
        })
        .catch(function (error) {
            console.log(error);
        });
}