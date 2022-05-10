
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        // alert (currentOperandTextElement)
        this.clear()
    }
 
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        // this.operation = 'undefined'
        // this.splat = ''
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1)

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) { 
        if (this.currentOperand === '') return 
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '/':
                computation = prev / current
                break
            case '%':
                computation = prev % current
                break
            case '*':
                computation = prev * current
                break
            default:
                return
            

        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }  
    }

     
    
    // amountSplit(splat) {

        //  if (this.currentOperand === '') return 
        // this.splat = splat
    
    amountSplit() {
        var nairaMoney = [1000,500,200,100,50,20,10,5];
        var displayValue =  document.querySelector('[data-current-operand]').innerText;
        var first = displayValue.replace(/,/g, '');
        var second = document.getElementById('item');

        for(var i=0; i<nairaMoney.length; i++){
            
            var cal = Math.floor(first/nairaMoney[i]);
            var rem = (first % nairaMoney[i]);
            var outcome = document.createElement("p");
        
            if (cal != 0) {
                outcome.innerText = (nairaMoney[i] +" = "+ cal);
                second.append(outcome);
            }  
            first = rem;  
        }
    }   
}




//data-attributes must be inside square brackets 

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const submitButton = document.getElementById('button')



const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click',button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click',button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',button => {
    calculator.delete()
    calculator.updateDisplay()
})

submitButton.addEventListener('click',
button => {
        calculator.amountSplit()
}) 



    // const submitButton = document.getElementById('button').addEventListener('click', amountSplit);
    // function amountSplit(){
    //     // console.log('Button clicked');
    //     const outlook = document.getElementById('item');
    //     // outlook.innerText = this.currentOperand.value;

    //     // const change = document.querySelector('[data-current-operand]').innerText;

    //     // const precedent = parseFloat(change)

    //     // outlook.innerText = document.createElement(precedent);

        
    // }
    
//    function amountSplit() {
 
//         let nairaMoney = [1000,500,200,100,50,20,10,5];
//         const first =  document.querySelector('[data-current-operand]').value;
//         const second = document.getElementById('item');
    
//         console.log(first);
//         for(let i=0; i<nairaMoney.length; i++){
//             let cal = Math.floor(first/nairaMoney[i]);
//             let remainder = first % nairaMoney[i];
//             let outcome = document.createElement('p');
            
//             if (cal != 0) {
//                 outcome.innerText = (nairaMoney[i] +" = "+ cal);
//                 second.append(outcome);
//             }
//             
//         }
//     }

// var newOutput = document.querySelector('this.currentOperand').value;

// var p = document.createElement('p');
// p.className = 'displayed';
// console.log(p);

// p.append(document.createTextNode(newOutput));
// }

// itemAdd.append(p);

// newOutcome.addEventListener('submit', amountSplit);


