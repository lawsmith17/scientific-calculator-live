// this event listener is only active only when the page has loaded thats when the code inside the function will be excuted
        document.addEventListener("DOMContentLoaded", function () {
            const display = document.getElementById('calc-display');
            const buttons = document.getElementsByClassName('btn');

            let currentValue = "";

            function evaluateResult()
            {
                const convertedValue = currentValue
                .replace("×","*")
                .replace("÷","/")
                .replace("%","*0.01");
                const result = eval(convertedValue);
                currentValue = result.toString();
                display.value = currentValue;

            }

            for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i];
                button.addEventListener('click', function () {
                    // console.log('button clicked', button.innerText)
                    const value = button.innerText;

                    if(value == "AC")
                {
                    currentValue = "";
                    display.value = currentValue;
                }else if(value == "=")
                {
                    evaluateResult();
                }
                else{
                    currentValue += value;
                    display.value = currentValue;
                }

                });
            }

            


        });