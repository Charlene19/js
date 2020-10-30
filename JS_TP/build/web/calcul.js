/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function add(){
    
    var chiffre = document.getElementById('c1'); 
    var chiffred = document.getElementById('c2'); 
    
    var result = Number(chiffre.value) + Number(chiffred.value); 
    console.log(chiffre.value); 
    
    document.getElementById("result").innerHTML= "<p style='background-color : green'> Le resultat est : " + result +" </p>";
}

function min(){
    
    var chiffre = document.getElementById('c1'); 
    var chiffred = document.getElementById('c2'); 
    
    var result = Number(chiffre.value) - Number(chiffred.value); 
    console.log(chiffre.value); 
    
    document.getElementById("result").innerHTML= "<p style='background-color : green'> Le resultat est : " + result +" </p>";
}

function div(){
    
    var chiffre = document.getElementById('c1'); 
    var chiffred = document.getElementById('c2'); 
    
    if (Number(chiffred.value) !== 0){
    var result = Number(chiffre.value) / Number(chiffred.value); 
    console.log(chiffre.value); 
    
    document.getElementById("result").innerHTML= "<p style='background-color : green'> Le resultat est : " + result +" </p>";
    }else{
         document.getElementById("result").innerHTML= "<p style='background-color : green'> Impossible de diviser par 0 </p>";
    }
}
    
    function mul(){
    
    var chiffre = document.getElementById('c1'); 
    var chiffred = document.getElementById('c2'); 
    
    var result = Number(chiffre.value) * Number(chiffred.value); 
    console.log(chiffre.value); 
    
    document.getElementById("result").innerHTML= "<p style='background-color : green'> Le resultat est : " + result +" </p>";
}
