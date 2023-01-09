const numb = document.querySelector(".numb");
let counter = 100;
setInterval(() => {
    if (counter == 0) {
        clearInterval();
    } else {
        counter -= 1;
        numb.textContent = counter + "%";
    }
}, 80);
