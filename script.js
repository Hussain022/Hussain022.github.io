const convertBtn = document.getElementById('convert-btn');
const input = document.getElementById('number');
const result = document.getElementById('output');

const divider = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
	10: 'X',
	9: 'IX',
	5: 'V',
	4: 'IV',
	1: 'I'
};

const dividerNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];


convertBtn.addEventListener('click', () => {
    const inputNumber = parseInt(input.value);
    const invalidInput = `<p id="invalidInput">Please enter a valid number</p>`;
    const lessthenOneInput = `<p id="invalidInput">Please enter a number greater than or equal to 1</p>`;
    const greaterthenFourThousandInput = `<p id="invalidInput">Please enter a number less than or equal to 3999</p>`;
    let temp = inputNumber;
    let output = '';
    let res = 0;
    
    if(inputNumber >= 1){
        if(inputNumber>=4000){
            result.innerHTML = greaterthenFourThousandInput;
        }else{
            for(let i = 0; i < dividerNumber.length; i++){
                while(temp >= dividerNumber[i]){
                    res = Math.floor(temp / dividerNumber[i]);
                    temp = temp % dividerNumber[i];
                    for(let j=0; j<res; j++){
                        output += divider[dividerNumber[i]];
                    }
                }
            }
            const validInput = `<p id="validInput">${output}</p>`;
            result.innerHTML = validInput;
        }
    }else if(inputNumber || inputNumber === 0){
        result.innerHTML = lessthenOneInput;
    }else{
        result.innerHTML = invalidInput;
    }
})

