// - get the user's first name
// - get the user's last name
// - get the user's favourite colour
// - tell the user their new password:
// - the password must have the following format: first name + last name + favourite colour + 42

// Tips
// - You can manipulate strings in many different ways, make sure to google about it if you're not sure

// Challenge
// Instead of 42, can you make your passwords more secure and generate a random number between 0 and 200?
// Use your Google-Fu skills!

// Challenge 2
// Now that we can generate a random number, can you make it so that the user can input the range in between you generate the random number?
// See if you can find a way to parse the input so that you can have 2 numbers!

let firstName = prompt('whats your first name')
let lastName = prompt('whats your last name')
let color = prompt('whats your favourite colour')
let maxNumber = Number(prompt("what is the biggest number"))
let minNumber = Number(prompt("what is the smallest number"))
let number = Math.floor(Math.random() * (maxNumber-minNumber))
let password = `your password is ${firstName}${lastName}${color}${number}`
console.log(password)
alert(password)