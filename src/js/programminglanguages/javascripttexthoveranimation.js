const cardjavascript = document.querySelector(".card-javascript"),
      lettersjavascript = cardjavascript.querySelector(".card-letters-javascript");

const handleOnMovejavascript = e => {
  const rect = cardjavascript.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersjavascript.style.setProperty("--x", `${x}px`);
  lettersjavascript.style.setProperty("--y", `${y}px`);
  lettersjavascript.innerText = randomString(1500);    
}

cardjavascript.onmousemove = e => handleOnMovejavascript(e);

cardjavascript.ontouchmove = e => handleOnMovejavascript(e.touches[0]);