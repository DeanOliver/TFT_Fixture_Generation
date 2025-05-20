/**********************************************************************************************************************
* Name: generateFixtures     Args: sheet, the sheet being edited. format, the name of the format selected by the user.*
* Info: This takes the format chosen by the user and passes that into a number of other functions to organise and     *
*       display the players in the order chosen. All functions used are within this file.                             *
**********************************************************************************************************************/
function generateFixtures(sheet, format) {

  var playerLeaderboard = [];                          // New array to hold the players in the current leaderboard order.
  var newPlayerOrder = [];                             // New array to hold the players in the fixture order.

  sheet.getRange("M3").setValue("Selecting format");
  
  switch(format){                                      // Depending on which format was chosen do the case that matches it.
    case 'Swiss':
      playerLeaderboard = getPlayerLeaderboard(sheet); // Calls the function "getPlayerLeaderboard" in this file.
      printFixtures(sheet, playerLeaderboard);         // Calls the function "printFixtures" in this file.
      break;
    case 'Snake 16': 
      var formatArray = snake16;                                                                      // Create a new variable to hold the seeding order for this case's format. This is found in Config.gs.
      playerLeaderboard = getPlayerLeaderboard(sheet);                                                // Calls the function "getPlayerLeaderboard" and returns the players in leaderboard order.
      if(formatArray.length > playerLeaderboard.length){                                              // Check there are enough players to use this format.
        sheet.getRange("M3").setValue("Not enough players for the format");
        break;
      }
      newPlayerOrder = playersInFixtureOrder(sheet, playerLeaderboard, newPlayerOrder, formatArray);  // Calls the function "playersInFixtureOrder" and returns the players in the selected format order.
      printFixtures(sheet, newPlayerOrder);                                                           // Calls the function "printFixtures" which updates the "LOBBY PREP" tab with the list of players in fixture order.
      break;
    case 'Snake 24': 
      var formatArray = snake24;                                                                      // Create a new variable to hold the seeding order for this case's format. This is found in Config.gs.
      playerLeaderboard = getPlayerLeaderboard(sheet);                                                // Calls the function "getPlayerLeaderboard" and returns the players in leaderboard order.
      if(formatArray.length > playerLeaderboard.length){                                              // Check there are enough players to use this format.
        sheet.getRange("M3").setValue("Not enough players for the format");
        break;
      }
      newPlayerOrder = playersInFixtureOrder(sheet, playerLeaderboard, newPlayerOrder, formatArray);  // Calls the function "playersInFixtureOrder" and returns the players in the selected format order.
      printFixtures(sheet, newPlayerOrder);                                                           // Calls the function "printFixtures" which updates the "LOBBY PREP" tab with the list of players in fixture order.
      break;
    case 'Snake 32':
      var formatArray = snake32;                                                                      // Create a new variable to hold the seeding order for this case's format. This is found in Config.gs.
      playerLeaderboard = getPlayerLeaderboard(sheet);                                                // Calls the function "getPlayerLeaderboard" and returns the players in leaderboard order.
      if(formatArray.length > playerLeaderboard.length){                                              // Check there are enough players to use this format.
        sheet.getRange("M3").setValue("Not enough players for the format");
        break;
      }
      newPlayerOrder = playersInFixtureOrder(sheet, playerLeaderboard, newPlayerOrder, formatArray);  // Calls the function "playersInFixtureOrder" and returns the players in the selected format order.
      printFixtures(sheet, newPlayerOrder);                                                           // Calls the function "printFixtures" which updates the "LOBBY PREP" tab with the list of players in fixture order.
      break;
    case 'Snake 40':
      var formatArray = snake40;                                                                      // Create a new variable to hold the seeding order for this case's format. This is found in Config.gs.
      playerLeaderboard = getPlayerLeaderboard(sheet);                                                // Calls the function "getPlayerLeaderboard" and returns the players in leaderboard order.
      if(formatArray.length > playerLeaderboard.length){                                              // Check there are enough players to use this format.
        sheet.getRange("M3").setValue("Not enough players for the format");
        break;
      }
      newPlayerOrder = playersInFixtureOrder(sheet, playerLeaderboard, newPlayerOrder, formatArray);  // Calls the function "playersInFixtureOrder" and returns the players in the selected format order.
      printFixtures(sheet, newPlayerOrder);                                                           // Calls the function "printFixtures" which updates the "LOBBY PREP" tab with the list of players in fixture order.
      break;
    case 'Snake 56':
      var formatArray = snake56;                                                                      // Create a new variable to hold the seeding order for this case's format. This is found in Config.gs.
      playerLeaderboard = getPlayerLeaderboard(sheet);                                                // Calls the function "getPlayerLeaderboard" and returns the players in leaderboard order.
      if(formatArray.length > playerLeaderboard.length){                                              // Check there are enough players to use this format.
        sheet.getRange("M3").setValue("Not enough players for the format");
        break;
      }
      newPlayerOrder = playersInFixtureOrder(sheet, playerLeaderboard, newPlayerOrder, formatArray);  // Calls the function "playersInFixtureOrder" and returns the players in the selected format order.
      printFixtures(sheet, newPlayerOrder);                                                           // Calls the function "printFixtures" which updates the "LOBBY PREP" tab with the list of players in fixture order.
      break;
    case 'Snake 64':
      var formatArray = snake64;                                                                      // Create a new variable to hold the seeding order for this case's format. This is found in Config.gs.
      playerLeaderboard = getPlayerLeaderboard(sheet);                                                // Calls the function "getPlayerLeaderboard" and returns the players in leaderboard order.
      if(formatArray.length > playerLeaderboard.length){                                              // Check there are enough players to use this format.
        sheet.getRange("M3").setValue("Not enough players for the format");
        break;
      }
      newPlayerOrder = playersInFixtureOrder(sheet, playerLeaderboard, newPlayerOrder, formatArray);  // Calls the function "playersInFixtureOrder" and returns the players in the selected format order.
      printFixtures(sheet, newPlayerOrder);                                                           // Calls the function "printFixtures" which updates the "LOBBY PREP" tab with the list of players in fixture order.
      break;
    case 'Snake 80':
      var formatArray = snake80;                                                                      // Create a new variable to hold the seeding order for this case's format. This is found in Config.gs.
      playerLeaderboard = getPlayerLeaderboard(sheet);                                                // Calls the function "getPlayerLeaderboard" and returns the players in leaderboard order.
      if(formatArray.length > playerLeaderboard.length){                                              // Check there are enough players to use this format.
        sheet.getRange("M3").setValue("Not enough players for the format");
        break;
      }
      newPlayerOrder = playersInFixtureOrder(sheet, playerLeaderboard, newPlayerOrder, formatArray);  // Calls the function "playersInFixtureOrder" and returns the players in the selected format order.
      printFixtures(sheet, newPlayerOrder);                                                           // Calls the function "printFixtures" which updates the "LOBBY PREP" tab with the list of players in fixture order.
      break;
    case 'Snake 112':
      var formatArray = snake112;                                                                     // Create a new variable to hold the seeding order for this case's format. This is found in Config.gs.
      playerLeaderboard = getPlayerLeaderboard(sheet);                                                // Calls the function "getPlayerLeaderboard" and returns the players in leaderboard order.
      if(formatArray.length > playerLeaderboard.length){                                              // Check there are enough players to use this format.
        sheet.getRange("M3").setValue("Not enough players for the format");
        break;
      }
      newPlayerOrder = playersInFixtureOrder(sheet, playerLeaderboard, newPlayerOrder, formatArray);  // Calls the function "playersInFixtureOrder" and returns the players in the selected format order.
      printFixtures(sheet, newPlayerOrder);                                                           // Calls the function "printFixtures" which updates the "LOBBY PREP" tab with the list of players in fixture order.
      break;
    case 'Snake 240':
      var formatArray = snake240;                                                                     // Create a new variable to hold the seeding order for this case's format. This is found in Config.gs.
      playerLeaderboard = getPlayerLeaderboard(sheet);                                                // Calls the function "getPlayerLeaderboard" and returns the players in leaderboard order.
      if(formatArray.length > playerLeaderboard.length){                                              // Check there are enough players to use this format.
        sheet.getRange("M3").setValue("Not enough players for the format");
        break;
      }
      newPlayerOrder = playersInFixtureOrder(sheet, playerLeaderboard, newPlayerOrder, formatArray);  // Calls the function "playersInFixtureOrder" and returns the players in the selected format order.
      printFixtures(sheet, newPlayerOrder);                                                           // Calls the function "printFixtures" which updates the "LOBBY PREP" tab with the list of players in fixture order.
      break;
    case 'Snake 256':
      var formatArray = snake256;                                                                     // Create a new variable to hold the seeding order for this case's format. This is found in Config.gs.
      playerLeaderboard = getPlayerLeaderboard(sheet);                                                // Calls the function "getPlayerLeaderboard" and returns the players in leaderboard order.
      if(formatArray.length > playerLeaderboard.length){                                              // Check there are enough players to use this format.
        sheet.getRange("M3").setValue("Not enough players for the format");
        break;
      }
      newPlayerOrder = playersInFixtureOrder(sheet, playerLeaderboard, newPlayerOrder, formatArray);  // Calls the function "playersInFixtureOrder" and returns the players in the selected format order.
      printFixtures(sheet, newPlayerOrder);                                                           // Calls the function "printFixtures" which updates the "LOBBY PREP" tab with the list of players in fixture order.
      break;
    default:                                                                                          // If no format is recognised do nothing and inform the user.
      sheet.getRange("M3").setValue("Incorrect format selected.");
      break;                                   
  }
}

/**********************************************************************************************************************
* Name: getPlayerLeaderboard     Args: sheet, the sheet being edited.                                                 *
*                                Returns: An array of players in the order of the current leaderboard.                *
* Info: This takes the format chosen by the user and passes that into a number of other functions to organise and     *
*       display the players in the order chosen. All functions used are within this file.                             *
**********************************************************************************************************************/
function getPlayerLeaderboard(sheet){
  sheet.getRange("M3").setValue("Getting player's leaderboard data");
  
  var playerLeaderboardData = [];                                                                   // An empty array of player leaderboard data.
  const leaderboardSheet = SpreadsheetApp.getActive().getSheetByName('LEADERBOARD');                // Get the "LEADERBOARD" tab.
  var last_row = leaderboardSheet.getLastRow();                                                     // Get the number of the last row that has data in it.
  var last_column = leaderboardSheet.getLastColumn();                                               // Get the number of the last column that has data in it.
  var range = leaderboardSheet.getRange(2,1,last_row,last_column);                                  // Get all the data held in the specified range.
  var leaderboardValues = range.getValues();                                                        // Get all the values stored in the range.

  for(n=0;n<last_row;n++){                                                                          // Cycle through all the players in the leaderboard.
    if(leaderboardValues[n][1] != ""){                                                              // Check that the value is not empty, if it is stop. [n]=row, []=column.
    var seed = leaderboardValues[n][0];                                                             // Get the players seed from each row in column A. 0 = A
    var websiteName = leaderboardValues[n][1];                                                      // Get the players website name from each row in column C. 1 = B
    var summonerName = leaderboardValues[n][2];                                                     // Get the players summoner name from each row in column C. 2 = C    
    var points = leaderboardValues[n][18];                                                          // Get the players total points from each row in column S. 18 = S
    var playerLeaderboardObj = createPlayerLeaderboardObj(seed, websiteName, summonerName, points); // Calls the function "createPlayerLeaderboardObj" which takes in all the values above and creates a player object from them.
    playerLeaderboardData.push(playerLeaderboardObj);                                               // Adds the new player object to an array that will hold all the players on the leaderboard.
    }
    else{                                                                                           
      break;
    }
  }

  return playerLeaderboardData;                                                                      // Returns the array of all players on the current leaderboard.
}

/********************************************************************************************************************************************************************
* Name: createPlayerLeaderboardObj    Args: sheet, the sheet being edited. websiteName, summonerName and points for an individual player taken from the leaderboard.*
*                                     Returns: An object of a player containing data from the leaderboard.                                                          *
* Info: Takes a players data passed in from the current leaderboard and creates an object of that player.                                                           *
********************************************************************************************************************************************************************/
function createPlayerLeaderboardObj(seed, websiteName, summonerName, points){
  var playerLeaderboardObj = {                       // Creates an empty object to hold player data.
    seed:0,
    websiteName:"",
    summonerName:"",
    points:0
  }

  playerLeaderboardObj.seed = seed;                 // Add the passed in player's seed to the player's new object.
  playerLeaderboardObj.websiteName = websiteName;   // Add the passed in player's website name to the player's new object.
  playerLeaderboardObj.summonerName = summonerName; // Add the passed in player's summoner name to the player's new object.
  playerLeaderboardObj.points = points;             // Add the passed in player's points to the player's new object.

 return playerLeaderboardObj;                       // Returns the created player object.

}

/**********************************************************************************************************************************
* Name: printFixtures     Args: sheet, the sheet being edited. newPlayerOrder, an array of players in order of the chosen format. *
* Info: This takes an array of players in order of the chosen format and updates the "LOBBY PREP" tab with the new fixtures.      *
**********************************************************************************************************************************/
function printFixtures(sheet, newPlayerOrder){
  sheet.getRange("M3").setValue("Creating New Fixtures");
  sheet.getRange('B2:E257').clear({contentsOnly: true});                // Clear the cells from the specified range. In this case it is the old fixtures.
  var playerInLobbyCount = 0;                                           // A count to check how many players are in the current lobby being printed.
  var lobbyOffset = 0;                                                  // Count the number of lobbies so we know when to leave a line break.
  
  for(p=0;p<newPlayerOrder.length;++p){                                 // Cycle through every player.
    if(playerInLobbyCount == 8){                                        // Check if the current lobby is full.
      playerInLobbyCount = 0;                                           // Reset the player count for the lobby.
      lobbyOffset++;                                                    // Add to the count tracking the nuber of loobies.
    }
    sheet.getRange((p+3+lobbyOffset),2).setValue(newPlayerOrder[p].seed);           // Update the fixture with the player's seed.
    sheet.getRange((p+3+lobbyOffset),3).setValue(newPlayerOrder[p].websiteName);    // Update the fixture with the player's website name.
    sheet.getRange((p+3+lobbyOffset),4).setValue(newPlayerOrder[p].summonerName);   // Update the fixture with the player's summoner name.
    sheet.getRange((p+3+lobbyOffset),5).setValue(newPlayerOrder[p].points);         // Update the fixture with the player's points.
    playerInLobbyCount++;
  }
  sheet.getRange("M3").setValue("Complete");
  return;
}

/**************************************************************************************************************************************************************************
* Name: createPlayerLeaderboardObj    Args: sheet, the sheet being edited. playerLeaderboard, a list of player objects in order of the current leaderboard.               *
                                            newPlayerOrder, an empty array to store the new player objects in order. formatArray, the seeding order for the chosen format *
*                                     Returns: An array of players in the order of the selected format.                                                                   *
* Info: Takes in the players in the order of the current leaderboard and orders them to the selected format.                                                              *
**************************************************************************************************************************************************************************/
function playersInFixtureOrder(sheet, playerLeaderboard, newPlayerOrder, formatArray){
  sheet.getRange("M3").setValue("Putting players in order");

  var arrayPosition = 0;                                    // The starting position of the array.
  var seed = formatArray[arrayPosition];                    // Set the first seed needed for the chosen format.

  for(var i=0;i<playerLeaderboard.length;++i){              // Cycle through every player in the leaderboard.
    if(formatArray.length == newPlayerOrder.length){        // If the number of players in both the leaderboard and the new list are the same it is done.
      return newPlayerOrder;                                // Return the players in order of the chosen format.
    }
    if(playerLeaderboard[i].seed == seed){                  // If we find the player with the seed we are looking for we want to add them to the new list.
      newPlayerOrder.push(playerLeaderboard[i]);            // Add the found player to the new array.
      arrayPosition++;                                      // Increae the position of the format array by 1 so we know what the next seed is we are looking for.
      seed = formatArray[arrayPosition]                     // Update the seed variable with the new seed we are looking for.
      i=-1;                                                 // Reset the search back to the start.
      continue;
    }
  }  
  return playerLeaderboard;                                 // If something goes wrong return the original player order.
}
