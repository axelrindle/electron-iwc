// Require modules
const EventEmitter = require('events');

// Inter Window Communication
module.exports = () => {
  // Check if running in renderer process
  if (require('is-electron-renderer')) {
    throw new Error('Can\'t setup the main process listeners from the renderer process!');
  }

  // Define a global EventEmitter instance.
  global.Iwc = new EventEmitter();
};
