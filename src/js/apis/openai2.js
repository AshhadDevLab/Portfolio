const cardopenai2 = document.querySelector(".card-openai2"),
      lettersopenai2 = cardopenai2.querySelector(".card-letters-openai2");

const handleOnMoveopenai2 = e => {
  const rect = cardopenai2.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersopenai2.style.setProperty("--x", `${x}px`);
  lettersopenai2.style.setProperty("--y", `${y}px`);
  lettersopenai2.innerText = randomString(1500);    
}

cardopenai2.onmousemove = e => handleOnMoveopenai2(e);

cardopenai2.ontouchmove = e => handleOnMoveopenai2(e.touches[0]);