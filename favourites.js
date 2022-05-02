
var Arr3=JSON.parse(localStorage.getItem("favourites"))||[]
DisplayData(Arr3)
function DisplayData(data){
  data.forEach(function (el,index){
    var box=document.querySelector("tbody")
 
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
  td6.innerText="Delete"
  td6.style.color="blue"
  td6.style.cursor="pointer"
  td6.addEventListener("click",function(){
      deleteItem(el,index)
  })

  tr.append(td1,td2,td3,td4,td5,td6)
  box.append(tr)

  })
}
function deleteItem(el,index){
    console.log(Arr3)
    Arr3.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(Arr3))
    window.location.reload();

}





    
