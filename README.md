# electron-iwc
> Electron Inter-Window-Communication.

## Usage
#### Main process
```javascript
//...
const setupIwc = require('electron-iwc');

app.on('ready', () => {
  setupIwc(); // deploy a global EventEmitter (global.Iwc)

  //...
});

//...
```

#### Renderer process
##### `listener.js`
```javascript
//...
const { remote } = require('electron');
const iwc = remote.getGlobal('Iwc');

iwc.on('message', (data) => {
  console.log(data);
});
```

##### `sender.js`
```javascript
//...
const { remote } = require('electron');
const iwc = remote.getGlobal('Iwc');

iwc.emit('message', 'hello from sender.js');
```
