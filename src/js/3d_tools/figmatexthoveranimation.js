const cardfigma = document.querySelector(".card-figma"),
      lettersfigma = cardfigma.querySelector(".card-letters-figma");

const handleOnMovefigma = e => {
  const rect = cardfigma.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersfigma.style.setProperty("--x", `${x}px`);
  lettersfigma.style.setProperty("--y", `${y}px`);
  lettersfigma.innerText = randomString(1500);    
}

cardfigma.onmousemove = e => handleOnMovefigma(e);

cardfigma.ontouchmove = e => handleOnMovefigma(e.touches[0]);