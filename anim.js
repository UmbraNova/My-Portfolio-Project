// ===== Having som fun with animations. Work in progress

const buttonRotate = [
    { transform: "rotateY(360deg)" },
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(-90deg) scale(0)" },
];

const buttonTiming = {
    duration: 1000,
    iterations: 1,
};

const btnContact = document.querySelector(".rotate-button");

btnContact.addEventListener("click", () => {
    btnContact.animate(buttonRotate, buttonTiming);
  setTimeout(addRedirectHref, 1000)
});

function addRedirectHref() {
    window.location.href = "contact.html"
}