const cardhtml = document.querySelector(".card-html"),
      lettershtml = cardhtml.querySelector(".card-letters-html");

const handleOnMovehtml = e => {
  const rect = cardhtml.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettershtml.style.setProperty("--x", `${x}px`);
  lettershtml.style.setProperty("--y", `${y}px`);
  lettershtml.innerText = randomString(1500);    
}

cardhtml.onmousemove = e => handleOnMovehtml(e);

cardhtml.ontouchmove = e => handleOnMovehtml(e.touches[0]);