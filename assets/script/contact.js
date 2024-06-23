function contact() {
    var nama = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (nama == "" || email == "" || message == "") {
        alert("Please fill in all the fields.");
    } else {
        alert(`Thank you ${nama} for contacting us! We will get back to you soon.`);
    }
}