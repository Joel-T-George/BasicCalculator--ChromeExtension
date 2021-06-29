# BasicCalculator--ChromeExtension
This Extension Do Basic Calculators in Edge,Chrome and tested 28-06-2021 And good Function Extension
### Chrome Extension Works
When Click The icon The Calculator Get Started 
![](https://i.snipboard.io/zpn8YA.jpg)
Small Coded In Javascript File One `Class` Is Presented and `addEventListener` 15o lines are in  Code 
`DEL` key For Deleting the value in primary valueDisplay 
`AC` Key It Clear The All Content in Calculator 
{`0` - `9`} numerical Buttons 
`-`,`+`,`X`,`%` this are the opreator Buttons
`=` is equal product Final Results in Calculator
## JavaScript Code Explain
Make a `Class` in `.js` file as `Calculator`
```javascript
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
```
Intialize main variables in Calcuator that are selector in DOM element are in html visualizing the pictures below ...
![](https://i.snipboard.io/DbGAdY.jpg)

`this.value`,`this.Opreadvalue`,`this.counter`,`this.secondOprand.value` this are the veiws present in DOM Element or Html Page this are the parameter of Class Further Process Explain in the **Docs**
#### Append Value
```javascript
    appendkeys(key){
	    this.value += key
    }
```
it Look Easy But Most Using Function `this..mainoperand` Static variable `this.value ` add key from button of Template
#### Display in Template
```javascript
    display(){
	    this.mainoperand.value = this.value
		this.oprandviews.value = this.opreandvalue
		this.countviews.value = this.counter
	}
```
The Function Update The Value in Template Calculator assign to DOM Element  the Function in All `AddEventLisener`  use the function for Update in Page
#### Delete Value in mainoperand
```javascript
    delete(){
		let str = this.value
		let main = str.slice(0,-1);
		this.value = main
	}
```
`this.value` it is mainoprand value slice index of string for Example "124353" it a string use this Cancel the last charater like this "12435" it was Happen in Function is Call on Clicking `DEL` Key
#### Assign Value or Operation placing
```javascript
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
```
In this Segment Some Error Are Solved By if Condition this Function Call When Clicking Opreation like`-`,`X`,`+`,`%` the function Call Here Assign mainopreand Value Shift to SecondOprand value and Using ` display()` function Show in calculator 
#### Calculation of Values 
*important*
```javascript
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
```
This was the Main it say the calculator it Call on When clicking of Equalto in template Button Four Main Conditions other for Error Correction 
#### Selection in Template
```javascript
// Call Class Here...
var calcu = new calculator(CurrentOperand,OldOperand,Count,Oprendsv)

// querySelectorAll Calling
ButtonKeys.forEach((button) => {
  button.addEventListener('click', () => {
    calcu.appendkeys(button.value)
    calcu.display()

 	});
});

// querySelector Calling
Equalto.addEventListener('click',()=>{
	calcu.compute()
	calcu.display()
});
```
This Are Click Click Function Happen in Html Page `html/popup.html` this are Code lines Function Javascript `js/popup.html` File To Execute The Calculator Extension 
### Reference And Learn By 
I Get Idea of making Extension in webBrowser to Do Calculation with Seeing the Content in page and do solve problems .
I refered Youtube Channel,Blogs,Googling Strings and That Knowledge I do This Extension  for Style add Css File .
