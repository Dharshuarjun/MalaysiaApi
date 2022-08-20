var div=document.createElement("div");
div.innerHTML=`
<h1>Malaysia Population</h1>
<p class="header">Enter a State Name in Malaysia<p>
<input type="text"id="txt">
<button type="button" onclick="getData()">Search</button>
<div id="popu"></div>
<div id="state"></div>
<div id="above18"></div>
<div id="above60"></div>
`;
div.style.textAlign="center";


document.body.append(div);

async function getData(){
    let cc=document.getElementById("txt").value;
let res=await fetch(`https://myvaccination-backend.vercel.app/api/pop/${cc}`);
let res1=await res.json();
console.log(res1.modifiedData.total);
let result=res1.modifiedData.total;
document.getElementById("popu").innerText=`Total Population : ${result}`;

console.log(res1.modifiedData.stateName);
let result1=res1.modifiedData.stateName;
document.getElementById("state").innerText=`Statename : ${result1}`;

console.log(res1.modifiedData["18to59"]);
let result2=res1.modifiedData["18to59"];
document.getElementById("above18").innerText=`Age 18 to 59 : ${result2}`;


console.log(res1.modifiedData["60andAbove"]);
let result3=res1.modifiedData["60andAbove"];
document.getElementById("above60").innerText=`60 and Above : ${result3}`;
}
