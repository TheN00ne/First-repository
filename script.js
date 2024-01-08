let message = document.getElementById("message");

message.addEventListener("click", (e) => {
    alert(e.target.innerHTML);
});