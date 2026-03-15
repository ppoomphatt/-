let playerName=""
let schoolName=""

let stats={

health:50,

risk:30,

decision:50,

social:50

}

let current=0

let gameScenarios=[]function startAssessment(){

playerName=document.getElementById("playerName").value
schoolName=document.getElementById("schoolName").value

let html=

`
<h2>แบบประเมินก่อนเล่น</h2>

<p>คุณเคยดื่มแอลกอฮอล์หรือไม่</p>

<select id="selfDrink">

<option value="0">ไม่เคย</option>

<option value="5">เคยลอง</option>

<option value="10">ดื่มบางครั้ง</option>

<option value="20">ดื่มบ่อย</option>

</select>

<br><br>

<p>เพื่อนของคุณดื่มหรือไม่</p>

<select id="friendDrink">

<option value="0">ไม่มี</option>

<option value="5">บางคน</option>

<option value="10">ส่วนใหญ่</option>

<option value="15">เกือบทุกคน</option>

</select>

<br><br>

<button onclick="startGame()">เริ่มสถานการณ์</button>

`

document.getElementById("assessment").innerHTML=html

}function applyAssessment(){

stats.risk+=parseInt(document.getElementById("selfDrink").value)

stats.social+=parseInt(document.getElementById("friendDrink").value)

}function getRandomScenarios(count){

let shuffled=scenarios.sort(()=>0.5-Math.random())

return shuffled.slice(0,count)

}function startGame(){

applyAssessment()

gameScenarios=getRandomScenarios(20)

showScenario()

}function showScenario(){

let s=gameScenarios[current]

let html="<h2>"+s.text+"</h2>"

s.choices.forEach((c,i)=>{

html+=`

<button onclick="choose(${i})">

${c.text}

</button>

`

})

document.getElementById("game").innerHTML=html

}function choose(i){

let choice=gameScenarios[current].choices[i]

for(let k in choice.effect){

stats[k]+=choice.effect[k]

}

current++

if(current>=gameScenarios.length){

endGame()

}

else{

showScenario()

}

}function showChart(){

let ctx=document.getElementById("chart")

new Chart(ctx,{

type:"radar",

data:{

labels:["Health","Risk","Decision","Social"],

datasets:[{

label:"Player Behavior",

data:[

stats.health,
stats.risk,
stats.decision,
stats.social

]

}]

}

})

}function analyzePlayer(){

if(stats.risk<20 && stats.decision>60){

return{

profile:"Community Protector",

description:"คุณหลีกเลี่ยงความเสี่ยงและปกป้องคนรอบตัว"

}

}

if(stats.social>70){

return{

profile:"Social Leader",

description:"คุณมีอิทธิพลต่อเพื่อน"

}

}

if(stats.risk>60){

return{

profile:"Risk Explorer",

description:"คุณชอบทดลองสิ่งเสี่ยง"

}

}

return{

profile:"Balanced Player",

description:"คุณรักษาสมดุลในการตัดสินใจ"

}

}function endGame(){

savePlayerData()

let result=analyzePlayer()

document.getElementById("result").innerHTML=

"<h2>"+result.profile+"</h2>"+

"<p>"+result.description+"</p>"

showChart()

showSchoolLeaderboard()

}function savePlayerData(){

let score=

stats.decision+
stats.health+
stats.social-
stats.risk

let data=

JSON.parse(localStorage.getItem("players")||"[]")

data.push({

player:playerName,

school:schoolName,

score:score

})

localStorage.setItem("players",JSON.stringify(data))

}function calculateSchoolRanking(){

let players=

JSON.parse(localStorage.getItem("players")||"[]")

let schools={}

players.forEach(p=>{

if(!schools[p.school]){

schools[p.school]={

total:0,

count:0

}

}

schools[p.school].total+=p.score

schools[p.school].count++

})

let ranking=[]

for(let s in schools){

ranking.push({

school:s,

avg:schools[s].total/schools[s].count

})

}

ranking.sort((a,b)=>b.avg-a.avg)

return ranking

}function showSchoolLeaderboard(){

let ranking=calculateSchoolRanking()

let html="<h2>School Ranking</h2>"

ranking.forEach((r,i)=>{

html+=`

<div>

<b>${i+1}. ${r.school}</b>

<br>

Average Score: ${r.avg.toFixed(1)}

</div>

<hr>

`

})

document.getElementById("leaderboard").innerHTML=html

}
