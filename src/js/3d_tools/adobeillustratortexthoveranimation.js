const cardadobeillustrator = document.querySelector(".card-adobeillustrator"),
      lettersadobeillustrator = cardadobeillustrator.querySelector(".card-letters-adobeillustrator");

const handleOnMoveadobeillustrator = e => {
  const rect = cardadobeillustrator.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersadobeillustrator.style.setProperty("--x", `${x}px`);
  lettersadobeillustrator.style.setProperty("--y", `${y}px`);
  lettersadobeillustrator.innerText = randomString(1500);    
}

cardadobeillustrator.onmousemove = e => handleOnMoveadobeillustrator(e);

cardadobeillustrator.ontouchmove = e => handleOnMoveadobeillustrator(e.touches[0]);