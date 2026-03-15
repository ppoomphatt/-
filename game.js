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
let scenarios=[let scenarios=[]

function addScenario(text,a,b,c){

scenarios.push({

text:text,

choices:[

{text:a,effect:{decision:5,risk:-3}},
{text:b,effect:{social:4}},
{text:c,effect:{risk:8,health:-3}}

]

})

}

addScenario("เพื่อนชวนคุณไปงานปาร์ตี้","ปฏิเสธ","ไปแต่ไม่ดื่ม","ดื่มกับเพื่อน")
addScenario("เพื่อนล้อว่าคุณไม่กล้าดื่ม","ยืนยันจุดยืน","หัวเราะ","ดื่มเพื่อพิสูจน์")
addScenario("คุณเครียดจากการเรียน","ออกกำลังกาย","พักผ่อน","ดื่ม")
addScenario("เพื่อนชวนซื้อแอลกอฮอล์","ปฏิเสธ","ไปด้วย","ซื้อ")
addScenario("เพื่อนกำลังดื่ม","ชวนเล่นเกม","นั่งเฉยๆ","ร่วมดื่ม")
addScenario("งานวันเกิด","ดื่มน้ำผลไม้","จิบ","ดื่มหนัก")
addScenario("เพื่อนจะขับรถหลังดื่ม","ห้าม","ไม่สนใจ","นั่งรถไป")
addScenario("งานเลี้ยงโรงเรียน","ไม่ดื่ม","ลอง","ดื่ม")
addScenario("เพื่อนแข่งดื่ม","ปฏิเสธ","ดู","แข่ง")
addScenario("เพื่อนให้ลองเครื่องดื่ม","ปฏิเสธ","จิบ","ดื่ม")

addScenario("งานปาร์ตี้ใหญ่","เต้น","จิบ","ดื่มหนัก")
addScenario("เพื่อนบอกว่าแค่แก้วเดียว","ปฏิเสธ","ลอง","ดื่ม")
addScenario("เพื่อนเมา","ช่วย","หัวเราะ","ดื่มเพิ่ม")
addScenario("คุณเหงา","คุยกับเพื่อน","ฟังเพลง","ดื่ม")
addScenario("เพื่อนชวนไปบาร์","ไม่ไป","ไปแต่ไม่ดื่ม","ไปดื่ม")
addScenario("เพื่อนถ่ายคลิปตอนดื่ม","ห้าม","ไม่สนใจ","โชว์ดื่ม")
addScenario("งานเลี้ยงรุ่น","ไม่ดื่ม","จิบ","ดื่ม")
addScenario("เพื่อนให้ลองของใหม่","ปฏิเสธ","ลอง","ดื่ม")
addScenario("เพื่อนบอกว่าไม่มีใครรู้","ไม่ทำ","ลังเล","ทำ")
addScenario("คุณเครียด","ออกกำลังกาย","พัก","ดื่ม")

addScenario("เพื่อนเมาแล้วล้ม","ช่วย","หัวเราะ","ดื่ม")
addScenario("เพื่อนชวนดื่มหลังเรียน","ปฏิเสธ","นั่งด้วย","ดื่ม")
addScenario("งานเลี้ยงครอบครัว","ไม่ดื่ม","จิบ","ดื่ม")
addScenario("เพื่อนท้า","ไม่เล่น","ดู","เล่น")
addScenario("เพื่อนบอกว่าดื่มแล้วเท่","ไม่เชื่อ","หัวเราะ","ดื่ม")
addScenario("งานปีใหม่","ไม่ดื่ม","จิบ","ดื่ม")
addScenario("คุณเครียดมาก","ออกกำลัง","ดูหนัง","ดื่ม")
addScenario("เพื่อนชวนไปปาร์ตี้ลับ","ไม่ไป","ไปดู","ดื่ม")
addScenario("เพื่อนเสนอแข่ง","ปฏิเสธ","ดู","แข่ง")
addScenario("เพื่อนเมา","ช่วย","เฉยๆ","ดื่ม")

addScenario("งานสังสรรค์","ไม่ดื่ม","ลอง","ดื่ม")
addScenario("เพื่อนชวนดื่มก่อนสอบ","ปฏิเสธ","ลังเล","ดื่ม")
addScenario("เพื่อนเมาในงาน","ช่วย","หัวเราะ","ดื่ม")
addScenario("งานเลี้ยงกลุ่ม","ไม่ดื่ม","จิบ","ดื่ม")
addScenario("เพื่อนบอกว่าทุกคนดื่ม","ไม่ทำ","ลังเล","ดื่ม")
addScenario("คุณเครียดจากบ้าน","คุย","พัก","ดื่ม")
addScenario("เพื่อนชวนกลางคืน","ไม่ไป","ไปดู","ดื่ม")
addScenario("งานเลี้ยงใหญ่","ไม่ดื่ม","จิบ","ดื่ม")
addScenario("เพื่อนท้า","ไม่ทำ","ดู","ทำ")
addScenario("เพื่อนบอกให้ลอง","ปฏิเสธ","จิบ","ดื่ม")

addScenario("งานเลี้ยงวันเกิด","ไม่ดื่ม","จิบ","ดื่ม")
addScenario("เพื่อนเมา","ช่วย","หัวเราะ","ดื่ม")
addScenario("เพื่อนชวนอีกครั้ง","ปฏิเสธ","ลอง","ดื่ม")
addScenario("งานปาร์ตี้สุดท้าย","ไม่ดื่ม","จิบ","ดื่ม")
addScenario("เพื่อนท้าแข่ง","ไม่แข่ง","ดู","แข่ง")
addScenario("เพื่อนเมาแล้วล้ม","ช่วย","เฉย","ดื่ม")
addScenario("คุณเครียดมาก","ออกกำลังกาย","พัก","ดื่ม")
addScenario("งานเลี้ยง","ไม่ดื่ม","จิบ","ดื่ม")
addScenario("เพื่อนชวนอีกครั้ง","ปฏิเสธ","ลอง","ดื่ม")
addScenario("ปาร์ตี้สุดท้าย","ไม่ดื่ม","จิบ","ดื่ม")
]
{
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
