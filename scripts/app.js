var winCount = 0;
var loseCount= 0;
var upCount = 0;
var downCount = 0;
var sevenCount = 0;
var successfulUpCount = 0;
var successfulSevenCount = 0;
var successfulDownCount = 0;
function checkIf(choice) {
    var dice1Val = getRandomDiceValue();
    var dice2Val = getRandomDiceValue();
    var sumOfDices = dice1Val + dice2Val;
    updateDices(dice1Val, dice2Val, sumOfDices);
    var prevWinCount = winCount;
    // var prevLoseCount = loseCount;
    switch (choice) {
        case "Up":
                upCount++;
                if(sumOfDices>7) {
                    successfulUpCount++;
                    winCount++;
                }
                else {
                    loseCount++;
                }
            break;
        case "Seven": 
                sevenCount++;
                if(sumOfDices === 7) {
                    successfulSevenCount++;
                    winCount++;
                }
                else {
                    loseCount++;
                }
                break;
        case "Down": 
                downCount++;
                if(sumOfDices < 7) {
                    successfulDownCount++;    
                    winCount++;
                }
                else {
                    loseCount++;
                }
                break;
        default:
            break;
    }
    updateScoreBoard(winCount+loseCount,winCount,loseCount,successfulUpCount,upCount,successfulSevenCount,sevenCount,successfulDownCount,downCount);
    
    if(winCount>prevWinCount) {
        updateThisGameStatus('Won');
    }
    else {
        updateThisGameStatus('Lost');
    }
}

function getRandomDiceValue() {
    return Math.floor((Math.random() * 6) + 1);
}

function updateScoreBoard(totalMatches, totalWon, totalLost, successfulUpCount,upCount, successfulSevenCount, sevenCount,successfulDownCount, downCount) {
    document.getElementById('total_matches').innerHTML = totalMatches;
    document.getElementById('total_won').innerHTML = totalWon;
    document.getElementById('total_lost').innerHTML = totalLost;
    document.getElementById('successful_up_count').innerHTML = successfulUpCount;
    document.getElementById('up_count').innerHTML = upCount;
    document.getElementById('successful_seven_count').innerHTML = successfulSevenCount;
    document.getElementById('seven_count').innerHTML = sevenCount;
    document.getElementById('successful_down_count').innerHTML = successfulDownCount;
    document.getElementById('down_count').innerHTML = downCount;
}

function updateDices(dice1Val, dice2Val, sumOfDices) {
    document.getElementById('dice1_img').className = ('dice_common dice_val_'+dice1Val+' dice_image');
    document.getElementById('dice2_img').className = ('dice_common dice_val_'+dice2Val+' dice_image');
    document.getElementById('sum_result').innerHTML = sumOfDices;
}

function updateThisGameStatus(thisGameStatus) {
    document.getElementById('text_result').innerHTML = thisGameStatus;
    document.getElementById('text_result').className = thisGameStatus.toLowerCase()+"_text text_result";
}