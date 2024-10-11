
let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.innerText;

        if (buttonText === 'Ac') {
            // Clear everything
            string = '';
            inputBox.value = '0';
        } else if (buttonText === 'Del') {
            // Remove the last character
            string = string.slice(0, -1);
            inputBox.value = string || '0';
        } else if (buttonText === '=') {
            // Evaluate the expression
            try {
                string = String(eval(string));
                inputBox.value = string;
            } catch {
                inputBox.value = 'Error';
                string = '';
            }
        } else if (buttonText === '±') {
            // Toggle plus/minus
            if (string) {
                if (string.startsWith('-')) {
                    string = string.slice(1);
                } else {
                    string = '-' + string;
                }
                inputBox.value = string;
            }
        }  else if (buttonText === '%') {
            // Convert the last number into percentage
            const lastNumberMatch = string.match(/-?\d+(\.\d+)?$/); // Match the last number
            if (lastNumberMatch) {
                const lastNumber = lastNumberMatch[0];
                const percentage = String(parseFloat(lastNumber) / 100); // Convert to percentage
                string = string.replace(lastNumber, percentage);
                inputBox.value = string;
            }
        } else {
            // Append the clicked button text
            if (string === '0' && buttonText !== '.') {
                string = buttonText;  // Start a new number
            } else {
                string += buttonText;
            }
            inputBox.value = string;
        }
    });
});


/*

let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
         if(event.target.innerText=='='){
            string=String(eval(string));
            inputBox.value=string;
         }else if(event.target.innerText=='Ac'){
            string='';
            inputBox.value=string;
         }else if (event.target.innerText == 'Del') {
            // Remove the last character
            string=string.substring(0,string.length-1);
            inputBox.value=string;
        }else if(event.target.id=='plusMinus'){
            string=String(-eval(string));
            inputBox.value=string;
        }
        else{
            string+=event.target.innerText;
            inputBox.value=string;
        }
    });
});

*/
