const numb = document.querySelector(".numb");
const key="28VPJ-R332H-MHQJ6-NGE5A"
let counter = 100;
setInterval(() => {
    if (counter == 0) {
        clearInterval();
    } else {
        counter -= 1;
        numb.textContent = counter + "%";
    }
}, 80);
