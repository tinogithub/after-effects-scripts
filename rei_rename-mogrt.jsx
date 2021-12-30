// This script renames the Essential Graphics name of all selected compositions by its comp name
// Hint: Adobe won't display the changed name directly. You have to switch back and forth between the masters.

function rename_mogrt()
{
    var selectedCompsIndex = [];
    
    for (x = 0; x < app.project.selection.length; x++)
    {
        selectedCompsIndex.push(findItemIndexByName(app.project.selection[x].name));
    }

    for(i = 0; i < selectedCompsIndex.length; i++)
    {
        var myIndex = selectedCompsIndex[i];

        if(app.project.item(myIndex) instanceof CompItem)
        {
            app.project.item(myIndex).motionGraphicsTemplateName = app.project.item(myIndex).name;
        }
    }
}

// Find the index of an item in the items collection by name
function findItemIndexByName(searchName)
{
    var projLength = app.project.items.length;
    var index = null;

    for (var i = 1; i <= projLength; i++)
    {
        var nameProperty = app.project.item(i).name;
        if ( nameProperty == searchName)
        {
            index = i;
            break;
        }
    }
    return index;
}

rename_mogrt();
