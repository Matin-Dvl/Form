let inputName = document.querySelector(".input-name");
let inputLast = document.querySelector(".input-lastname");
let inputPhone = document.querySelector(".input-phone");
let inputEmail = document.querySelector(".input-email");
let Btn = document.querySelector(".submit-btn");







    let userId = Number(localStorage.getItem("lastId")) || 0;
    let Users = JSON.parse(localStorage.getItem("users")) || [];

Btn.addEventListener("click" , ()=>{
    let inpName = inputName.value.trim();
    let inpLast = inputLast.value.trim();
    let inpPhone = inputPhone.value.trim();
    let inpEmail = inputEmail.value.trim();
    if(inpName === "" || inpName.length < 2 || inpName.length > 15 || !isNaN(Number(inpName))){
        alert("no inpName");
        return
    }else if(inpLast === "" || inpLast.length < 2 || inpLast.length > 15 || !isNaN(Number(inpLast))){
        alert("no inpLast");
        return
    }else if(inpPhone === "" || inpPhone.length < 10 || inpPhone.length > 11 || isNaN(Number(inpPhone))){
        alert("no inpPhone");
        return
    }else if(inpEmail === ""){
        alert("no inpEmail");
        return
    }else{
        userId ++;
        Users.push({
            id : userId,
            name : inpName,
            lastname : inpLast,
            Phone : inpPhone,
            Email : inpEmail,
        })

        localStorage.setItem("lastId", String(userId));
        localStorage.setItem("users", JSON.stringify(Users));

        render();
        inputName.value = "";
        inputLast.value = "";
        inputPhone.value = "";
        inputEmail.value = "";
    }
})
function render(){
    console.log(Users);
}
render();

localStorage.clear();