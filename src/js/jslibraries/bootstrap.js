const cardbootstrap = document.querySelector(".card-bootstrap"),
      lettersbootstrap = cardbootstrap.querySelector(".card-letters-bootstrap");

const handleOnMovebootstrap = e => {
  const rect = cardbootstrap.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersbootstrap.style.setProperty("--x", `${x}px`);
  lettersbootstrap.style.setProperty("--y", `${y}px`);
  lettersbootstrap.innerText = randomString(1500);    
}

cardbootstrap.onmousemove = e => handleOnMovebootstrap(e);

cardbootstrap.ontouchmove = e => handleOnMovebootstrap(e.touches[0]);