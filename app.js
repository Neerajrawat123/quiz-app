const input = document.querySelector("input")
const btn = document.querySelector("button")
const item = document.querySelector(".items")
const ul = document.querySelector(".items")
const li = document.querySelector("li")
const ok = document.querySelector(".ok")



let todo=""

btn.addEventListener("click",createListItem)
document.addEventListener("enter",createListItem)


// btn.addEventListener("click",()=>{
    //     todo.push(input.value)
    //     if (todo=="") {
        //         alert("please enter the value")
        
        //     } else {
//         todo+=input.value
//         input.value=""
//         item.innerHTML+=`<li>${todo} <button class="clear">clear </button></li>`

//     }


    
// })
// console.log(clear)
// for (let i = 0; i < 3; i++) {
    //     clear[i].addEventListener("click",function(){
        //         console.log("jj")
        
        
        function createListItem() {
            todo+=input.value
            
            //         
            item.innerHTML+=`<li> ${todo}<button class = "clear">X</button></li>`
            input.value=""
            todo=""
            let  clear = document.querySelectorAll(".clear")
            
            for (let i = 0; i < clear.length; i++) {
                console.log("aaa")
                clear[i].addEventListener("click",function(){
                    this.parentNode.remove()
                    console.log(clear[i])
            
                })
}}
//     }) 
// li.addEventListener("click",crossout)
// var dbtn=document.createElement("button")
// dbtn.appendChild(document.createTextNode("clear"))
// li.appendChild(dbtn)
// dbtn.addEventListener("click",clearitem)
// // ?function calListItem(params) {
//     //     return item.length;}
    
    
//     function clearitem(params) {
//         li.classList.add("delete")
        
//     }
    
//     function crossout() {
//     li.classList.toggle("done")
    
// }
    
// }
// clear.forEach((Element,index) =>{


// })




