const cardmidjourney = document.querySelector(".card-midjourney"),
      lettersmidjourney = cardmidjourney.querySelector(".card-letters-midjourney");

const handleOnMovemidjourney = e => {
  const rect = cardmidjourney.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersmidjourney.style.setProperty("--x", `${x}px`);
  lettersmidjourney.style.setProperty("--y", `${y}px`);
  lettersmidjourney.innerText = randomString(1500);    
}

cardmidjourney.onmousemove = e => handleOnMovemidjourney(e);

cardmidjourney.ontouchmove = e => handleOnMovemidjourney(e.touches[0]);