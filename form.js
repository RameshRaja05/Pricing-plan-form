const form=document.querySelector(".modal-body form");
const modalCloseButton=document.querySelector(".modal-footer button");
const formInfo={
    "name":document.querySelector("input[name=firstname]"),
    "email":document.querySelector("input[name=email]"),
    "orderInfo":document.querySelector("textarea[name=message]")
}

const resetValues=()=>{
    for(let key in formInfo){
       const info=formInfo[key];
       info.value=""
    }
}


form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const data={
        name:formInfo.name.value,
        email:formInfo.email.value,
        message:formInfo.orderInfo.value
    };
    modalCloseButton.click()
    const res=await fetch("https://forms.maakeetoo.com/formapi/789",{
        method:"POST",
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods" : "POST,OPTIONS,GET",
            "Access-Control-Allow-Headers" : "Origin, Content-Type, Accept",
            "AccessCode":"9RTQEHBN7P7Y3Z5SOIOU5QUVD",
            'Accept': 'application/json',
        },
        body:JSON.stringify(data)
    })
    console.log(res);
    resetValues()
})




