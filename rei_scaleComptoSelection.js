// Copyright (c) 2023 Konstantin Reinhart. All rights reserved.
// 
// Name: rei_scaleComptoSelection
// Version: 1.0
//
// Description:
// This script scales the current composition to the size of its selected layer


"use strict";

function scaleComptoSelection() {
    var comp = app.project.activeItem;

    var myLayer = comp.selectedLayers[0];

    var mySize = {
        width: myLayer.sourceRectAtTime(comp.time, true).width,
        height: myLayer.sourceRectAtTime(comp.time, true).height
    };

    // Round number only allowed
    comp.width = Math.round(mySize.width * myLayer.property('ADBE Transform Group').property('ADBE Scale').value[0] / 100);
    comp.height = Math.round(mySize.height * myLayer.property('ADBE Transform Group').property('ADBE Scale').value[1] / 100);

    // Set layer to comp center
    var positionProperty = myLayer.property('ADBE Transform Group').property('ADBE Position');
    positionProperty.setValue([comp.width/2, comp.height/2]);

}

app.beginUndoGroup("rei_ScaleComptoSelection");

scaleComptoSelection();

app.endUndoGroup();

