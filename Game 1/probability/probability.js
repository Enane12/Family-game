var i = 0;
var tableau = [];

document.getElementById("send1").addEventListener("click", function(){
    var size = document.getElementById("size").value;

    document.getElementById("send2").addEventListener("click", function(){
        if(i < size){
            var chiffre = document.getElementById("sizes").value;
            tableau.push(chiffre);
            i++;
        } else {
            console.log(tableau);
            document.getElementById("send2").value = "Generate";
            document.getElementById("send2").addEventListener("mouseover", function(){
                document.getElementById("average").textContent = average(tableau);
                document.getElementById("variance").textContent = variance(tableau);
                document.getElementById("ecartType").textContent = ecartType(tableau);
            });
        }

    });
});


document.getElementById("reset1").addEventListener("click", function(){
    document.location.reload(true);
});

document.getElementById("reset2").addEventListener("click", function(){
    document.location.reload(true);
})


function average(tableau){
    var sum = 0;
    var calcul = 0;
    for(var i = 0;  i<tableau.length; i++){
        sum = sum + parseInt(tableau[i]);
    }
    calcul = sum / tableau.length
    return calcul;
}

function variance(tableau){
    var moy = average(tableau);
    var sum = 0;
    var varian = 0;
    for(var i = 0;  i<tableau.length; i++){
        sum += (parseInt(tableau[i])- moy) * (parseInt(tableau[i]) - moy);
    }
    varian = sum / tableau.length
    return varian;
}

function ecartType(tableau){
    var a = variance(tableau);
    return Math.sqrt(a);
}


function affValeur(){
    let averageColor = document.getElementById("average");
    let valeur = averageColor.value;
    console.log(valeur);
    averageColor.style.color = "red";
}



