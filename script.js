let message = document.getElementById("message");

let count = 0;

message.addEventListener("click", (e) => {
    count += 1;
    alert(`${e.target.innerHTML} ${count}`);
});