var scoreTemp = 0;
var ScoreFinal = [0,0];
var indexPlayer = 1;
var boolPlayer = true;
var numberTmp = 0;

document.getElementsByClassName("score1").textContent = "0";
document.getElementsByClassName("score2").textContent = "0";
document.getElementsByClassName("currentScore1").textContent = "0";
document.getElementsByClassName("currentScore2").textContent = "0";

document.querySelector(".btnRoll").addEventListener("click", function(){
    if (boolPlayer){
        var randomNumber = Math.floor(Math.random()*8) + 1;

    document.querySelector(".imageRoll").src = "picture/" + randomNumber + ".png";

    if (randomNumber == 1 && numberTmp == 6){
        scoreTemp += 200;
        document.querySelector(".currentScore" + indexPlayer).textContent = scoreTemp;
    } else if(randomNumber == 4){
        scoreTemp += 30;
        document.querySelector(".currentScore" + indexPlayer).textContent = scoreTemp;
    }else if (randomNumber != 3){
        scoreTemp += randomNumber;
        document.querySelector(".currentScore" + indexPlayer).textContent = scoreTemp;
    } else{
        indexPlayer === 1? indexPlayer = 2: indexPlayer = 1;
        scoreTemp = 0;
        document.querySelector(".currentScore1").textContent = "0";
        document.querySelector(".currentScore2").textContent = "0";

        var elem1 = document.querySelector(".part1").firstChild;
        var elem2 = document.querySelector(".part2").firstChild;

        elem1.classList.toogle("active");
        elem2.classList.toogle("active");
    }
    numberTmp = randomNumber;
    }
});

document.querySelector(".btnHold").addEventListener("click", function(){
    if (boolPlayer){

        ScoreFinal[indexPlayer-1] += scoreTemp;
        document.querySelector(".score" + indexPlayer).textContent = 
        ScoreFinal[indexPlayer-1];

        if (ScoreFinal[indexPlayer-1] >= 200){
            document.querySelector(".name"+indexPlayer).textContent = "WINNER";
    
            var elem1 = document.querySelector(".part1").firstChild;
            var elem2 = document.querySelector(".part2").firstChild;
    
            elem1.classList.remove("active");
            elem2.classList.remove("active");

            boolPlayer = false;
        }else{
            indexPlayer ===1 ? indexPlayer= 2: indexPlayer = 1;
            scoreTemp = 0;
            document.querySelector(".currentScore1").textContent = "0";
            document.querySelector(".currentScore2").textContent = "0";

            var elem1 = document.querySelector(".part1").firstChild;
            var elem2 = document.querySelector(".part2").firstChild;

            elem1.classList.toogle("toogle");
            elem2.classList.toogle("toogle");
        }
    }
});

document.getElementById("reset").addEventListener("click", function(){
    document.location.reload(true);
});