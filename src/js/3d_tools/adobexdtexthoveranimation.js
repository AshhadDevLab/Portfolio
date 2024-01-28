const cardadobexd = document.querySelector(".card-adobexd"),
      lettersadobexd = cardadobexd.querySelector(".card-letters-adobexd");

const handleOnMoveadobexd = e => {
  const rect = cardadobexd.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersadobexd.style.setProperty("--x", `${x}px`);
  lettersadobexd.style.setProperty("--y", `${y}px`);
  lettersadobexd.innerText = randomString(1500);    
}

cardadobexd.onmousemove = e => handleOnMoveadobexd(e);

cardadobexd.ontouchmove = e => handleOnMoveadobexd(e.touches[0]);