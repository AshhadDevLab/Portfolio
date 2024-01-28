const cardcss = document.querySelector(".card-css"),
      letterscss = cardcss.querySelector(".card-letters-css");

const handleOnMovecss = e => {
  const rect = cardcss.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  letterscss.style.setProperty("--x", `${x}px`);
  letterscss.style.setProperty("--y", `${y}px`);
  letterscss.innerText = randomString(1500);    
}

cardcss.onmousemove = e => handleOnMovecss(e);

cardcss.ontouchmove = e => handleOnMovecss(e.touches[0]);