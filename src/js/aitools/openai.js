const cardopenai = document.querySelector(".card-openai"),
      lettersopenai = cardopenai.querySelector(".card-letters-openai");

const handleOnMoveopenai = e => {
  const rect = cardopenai.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersopenai.style.setProperty("--x", `${x}px`);
  lettersopenai.style.setProperty("--y", `${y}px`);
  lettersopenai.innerText = randomString(1500);    
}

cardopenai.onmousemove = e => handleOnMoveopenai(e);

cardopenai.ontouchmove = e => handleOnMoveopenai(e.touches[0]);