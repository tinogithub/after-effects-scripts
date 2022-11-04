// Copyright (c) 2022 Konstantin Reinhart. All rights reserved.
// 
// Name: rei_addPropertyToMogrt
// Version: 1.0
//
// Description:
// This script adds the effect properties of the selected layers to the Essential Graphics panel of the current composition.
// Textlayers will be added as text controller.

function addPropertyToMogrt(selectedLayers, comp) {

    comp.openInEssentialGraphics();

    for(i = 0; i < selectedLayers.length; i++) {

      if(selectedLayers[i] instanceof TextLayer) {
        selectedLayers[i].text.sourceText.addToMotionGraphicsTemplateAs(comp, selectedLayers[i].name);
      } 

      else {
        for(var m = 1; m <= selectedLayers[i].Effects.numProperties; m++) {
          
          for(var j = 1; j <= selectedLayers[i].effect(m).numProperties; j++){

            if(!(selectedLayers[i].effect(m).property(j).canAddToMotionGraphicsTemplate(comp))) continue;

            // Considering that a standard checkbox, slider, dropdown, color etc. has 2 properties. Then use the effect name instead of the property's name
            if(selectedLayers[i].effect(m).numProperties == 2) {
              selectedLayers[i].effect(m).property(j).addToMotionGraphicsTemplateAs(comp, selectedLayers[i].effect(m).name); continue;
            }

            selectedLayers[i].effect(m).property(j).addToMotionGraphicsTemplateAs(comp, selectedLayers[i].effect(m).property(j).name);
          }
          
        }
      }
    }
    
    // Give the Essenstial Graphics Panel the name of the current comp
    comp.motionGraphicsTemplateName = comp.name;
}

app.beginUndoGroup("rei_addPropertyToMogrt"); 

addPropertyToMogrt(app.project.activeItem.selectedLayers, app.project.activeItem);

app.endUndoGroup();
