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
let scenarios=[

{
text:"เพื่อนชวนคุณไปงานปาร์ตี้ที่มีแอลกอฮอล์",
choices:[
{text:"ปฏิเสธและกลับบ้าน",effect:{risk:-10,health:5,decision:5}},
{text:"ไปแต่ไม่ดื่ม",effect:{social:5}},
{text:"ดื่มกับเพื่อน",effect:{risk:10,health:-5,social:10}}
]
},

{
text:"เพื่อนล้อว่าคุณไม่กล้าดื่ม",
choices:[
{text:"ยืนยันจุดยืน",effect:{decision:6,risk:-6}},
{text:"หัวเราะแล้วเปลี่ยนเรื่อง",effect:{social:3}},
{text:"ดื่มเพื่อพิสูจน์ตัวเอง",effect:{risk:9}}
]
},

{
text:"คุณเครียดจากการเรียน",
choices:[
{text:"ออกกำลังกาย",effect:{health:5}},
{text:"เล่นเกมผ่อนคลาย",effect:{}},
{text:"ดื่มเพื่อคลายเครียด",effect:{risk:7,health:-3}}
]
},

{
text:"เพื่อนกำลังดื่มในงานวันเกิด",
choices:[
{text:"ดื่มน้ำอัดลมแทน",effect:{health:3}},
{text:"ลองจิบเล็กน้อย",effect:{risk:3}},
{text:"ดื่มหลายแก้ว",effect:{risk:8,health:-4}}
]
},

{
text:"เพื่อนกำลังจะขับรถหลังดื่ม",
choices:[
{text:"ห้ามและหาทางช่วย",effect:{decision:8}},
{text:"ปล่อยผ่าน",effect:{decision:-3}},
{text:"นั่งรถไปด้วย",effect:{risk:10}}
]
},

{
text:"เพื่อนชวนไปซื้อแอลกอฮอล์",
choices:[
{text:"ปฏิเสธ",effect:{decision:5}},
{text:"ไปด้วยแต่ไม่ซื้อ",effect:{social:3}},
{text:"ช่วยซื้อ",effect:{risk:8}}
]
},

{
text:"เพื่อนในกลุ่มกำลังดื่มกัน",
choices:[
{text:"ชวนเล่นเกมแทน",effect:{decision:6,social:4}},
{text:"นั่งเฉยๆ",effect:{}},
{text:"ร่วมดื่ม",effect:{risk:7}}
]
},

{
text:"คุณกำลังเครียดจากสอบ",
choices:[
{text:"อ่านหนังสือเพิ่ม",effect:{decision:4}},
{text:"พักผ่อน",effect:{health:3}},
{text:"ดื่มเพื่อผ่อนคลาย",effect:{risk:6}}
]
},

{
text:"เพื่อนบอกว่าการดื่มทำให้สนุก",
choices:[
{text:"บอกว่าไม่จำเป็น",effect:{decision:5}},
{text:"หัวเราะแล้วเปลี่ยนเรื่อง",effect:{social:3}},
{text:"ลองดื่ม",effect:{risk:6}}
]
},

{
text:"คุณเห็นเพื่อนเมา",
choices:[
{text:"ช่วยพากลับบ้าน",effect:{decision:6}},
{text:"ถ่ายรูปขำๆ",effect:{social:2}},
{text:"ดื่มเพิ่มด้วย",effect:{risk:7}}
]
},

{
text:"งานเลี้ยงโรงเรียน",
choices:[
{text:"ดื่มน้ำผลไม้",effect:{health:4}},
{text:"ลองจิบ",effect:{risk:3}},
{text:"ดื่มหลายแก้ว",effect:{risk:9}}
]
},

{
text:"เพื่อนเสนอแข่งดื่ม",
choices:[
{text:"ปฏิเสธ",effect:{decision:6}},
{text:"ดูเฉยๆ",effect:{}},
{text:"ร่วมแข่ง",effect:{risk:10}}
]
},

{
text:"คุณรู้สึกโดดเดี่ยว",
choices:[
{text:"คุยกับเพื่อน",effect:{social:5}},
{text:"ฟังเพลง",effect:{health:2}},
{text:"ดื่มคนเดียว",effect:{risk:7}}
]
},

{
text:"เพื่อนชวนไปบาร์",
choices:[
{text:"ไม่ไป",effect:{decision:5}},
{text:"ไปแต่ไม่ดื่ม",effect:{social:4}},
{text:"ไปและดื่ม",effect:{risk:8}}
]
},

{
text:"เพื่อนบอกว่าแค่แก้วเดียว",
choices:[
{text:"ปฏิเสธ",effect:{decision:5}},
{text:"ลองนิดหน่อย",effect:{risk:3}},
{text:"ดื่มเต็มที่",effect:{risk:8}}
]
},

{
text:"คุณเห็นเพื่อนเมาแล้วล้ม",
choices:[
{text:"ช่วย",effect:{decision:6}},
{text:"หัวเราะ",effect:{social:2}},
{text:"ดื่มต่อ",effect:{risk:6}}
]
},

{
text:"เพื่อนบอกว่าไม่มีใครรู้",
choices:[
{text:"ไม่ทำ",effect:{decision:5}},
{text:"ลังเล",effect:{risk:2}},
{text:"ดื่ม",effect:{risk:7}}
]
},

{
text:"เพื่อนให้ลองเครื่องดื่มใหม่",
choices:[
{text:"ปฏิเสธ",effect:{decision:4}},
{text:"จิบ",effect:{risk:2}},
{text:"ดื่ม",effect:{risk:6}}
]
},

{
text:"งานปาร์ตี้ใหญ่",
choices:[
{text:"เต้นและสนุกโดยไม่ดื่ม",effect:{social:5}},
{text:"จิบเล็กน้อย",effect:{risk:3}},
{text:"ดื่มหนัก",effect:{risk:9}}
]
},

{
text:"เพื่อนถ่ายคลิปตอนดื่ม",
choices:[
{text:"บอกให้หยุด",effect:{decision:5}},
{text:"ไม่สนใจ",effect:{}},
{text:"ดื่มโชว์",effect:{risk:7}}
]
}

]
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
