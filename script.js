
function displayvalue(num){
         let res=document.querySelector("#result")
     res.value +=num
}

function solve(){
    let res=document.querySelector("#result")
    let cur_val=res.value
    let result=eval(res.value)
    res.value=result
}
function backspace(){
    let res=document.querySelector("#result")
    let cur_val=res.value
    res.value=cur_val. slice(0,-1)
}
function clearbox(){
    document.querySelector("#result").value=""
 }


//var clearbox=()=>result.value=""
//var solve=()=>result.value=eval(result.value)
//var displayvalue=(num)=>result.value