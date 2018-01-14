
/* == Initialize Python Interface == */

const JSClient = require("./rpc_zmq/client.js");

var client;

function onTimeout() {
    console.log("`renderer.onTimeout()`");
    client = initClient();
}

function initClient() {
    console.log("Initializing JSClient");
    let _client = new JSClient();
    _client.timeoutFunc = onTimeout;

    console.log("Running JSClient");
    _client.run();

    _client.call("echo", "ready", (res) => {
        if (res !== 'ready') {
            console.error("Failed to connect to python process in `renderer.js`!");
        } else {
            console.log("server is ready");
        }
    });
    return _client;
}

client = initClient();

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
