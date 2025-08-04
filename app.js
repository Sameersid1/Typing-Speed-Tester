let quote=document.getElementById("quote");
let type=document.getElementById("type");
let result=document.getElementById("result");
let startBtn=document.getElementById("startBtn");
type.disabled=true;
const quotes=[
    "Practice makes perfect.",
    "Typing fast requires focus and accuracy.",
    "JavaScript is fun to learn and use.",
    "Stay consistent and never give up.",
    "Code every day to improve your skills."
];
let startTime, currentQuotes;
startBtn.addEventListener("click",function(){
    currentQuotes=quotes[Math.floor(Math.random()*quotes.length)];
    quote.innerText=currentQuotes;
    type.value="";
    type.disabled=false;  // Enable input field
    type.focus();      //automatically focus on the input field
    result.innerText="";
    startTime=new Date().getTime();
    btn.style.display="none"; //Hide the start button
});
type.addEventListener("input",function(){
    let userTyped=type.value;
    if(userTyped===currentQuotes){
        const endTime=new Date().getTime();
        const timeTaken=(endTime-startTime)/1000; //in seconds

        const wordCount=userTyped.split(" ").length;
        const wpm=Math.round((wordCount/timeTaken)*60);

        result.innerHTML=`
        ✅<strong>Completed!</strong><br>
        ⏱️ Time: ${timeTaken.toFixed(2)} seconds<br>
        💨 Speed: ${wpm} WPM
        `;
        type.disabled=true;
    }
})