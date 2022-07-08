const countertext=document.querySelector('#counter')
const minusbtn=document.querySelector('#minus-btn')
const Plusbtn=document.querySelector('#plus-btn')
const resetbtn=document.querySelector('#reset-btn')

//write functions for plus,minus and reset counter

let count=0
const increase=()=>{
    count++
    countertext.textContent=count
    }

const decrease=()=>{
    count--
    countertext.textContent= count
    }

const reset=()=>
{
    count=0
    countertext.textContent= count
}


//add listeners=count
minusbtn.addEventListener('click',decrease)
Plusbtn.addEventListener('click',increase)
resetbtn.addEventListener('click',reset)

//Lets work on Theme Switch

