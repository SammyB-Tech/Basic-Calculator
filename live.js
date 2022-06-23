
        const num1= parseInt(prompt('Enter Number1:'));
        const num2= parseInt( prompt( 'Enter Number2:'));
        const operator = prompt( 'Enter Operator(+, -, /, *)');

        let result = 0;
                if (isNaN(num1) || isNaN(num2)) {
            alert(' Wrong input! Refresh the page and provide correct input');
        }else{
            if( operator == '+'){ result=num1 + num2;
        }else if(operator =='-'){ result = num1 - num2;}
        else if (operator == '*'){ result = num1 * num2;}
        else if (operator == '/'){ result = num1 / num2;}
    }
    alert( num1 + operator + num2 + '=' + result);
