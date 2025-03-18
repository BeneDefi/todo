// let numOne = document.querySelector("#first-number");
// let mathsSymbol = document.querySelector("#math-symbol");
// let numTwo = document.querySelector("#second-number");
// let results = document.querySelector("#result")
// let equal = document.querySelector("#equal-btn");

// equal.addEventListener("click",() => {

// let num1 = parseFloat(numOne.value);
// let num2 = parseFloat(numTwo.value);
// let mathSymbol = mathsSymbol.value;


// if (isNaN(num1) || isNaN(num2)) {
//     results.textContent = "Please input valid numbers".
//     results.style.color = "red";
// } else {
//     let result;

//     if (mathSymbol === "+") {
//         result = num1 + num2;
//     } else if (mathSymbol === "-") {
//         result = num1 - num2;
//     } else if (mathSymbol === "*") {
//         result = num1 * num2;
//     } else if (mathSymbol === "/") {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             results.textContent = "Cannot divide by zero.";
//             results.style.color = "red";
//             result = null;
//         }
//     } else {
//         results.textContent = "Invalid math symbol. Please use +, -, *, or /.";
//         results.style.color = "red";
//         result = null;
//     }

//     if (result !== null) {
//         results.textContent = `The result is: ${result}`;
//         results.style.color = "green";
//     }
// }
// })



// // let numOne = prompt("input number")
// // let mathSymbol = prompt("math symbol")
// // let numTwo = prompt("input num")

// // let addision = numOne + numTwo;
// // let division = numOne / numTwo;
// // let subtraction = numOne - numTwo;
// // let multiplication = numOne * numTwo;

// // if(isNaN(numOne) || isNaN(numTwo)){
// //     alert("Input a valid number")
// // }

// // let num1 = parseFloat(numOne);
// // let num2 = parseFloat(numTwo)

// // if (num1 + num2){
// //     alert(`Your answer is ${addision}`)
// // } else if(num1 / num2){
// //     alert(`Your answer is ${division}`)
// // } else if (num1 - num2){
// //     alert (`Your answer is ${subtraction}`)
// // } else if(num1 * num2){
// //     alert(`Your answer is ${multiplication}`)
// // }

todo.addEventListener('click', (e) => {

    // Delete the todo item when clicking on the delete button
    if (e.target.id === 'delete') {
        e.target.parentElement.remove();
    }

    // Add or remove the tick mark when clicking on the check button
    if (e.target.id === 'check') {
        const textElement = e.target.closest('.flex').querySelector('#text');
        // Toggle tick mark
        if (e.target.innerHTML === "") {
            e.target.innerHTML = `<i id="checkTick" class="fa-solid fa-check px-1 py-1 text-white rounded-full bg-blue-700"></i>`;
        } else {
            e.target.innerHTML = "";  // Remove the tick mark
        }
        
        // Toggle the line-through class on the text element
        if (textElement.classList.contains('line-through')) {
            textElement.classList.remove('line-through');
        } else {
            textElement.classList.add('line-through');
        }
    }

    // When clicking the text, toggle the line-through style
    if (e.target.id === 'text') {
        if (e.target.classList.contains('line-through')) {
            e.target.classList.remove('line-through');
        } else {
            e.target.classList.add('line-through');
        }

        // Additionally, toggle the check tick on or off if needed (you may decide if this is needed or not)
        const checkDiv = e.target.closest('.flex').querySelector('#check');
        if (!checkDiv.innerHTML) {
            checkDiv.innerHTML = `<i id="checkTick" class="fa-solid fa-check px-1 py-1 text-white rounded-full bg-blue-700"></i>`;
        }
    }

    // If the check mark icon is clicked, remove it and remove the line-through
    if (e.target.id === 'checkTick') {
        const checkDiv = e.target.closest('.flex').querySelector('#check');
        checkDiv.innerHTML = "";  // Remove the check mark

        const textElement = e.target.closest('.flex').querySelector('#text');
        textElement.classList.remove('line-through');  // Remove line-through
    }
});
z