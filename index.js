// write js code here corresponding to index.html
// You should add submit event on the form
var data=JSON.parse(localStorage.getItem("schedule"))||[]
document.querySelector("#masaiForm").addEventListener("submit",myFun)
function myFun(){
    event.preventDefault()
    var obj={
        matchNum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    }
    data.push(obj)
    console.log(data)
    localStorage.setItem("schedule",JSON.stringify(data))
}
