/***************************************************************************************************************
* Name: mainTest     Args:                                                                                     *
* Info: Another way to run the code button using the "Run" button above. This allows us to use the console for *
*       better error logging. Leave commented out unless debuging or adding new features.                      *
***************************************************************************************************************/
/*
function mainTest(){
  const sheet = SpreadsheetApp.getActiveSheet();
  orderLeaderboard(sheet);

  return 0;
}*/

/***************************************************************************************************************
* Name: onEdit     Args: e, data on the event that triggers the function.                                      *
* Info: The "main" function that calls other functions based on what the edit made was.                        *
***************************************************************************************************************/
function onEdit(e) {
  
  const sheet = SpreadsheetApp.getActiveSheet();                // Get the tab that has been edited.
  let editedCell = e.range.getA1Notation();                     // Get the cell that was edited.

  if(e.range.getSheet().getName() == "LOBBY PREP"){             // Check if the edited tab is called "LOBBY PREP".
    if(editedCell == "M2"){                                     // Check if the edited cell is "M2", which is where our drop down is located.
      sheet.getRange("M3").setValue("Starting");                
      var format = sheet.getRange(editedCell).getValue();       // Get the value selected in the dropdown, this will be the chosen fixture format.
      generateFixtures(sheet, format);                          // Calls the function "generateFixtures" in the Fixtures.gs file.
      sheet.getRange("M2").setValue("Select a format");         // Reset the dropdown options back to default.
    }
  }

  if(e.range.getSheet().getName() == "LEADERBOARD"){                        // Check if the edited tab is called "LEADERBOARD".
    if((editedCell == "A1") && (sheet.getRange(editedCell).getValue())){    // Check if the edited cell is "A1", which is the check box and check that it is ticked.
      orderLeaderboard(sheet);                                              // Calls the function "orderLeaderboard" in the Leaderboard.gs file.
      sheet.getRange(editedCell).uncheck();                                 // Reset the check box so that it is unchecked.
    }
  }

}
