'use strict'

// FETCH APIs

// CREATE   - post (put)
// READ     - get
// UPDATE   - put/patch
// DELETE   - delete

const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output');
let image = document.createElement("img");

/* DEFAULT JAVASCRIPT
let read =URL=> {
    // PROMISES
    // they wait for a callback
    // success or failure
    fetch(URL)
        .then( (response) => {
            if (response.status !== 200){
                console.error(`status: ${response.status}`);
                return;
            }
            response.json()
                .then( data => {
                output.inner    Text = JSON.stringify(data);
            })
        }).catch((error) => {
            console.e  rror(`${error}`);
        });
}
*/

// AXIOS

// GET method for READ
let read = URL => {
    axios
        .get(URL)
        .then( (response) => {
            output.innerText = JSON.stringify(response.data);
        }).catch((error) => {
            console.error(error);
        });
};
// button.onclick =()=> read(input.value);

// POST method for CREATE
let create = URL => {
    axios
    .post(URL, {
        first_name : "Naomi",
        email : "nls@qa.com"
    })
    .then( (response) => {
        output.innerText = JSON.stringify(response.data);
    }).catch((error) => {
        console.error(error);
    });
}
// button.onclick =()=> create(input.value);

// GET method for Picture
let pic = URL => {
    axios
        .get(URL)
        .then( (response) => {
            // Adaptation for Pictures
            output.innertext = JSON.stringify(response.data);
            image.src = response.data.url
            output.append(image);
        }).catch((error) => {
            console.error(error);
        });
};
button.onclick =()=> pic(input.value);


