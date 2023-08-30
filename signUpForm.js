const newPassword = document.getElementById('newPassword');
const newPassword2 = document.getElementById('newPassword2');

//enter.addEventListener('click',function(){
   // console.log('hi'    )
//})

function signUpInputs(){
    const inputs = document.getElementsByClassName("signUpInput");
    let solve = [];
    if(newPassword.value===newPassword2.value){
    for(let i=0;i<inputs.length;i++){
       /* if(inputs[i].value.length==0){
            alert('One or More feilds are blank')
            alert(alerts.join(", "));
        }else{*/
       solve.push(inputs[i].value)
    }
}else alert("Your Passwords DO NOT Match!");
return solve
}


export{signUpInputs}