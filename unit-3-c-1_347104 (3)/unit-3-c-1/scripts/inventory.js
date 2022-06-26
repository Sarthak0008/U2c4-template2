let arr=JSON.parse(localStorage.getItem('products') )
function append(arr){
   arr.forEach(function(el,index){
    let body=document.createElement('div')
    let img=document.createElement('img')
    img.src=el.image;
    let h1=document.createElement('h3')
    h1.innerText=el.type;
    let h2=document.createElement('h3')
    h2.innerText=el.price;
    let h3=document.createElement('h3')
    h3.innerText=el.desc;
    let btn=document.createElement('button')
    btn.innerText='remove';
    btn.addEventListener('click',function(){
        remove(el,index)
    })
    body.append(img,h1,h2,h3,btn)
    document.getElementById('all_products').append(body)

   })
}
append(arr)
function remove(el,index){
    // console.log('hy')
   arr.splice(index,1)
   localStorage.setItem('products',JSON.stringify(arr))
   window.location.reload()

}