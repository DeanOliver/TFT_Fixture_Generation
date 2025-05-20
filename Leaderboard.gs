/**********************************************************************************************************************
* Name: orderLeaderboard     Args: sheet, the sheet being edited. format, the name of the format selected by the user.*
* Info: This orders the "LEADERBOARD" based on the scoring defined in the rules under "Tiebreakers".                  *
*       Rules: https://drive.google.com/file/d/1UccAIVZ-PBT7lRxcoJVXrp48yoYsET4a/view                                 *
**********************************************************************************************************************/
function orderLeaderboard(sheet){
  var last_row = sheet.getLastRow();                        // Get the row number of the last row with data in it.
  var last_column = sheet.getLastColumn();                  // Get the column number of the last column with data in it.
  var range = sheet.getRange(2,2,last_row,last_column);     // Get all the data from cell B2 to the last row / column with data in it.

  range.randomize();                                        // Randomise all players so that if there is a perfect tie the order of the tied players is random.

  range.sort([{column:18, ascending: false},                // Everything needs to be ordered in reverse.
              {column:17, ascending: false},                // 1st order leaderboard by the last rounds result to the fisrt.
              {column:16, ascending: false},                // Sort the columns from R to F with R = 18 and F = 6.
              {column:15, ascending: false},
              {column:14, ascending: false},
              {column:13, ascending: false},
              {column:12, ascending: false},
              {column:11, ascending: false},
              {column:10, ascending: false},
              {column:9, ascending: false},
              {column:8, ascending: false},
              {column:7, ascending: false},
              {column:6, ascending: false}]);
                                            
  range.sort([{column:21, ascending: false},                // 2nd, highest number of placements for each position starting from 1st to 8th.
              {column:22, ascending: false},                // Sort the columns from AB to U with U = 21 and AB = 28.
              {column:23, ascending: false},
              {column:24, ascending: false},
              {column:25, ascending: false},
              {column:26, ascending: false},
              {column:27, ascending: false},
              {column:28, ascending: false}]);

  range.sort({column:29, ascending: false})                 // 3rd, highest number of wins and Top 4s already stored in totalWins, 29 = column AC.   

  range.sort({column:30, ascending: false})                 // 5th, Total tournament points, this is the points accumulate on previous days, 30 = AD.

  range.sort({column:19, ascending: false})                 // 5th, total points for all the rounds played, 19 = S.

  return;
}
