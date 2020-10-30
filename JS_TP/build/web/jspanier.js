/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var billets = [
    {psgOm: 20
    },
    {
        psgBay: 60
    },
    {
        psgNice: 15
    },
    {
        psgReal: 75
    },
    {
        psgBar: 5
    }
];

function add() {

    var qt = document.getElementById("qtGreen");
    console.log(qt.value);
    var nqt = Number(qt);
    document.getElementById("qtGreen").innerHTML = nqt;

    console.log(nqt);
}

function min() {


}

function test() {

}

function calTt(billets, prix) {
return billets * prix; 

}

function green() {
    var x = document.createElement("TR");
    x.setAttribute("id", "myTr");
    document.getElementById("panier").appendChild(x);
    var y = document.createElement("TD");
    var t = document.createTextNode(Object.keys(billets[0]));
    y.appendChild(t);
    document.getElementById("myTr").appendChild(y);

    var a = document.createElement("TD");
    var b = document.createElement("input");

    b.setAttribute("value", "1");
   
    a.setAttribute("id", "qtGreen");
    a.appendChild(b);
    document.getElementById("myTr").appendChild(a);

    var c = document.createElement("TD");
    var d = document.createElement("BUTTON");
    c.setAttribute("id", "plusGreen");


    d.innerHTML = " + ";
    d.onclick = add;
    c.appendChild(d);
    document.getElementById("myTr").appendChild(c);



    var e = document.createElement("TD");
    var f = document.createElement("BUTTON");
    e.setAttribute("id", "moinsGreen");


    f.innerHTML = " - ";
    e.appendChild(f);
    document.getElementById("myTr").appendChild(e);

    var g = document.createElement("TD");
    var h = document.createTextNode(Object.values(billets[0]));
    g.appendChild(h);
    document.getElementById("myTr").appendChild(g);

    var i = document.createElement("TD");
    var calT = Number(Object.values(billets[0])); 
    var j = document.createTextNode(calTt(Number(b.value), calT));
    document.getElementById("qtGreen").addEventListener('change', calTt); 
    i.appendChild(j);
    document.getElementById("myTr").appendChild(i);

}

function yellow() {

    var x = document.createElement("TR");
    x.setAttribute("id", "myTr");
    document.getElementById("panier").appendChild(x);
    var y = document.createElement("TD");
    var t = document.createTextNode(Object.keys(billets[4]));
    y.appendChild(t);
    document.getElementById("myTr").appendChild(y);

    var a = document.createElement("TD");
    var b = document.createElement("input");

    b.setAttribute("value", "1");

    a.setAttribute("id", "qtYellow");
    a.appendChild(b);
    document.getElementById("myTr").appendChild(a);

    var c = document.createElement("TD");
    var d = document.createElement("BUTTON");
    c.setAttribute("id", "plusYellow");


    d.innerHTML = " + ";
    d.onclick = add;
    c.appendChild(d);
    document.getElementById("myTr").appendChild(c);



    var e = document.createElement("TD");
    var f = document.createElement("BUTTON");
    e.setAttribute("id", "moinsYellow");


    f.innerHTML = " - ";
    e.appendChild(f);
    document.getElementById("myTr").appendChild(e);

    var g = document.createElement("TD");
    var h = document.createTextNode(Object.values(billets[4]));
    g.appendChild(h);
    document.getElementById("myTr").appendChild(g);

    var i = document.createElement("TD");
    var j = document.createTextNode(Object.values(billets[4]));
    i.appendChild(j);
    document.getElementById("myTr").appendChild(i);

}

function blue() {

    var x = document.createElement("TR");
    x.setAttribute("id", "trTr");
    document.getElementById("panier").appendChild(x);
    var y = document.createElement("TD");
    var t = document.createTextNode(Object.keys(billets[2]));
    y.appendChild(t);
    document.getElementById("trTr").appendChild(y);

    var a = document.createElement("TD");
    var b = document.createElement("input");

    b.setAttribute("value", "1");

    a.setAttribute("id", "qtBlue");
    a.appendChild(b);
    document.getElementById("trTr").appendChild(a);

    var c = document.createElement("TD");
    var d = document.createElement("BUTTON");
    c.setAttribute("id", "plusBlue");
    d.setAttribute("onClick", "add()");
    d.innerHTML = " + ";
    c.appendChild(d);
    document.getElementById("trTr").appendChild(c);

    var e = document.createElement("TD");
    var f = document.createElement("BUTTON");
    e.setAttribute("id", "moinsBlue");
    f.setAttribute("onClick", "add()");
    f.innerHTML = " - ";
    e.appendChild(f);
    document.getElementById("trTr").appendChild(e);

    var g = document.createElement("TD");
    var h = document.createTextNode(Object.values(billets[2]));
    g.appendChild(h);
    document.getElementById("trTr").appendChild(g);

    var i = document.createElement("TD");
    var j = document.createTextNode(Object.values(billets[2]));
    i.appendChild(j);
    document.getElementById("trTr").appendChild(i);

}

function red() {

    var xi = document.createElement("TR");
    xi.setAttribute("id", "quTr");
    document.getElementById("panier").appendChild(xi);
    var y = document.createElement("TD");
    var t = document.createTextNode(Object.keys(billets[3]));
    y.appendChild(t);
    document.getElementById("quTr").appendChild(y);

    var z = document.createElement("TD");
    z.setAttribute("id", "qtRed");
    var zi = document.createElement("input");
    zi.setAttribute("value", "1"); 
    
    z.appendChild(zi);
    document.getElementById("quTr").appendChild(z);

    var c = document.createElement("TD");
    var d = document.createElement("BUTTON");
    d.setAttribute("id", "plusRed");
    d.setAttribute("onClick", "add()");
    d.innerHTML = " + ";
    c.appendChild(d);
    document.getElementById("quTr").appendChild(c);

    var e = document.createElement("TD");
    var f = document.createElement("BUTTON");
    f.setAttribute("id", "moinsRed");
    f.setAttribute("onClick", "min()");
    f.innerHTML = " - ";
    e.appendChild(f);
    document.getElementById("quTr").appendChild(e);

    var g = document.createElement("TD");
    var h = document.createTextNode(Object.values(billets[3]));
    g.appendChild(h);
    document.getElementById("quTr").appendChild(g);

    var i = document.createElement("TD");
    var j = document.createTextNode(Object.values(billets[3]));
    i.appendChild(j);
    document.getElementById("quTr").appendChild(i);

}