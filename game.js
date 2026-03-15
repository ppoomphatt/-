let playerName=""
let schoolName=""

let stats={
health:50,
risk:30,
decision:50,
social:50
}

let scenarios=[

{
text:"เพื่อนชวนคุณไปงานปาร์ตี้ที่มีแอลกอฮอล์",

choices:[

{
text:"ปฏิเสธและกลับบ้าน",
effect:{risk:-10,health:5,decision:5}
},

{
text:"ไปแต่ไม่ดื่ม",
effect:{social:5}
},

{
text:"ดื่มกับเพื่อน",
effect:{risk:10,health:-5,social:10}
}

]

},

{
text:"เพื่อนล้อว่าคุณไม่กล้าดื่ม",

choices:[

{
text:"ยืนยันจุดยืน",
effect:{decision:6,risk:-6}
},

{
text:"หัวเราะแล้วเปลี่ยนเรื่อง",
effect:{social:3}
},

{
text:"ดื่มเพื่อพิสูจน์ตัวเอง",
effect:{risk:9}
}

]

},

{
text:"คุณเครียดจากการเรียน",

choices:[

{
text:"ออกกำลังกาย",
effect:{health:5}
},

{
text:"เล่นเกมผ่อนคลาย",
effect:{}
},

{
text:"ดื่มเพื่อคลายเครียด",
effect:{risk:7,health:-3}
}

]

}

]

let gameScenarios=[]
let current=0

function startAssessment(){

playerName=
document.getElementById("playerName").value

schoolName=
document.getElementById("schoolName").value

startGame()

}

function getRandomScenarios(count){

let shuffled=
scenarios.sort(()=>0.5-Math.random())

return shuffled.slice(0,count)

}

function startGame(){

gameScenarios=getRandomScenarios(scenarios.length)

showScenario()

}

function showScenario(){

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

}

function choose(i){

let choice=
gameScenarios[current].choices[i]

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

}

function analyzePlayer(stats){

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

}

function getEnding(stats){

if(stats.risk<20){

return"Youth Leader Ending"

}

if(stats.health>70){

return"Healthy Future Ending"

}

if(stats.risk>70){

return"Danger Zone Ending"

}

return"Uncertain Journey Ending"

}

function savePlayerData(){

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

}

function calculateSchoolRanking(){

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

}

function showSchoolLeaderboard(){

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

function endGame(){

savePlayerData()

let result=analyzePlayer(stats)

let ending=getEnding(stats)

document.getElementById("result").innerHTML=

"<h2>"+result.profile+"</h2>"+
"<p>"+result.description+"</p>"+
"<h3>"+ending+"</h3>"

showSchoolLeaderboard()

}
