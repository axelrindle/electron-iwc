// Iwc
const { remote } = require('electron');
const iwc = remote.getGlobal('Iwc');

// Elements
const button = document.getElementById('send');
const response = document.getElementById('response');

iwc.on('hello-2', _event => {
  response.innerHTML += 'Hello from Window 2!<br>';
});

button.onclick = () => {
  iwc.emit('hello-1');
};
