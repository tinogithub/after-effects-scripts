// Copyright (c) Konstantin Reinhart. All rights reserved.
// 
// Name: rei_check-lost-footage
// Version: 1.0
//
// Description:
// This script checks if any footage of the current project is located outside a selected folder
//
// This script is provided "as is" without warranty of any kind.

function checkLostFootage() {

    var footagePath = Folder.selectDialog("Select footage folder");

    if(footagePath != null) {
    
        var projectBinItems = app.project.items;
        var check = false;
    
        // Loop through all project items
        for (var i = 1; i <= projectBinItems.length; i++) {                
            // 
            if((projectBinItems[i] instanceof FootageItem) && (projectBinItems[i].file != null) && (projectBinItems[i].file.path.indexOf(footagePath) == -1))
            {
                alert("Footage found outside of project folder.");
                check = true;
                break;
            }
        }
    
        if(!check) { alert("All footage is inside project folder.");}
    
    }

}

checkLostFootage();
