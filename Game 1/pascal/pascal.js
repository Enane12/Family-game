document.getElementById("enter").addEventListener("click", function(){
    var sizes = document.getElementById("size").value;
    showPascal(TrianglePascal(sizes));
});

document.getElementById("enter2").addEventListener("click", function(){
    var sizes = document.getElementById("stern").value;
    showStern(stern(sizes));
});


document.getElementById("reset1").addEventListener("click", function(){
    document.location.reload(true);
});

document.getElementById("reset2").addEventListener("click", function(){
    document.location.reload(true);
});



function TrianglePascal(sizes){
    var tab = new Array();
    for (var i = 0; i<sizes; i++){
        tab[i]= new Array();
        for (var j=0; j<i+1; j++){
            if (j==0 || j == i){
                tab[i][j] = 1 ;
            } else {
                tab[i][j] = tab[i-1][j] + tab[i-1][j-1];
            }
        }
    }
    return tab;
}


function showPascal(tab){
    for(var i = 0; i<tab.length; i++){
        for(var j = 0; j<tab[i].length; j++){
            document.getElementById("res").innerHTML += tab[i][j] +  " ";
        }
        document.getElementById("res").innerHTML += "<br>";
    }
}


function stern(numero){
    var tab1 = TrianglePascal(numero+100);
    var tab2 = [];
    tab2.push(1);
    tab2.push(1);
    tab2.push(2);
    tab2.push(1);

    for(var i=4; i<numero; i++){
        var sum = 0;
        var newvalue = Math.trunc(i/2);
        for(var j = 0; j<newvalue+1; j++){
            sum = sum + tab1[i-j][j] % 2;
        }
        tab2.push(sum);
    }
    return tab2;
}

function showStern(tab){
    for(var i=0; i<tab.length; i++){
        document.getElementById("sternRes").innerHTML += "s"+ i + "="+" " + tab[i]+" ";
    }
}