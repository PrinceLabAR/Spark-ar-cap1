// Include the NativeUI and Textures modules 

const NativeUI = require('NativeUI'); 
const Scene = require('Scene'); 
const Textures = require('Textures');


// Access the opject using the get method 

const obj0 = Scene.root.find('cap-2');
const obj1 = Scene.root.find('MarioHat');
const obj2 = Scene.root.find('cap'); 

// Create a reference to the picker 

const picker = NativeUI.picker; 

// Set up the configuration for the picker 

 const index = 0;

 const configuration = { 

 selectedIndex: index,

 items: [ 
 {image_texture: Textures.get('ui_01')}, 
 {image_texture: Textures.get('ui_02')}, 
 {image_texture: Textures.get('ui_03')},
 ]

};

// Configure the picker 

picker.configure(configuration);

// Set the picker's visibility to true 
// This property is false by default

picker.visible = true;


//Subscribing to the selectedIndex property of the picker 

picker.selectedIndex.monitor().subscribe(function(index) { 
	
	if (index.newValue == 0)
		{ 
			obj0.hidden = false;
			obj1.hidden = true;
			obj2.hidden = true;
		}
	esle if (index.newValue == 0)
		{ 
			obj0.hidden = true;
			obj1.hidden = false;
			obj2.hidden = true;
		}
	else if (index.newValue == 0)
		{ 
			obj0.hidden = true;
			obj1.hidden = true;
			obj2.hidden = false;
		}
 }); 