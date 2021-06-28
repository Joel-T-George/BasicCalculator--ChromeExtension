
class calculator{
	constructor(mainoperand,secondOprand,counts,oprandskeyv){
		this.mainoperand = mainoperand
		this.secondOprand =secondOprand
		this.countviews =counts
		this.oprandviews =oprandskeyv
		this.value = " "
		this.opreandvalue= " "
		this.counter = 0
		this.secondOprand.value ="0000"
		
	}
	
	appendkeys(key){

		this.value += key
		
	}
	decimel(){
		let num = this.value
		if(num.indexOf(".") !== -1){
			return
		}
		else{
			this.value+= "."
		}

	}
	display(){
		this.mainoperand.value = this.value
		this.oprandviews.value = this.opreandvalue
		this.countviews.value = this.counter
	}
	delete(){
		let str = this.value
		let main = str.slice(0,-1);
		this.value = main


	}
	allclear(){
		this.value = " "
		this.secondOprand.value ="0000"
		this.opreandvalue=" "
		this.counter = 0
	
	}
	Assgin(btnoprend){
		let mainvalue =parseFloat(this.value)
		if(mainvalue == 0)return
		if(this.secondOprand.value == "0000" && this.value !== " " ){
			this.secondOprand.value = this.mainoperand.value
			this.value = " "
			this.opreandvalue = btnoprend
		}
		if(this.secondOprand.value !== "0000" && this.value ==" "  ){
			this.opreandvalue = btnoprend	
		}
	}
	compute(){
		if(this.secondOprand.value !== "0000" && this.value !==" " && this.opreandvalue !== " "){
			let prevalue =parseFloat(this.secondOprand.value)
			let mainvalue =parseFloat(this.value)
			let res = 0
			if(mainvalue == 0)return
			if(this.opreandvalue == "+"){
				res = prevalue + mainvalue
				this.secondOprand.value = String(res)
				this.value = " "
				this.counter += 1
					
			}
			if(this.opreandvalue == "-"){
				res = prevalue - mainvalue
				this.value = " "
				this.secondOprand.value = String(res)
				this.counter += 1
				
			}
			if(this.opreandvalue == "/"){
				res = prevalue / mainvalue
				this.secondOprand.value = String(res)
				this.value = " "
				this.counter += 1
			}
			if(this.opreandvalue == "*"){
				res = prevalue * mainvalue
				this.secondOprand.value = String(res)
				this.value = " "
				this.counter += 1
			}
		}		
	}
}
const CurrentOperand = document.querySelector(".currentoprends")
const OldOperand = document.querySelector(".PreviousOprends")
const Count = document.querySelector(".count")
const Oprendsv = document.querySelector(".Oprends")
const ButtonKeys = document.querySelectorAll(".numberkeys")
const Operands = document.querySelectorAll(".oprends")
const AllClear = document.querySelector(".all-clear-btn")
const DeleteKeys = document.querySelector(".delete")
const Decimals = document.querySelector(".decimals")
const Equalto = document.querySelector(".equalto")


ButtonKeys.forEach((button) => {
  button.addEventListener('click', () => {
    calcu.appendkeys(button.value)
    calcu.display()

 	});
});
Operands.forEach((button) => {
  button.addEventListener('click', () => {    
    calcu.Assgin(button.value)
    calcu.display()
  });
});

DeleteKeys.addEventListener('click',()=>{
	calcu.delete()
	calcu.display()
});

Decimals.addEventListener('click',()=>{
	calcu.decimel()
	calcu.display()
});

AllClear.addEventListener('click',()=>{
	calcu.allclear()
	calcu.display()
});

Equalto.addEventListener('click',()=>{
	calcu.compute()
	calcu.display()
	
	
});

var calcu = new calculator(CurrentOperand,OldOperand,Count,Oprendsv)
