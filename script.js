let message = document.getElementById("message");

message.addEventListener("click", (e) => {
    alert("Message");
    console.log(e.target);
})