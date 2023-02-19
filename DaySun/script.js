const form = document.getElementById("form-container")

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const user_name = document.getElementById('user')
    console.log(user_name.value)
    const password = document.getElementById('pass')
    console.log(password.value)
    console.log("Hey")
})
console.log("Whatever")