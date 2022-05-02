// write js code here corresponding to matches.html
var data=JSON.parse(localStorage.getItem("schedule"))||[]
let favArr=JSON.parse(localStorage.getItem("favourites"))||[]



var filtervenue=document.querySelector("#filterVenue")
filtervenue.addEventListener("click",function(el){
    filter(e.target.value)
})

var box=document.querySelector("tbody")
data.forEach(function(el) {
    // var box=document.querySelector("tbody")
    var tr=document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=el.matchNum
    
    var td2=document.createElement("td")
    td2.innerText=el.teamA

    var td3=document.createElement("td")
    td3.innerText=el.teamB

    var td4=document.createElement("td")
    td4.innerText=el.date

    var td5=document.createElement("td")
    td5.innerText=el.venue

    var td6=document.createElement("td")
    td6.innerText="Favourite"
    td6.style.color="green"
    td6.style.cursor="pointer"

    td6.addEventListener("click",function(){
        favFun(el)
    })

    tr.append(td1,td2,td3,td4,td5,td6)
    box.append(tr)
    

});
function favFun(el){
    console.log(el)
    favArr.push(el)
    localStorage.setItem("favourites",JSON.stringify(favArr))
}
