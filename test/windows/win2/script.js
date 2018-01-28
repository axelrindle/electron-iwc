// Iwc
const { remote } = require('electron');
const iwc = remote.getGlobal('Iwc');

// Elements
const button = document.getElementById('send');
const response = document.getElementById('response');

iwc.on('hello-1', _data => {
  response.innerHTML += 'Hello from Window 1!<br>';
});

button.onclick = function () {
  iwc.emit('hello-2');
};
