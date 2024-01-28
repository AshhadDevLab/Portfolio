const cardthree = document.querySelector(".card-three"),
      lettersthree = cardthree.querySelector(".card-letters-three");

const handleOnMovethree = e => {
  const rect = cardthree.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersthree.style.setProperty("--x", `${x}px`);
  lettersthree.style.setProperty("--y", `${y}px`);
  lettersthree.innerText = randomString(1500);    
}

cardthree.onmousemove = e => handleOnMovethree(e);

cardthree.ontouchmove = e => handleOnMovethree(e.touches[0]);