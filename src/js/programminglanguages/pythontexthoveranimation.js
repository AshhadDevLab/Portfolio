const cardpython = document.querySelector(".card-python"),
      letterspython = cardpython.querySelector(".card-letters-python");

const handleOnMovepython = e => {
  const rect = cardpython.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  letterspython.style.setProperty("--x", `${x}px`);
  letterspython.style.setProperty("--y", `${y}px`);
  letterspython.innerText = randomString(1500);    
}

cardpython.onmousemove = e => handleOnMovepython(e);

cardpython.ontouchmove = e => handleOnMovepython(e.touches[0]);