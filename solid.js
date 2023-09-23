class PlanButton{
  constructor(element){
      this.element=element;
  }
  addActive(){
      this.element.classList.add("highlight");
  }
  removeActive(){
      this.element.classList.remove("highlight");
  }
}

class Slider{
  constructor(slider,planButtons){
      this.slider=slider
      this.planButtons=planButtons
      this.slider.addEventListener("change",this.handleChange.bind(this))
  }

  handleChange(e){
      const users=+e.target.value;
      let activePlan;
      if(users<10){
          activePlan=this.planButtons.free;
      }else if(users>10 && users<=20){
          activePlan=this.planButtons.pro;
      }else{
          activePlan=this.planButtons.enterprise;
      }
      this.updatePlanButtons(activePlan)
  }
  updatePlanButtons(activePlan){
     for(const plan in this.planButtons){
        if(this.planButtons.hasOwnProperty(plan)){
          const button=this.planButtons[plan];
          if(button===activePlan){
              button.addActive()
          }else{
              button.removeActive()
          }
        }
     }
  }
}

const planButtons={
  "free":new PlanButton(document.querySelector("#free")),
  "pro":new PlanButton(document.querySelector("#pro")),
  "enterprise":new PlanButton(document.querySelector("#enterprise"))
}

const slider=new Slider(document.querySelector("input[type=range]"),planButtons);

