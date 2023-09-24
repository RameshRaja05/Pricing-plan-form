const form=document.querySelector(".modal-body form");
const modalCloseButton=document.querySelector(".modal-footer button");
const formInfo={
    "name":document.querySelector("form input[name=firstname]"),
    "email":document.querySelector("form input[name=email]"),
    "orderInfo":document.querySelector("form textarea[name=message]")
}
const resetValues=()=>{
    for(let key in formInfo){
       const info=formInfo[key];
       info.value=""
    }
}


form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const headers=new Headers();
    headers.append('Content-Type', 'application/json');
    const data={
        firstname:formInfo.name.value,
        email:formInfo.email.value,
        message:formInfo.orderInfo.value
    };
    modalCloseButton.click()
    //the forms hasn't fully configured for accepting client request that's why we use proxy server to send a data to api
    const res=await fetch("https://cors-anywhere.herokuapp.com/https://forms.maakeetoo.com/formapi/788",{
        mode:"cors",
        method:"POST",
        headers,
        body:JSON.stringify(data)
    });
    if(res.status===201){
        alert("We got your response");
    }
    modalCloseButton.click()
})



