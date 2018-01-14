
/* == Initialize Python Interface == */

const JSClient = require("./rpc_zmq/client.js");
console.log("Initializing JSClient");
let client = new JSClient();

console.log("Running JSClient");
client.run();

client.call("echo", "ready", (res) => {
    if (res !== 'ready') {
        console.error("Failed to connect to python process in `renderer.js`!");
    } else {
        console.log("server is ready");
    }
});

// Load DOM objects from document
let response = document.querySelector('#response');

function callAndResponse() {
    console.log("renderer.callAndResponse()");
    client.call("datetime", "null", (res) => {
        console.log("Retrieved '%s'", res);
        response.textContent = res;
    });
}

// Bind the function to DOM input forms
document.getElementById('talker').onclick = callAndResponse;
