const form = document.getElementById('login');

form.addEventListener('submit', event=>{
    // prevent the browser from submitting  the form.
    event.preventDefault();
    console.log('preventing submit.');
    console.log(form.elements)
    // destructuring form.element
    const [name, password] = form.elements;
    console.log(name.value, password.value);
});