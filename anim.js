
const buttonRotate = [
    { transform: "rotateY(360deg)" },
    { transform: "rotate(-90deg) scale(0)" }
];

const animTime = {
    duration: 1800,
    iterations: 1,
};

const btnContact = document.querySelector(".rotate-button");

btnContact.addEventListener("click", () => {
    btnContact.animate(buttonRotate, animTime);
  setTimeout(addRedirectHref, 1600)
});

function addRedirectHref() {
    window.location.href = "contact.html";
}