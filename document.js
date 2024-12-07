document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    if (name && email) {
        alert("Booking successful!");
    } else {
        alert("Please fill in all fields.");
    }
});
