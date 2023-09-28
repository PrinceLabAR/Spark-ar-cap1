const Scene = require('Scene');
const Materials = require('Materials');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

Promise.all([

    Materials.findFirst('_texture'),
    Materials.findFirst('Default'),
    Materials.findFirst('Material'),


    Scene.root.findFirst('plane0'),
    Scene.root.findFirst('plane1'),
    Scene.root.findFirst('plane2'),


]).then(function(results){

    const ui_1 = results[0];
    const ui_2 = results[1];
    const ui_3 = results[2];

    const plane0 = results[3];
    const plane1 = results[4];
    const plane2 = results[5];

    const configuration = {

      selectedIndex: 0,

      items: [
        {image_texture: ui_1},
        {image_texture: ui_2},
        {image_texture: ui_3}
      ]


    };

    const picker = NativeUI.picker;

    picker.configure(configuration);

    picker.visible = true;

    picker.selectedIndex.monitor().subscribe(function(val) {

               
      plane0.hidden = true;
      plane1.hidden = true;
      plane2.hidden = true;

switch(val.newValue) {
        case 0: {
           plane0.hidden = false;
           break;
        }
        case 1: {
           plane1.hidden = false;
           break;
        }
        case 2: {
           plane2.hidden = false;
           break;
        }
      }

    });

});