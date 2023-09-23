const userSlider=document.querySelector(".user-slider");

const pricingPlans={
    "free":document.querySelector("#free"),
    "pro":document.querySelector("#pro"),
    "enterprise":document.querySelector("#enterprise")
}
//highlight plan
const highlightPlan=(activePlan)=>{
    for(let plan in pricingPlans){
        const currentPlan=pricingPlans[plan];
        if(currentPlan===activePlan){
            currentPlan.classList.add("highlight");
        }else{
            currentPlan.classList.remove("highlight")
        }
    }
}
//slider on change event
const handleChange=(e)=>{
    const users=+e.target.value;
    const {free,pro,enterprise}=pricingPlans;
    if(users>0 && users<=10){
        highlightPlan(free)
    }else if(users>10 && users<=20){
        highlightPlan(pro)
    }else{
        highlightPlan(enterprise)
    }
}

userSlider.addEventListener("change",handleChange)