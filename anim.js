// ===== Having som fun with animations. Work in progress

const buttonRotate = [
    { transform: "rotateY(360deg)" },
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(-90deg) scale(0)" },
];

const animTime = {
    duration: 1800,
    iterations: 1,
};

const btnContact = document.querySelector(".rotate-button");

btnContact.addEventListener("click", () => {
    btnContact.animate(buttonRotate, animTime);
  setTimeout(addRedirectHref, 1850)
});

function addRedirectHref() {
    window.location.href = "contact.html";
}