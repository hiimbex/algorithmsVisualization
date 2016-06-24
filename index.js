//Taken from http://electron.atom.io/docs/tutorial/quick-start/
const electron = require('electron');

//Module to control application life
const {app} = electron;

//Module to create native browser window
const {BrowserWindow} = electron;

//Keep a global reference of the window object, if you don't, the window will
//be closed automatically when the JS object is garbage collected.
let win;

function createWindow() {
	//Create the browser window.
	win = new BrowserWindow({width: 800, height: 600});

	//Load app webpage
	win.loadURL(`file://${__dirname}/index.html`);

	win.on('closed', () => {
		//Dereference window object
		win = null;
	});
}

app.on('ready', createWindow);

//Quit when all windows are closed
app.on('window-all-closed', () => {
	//On OSX applications stay open even if window is closed -- Cmd + Q to quit
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});
