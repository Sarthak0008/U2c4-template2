//store the products array in localstorage as "products"
let arr=JSON.parse(localStorage.getItem('products') )||[]
function Myfun(e){
  e.preventDefault()
  let form=document.getElementById("form")
  let type=form.type.value;
  let desc=form.desc.value;
  let img=form.image.value;
  let price=form.price.value;
  let x=new product(type,desc,price,img)
  arr.push(x)
  localStorage.setItem('products',JSON.stringify(arr))
  console.log(x)
  document.getElementById('type').value='';
  document.getElementById('desc').value=''
  document.getElementById('price').value=''
  document.getElementById('image').value=''


}
function product(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
 
}