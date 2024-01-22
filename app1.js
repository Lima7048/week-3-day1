console.log("Hello world!");

async function getMyStuffFromOverThere() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log("HTTP Response:", response);
    const json = await response.json();
    console.log("JSON Data:", json);
}
getMyStuffFromOverThere();

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) {
        console.log("HTTP Response:", response);
        return response.json();
    })
    .then(function (json) {
        console.log("JSON Data:", json);
    });



async function search(queryParam) {
    const response = await fetch("https://api.github.com/repos/Lima7048/week-2-day5-Cookie-Game")
    console.log(response)
}

search()

fetch("https://api.github.com/repos/Lima7048/week-2-day5-Cookie-Game/")
    .then(function (response) {
        console.log("HTTP Response:", response);
        return response.json();
    });


async function getSomething(queryParam) {
    const response = await fetch("https://cssgridgarden.com/")
    console.log(response)
}

fetch("https://cssgridgarden.com/")
    .then(function (response) {
        console.log("HTTP Response:", response);
    });

async function getSomething(queryParam) {
    const response = await fetch("https://unsplash.com/")
    console.log(response)
}

fetch("https://unsplash.com/")
    .then(function (response) {
        console.log("HTTP Response:", response);
    });