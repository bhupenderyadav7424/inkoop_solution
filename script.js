function checkNumber() {
    const input = document.getElementById('numberInput').value;
    const messageDiv = document.getElementById('message');
    const number = parseInt(input, 10);

    // Check if input is a valid number
    if (isNaN(number)) {
        messageDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    // Check if the number is negative
    if (number < 0) {
        messageDiv.innerHTML = "Enter a positive value.";
        return;
    }

    let result = '';
    // If the number is even
    if (number % 2 === 0) {
        result = `Next 3 even numbers: ${number + 2}, ${number + 4}, ${number + 6}`;
    }
    // If the number is odd
    else {
        result = `Next 3 odd numbers: ${number + 2}, ${number + 4}, ${number + 6}`;
    }

    messageDiv.innerHTML = result;
}