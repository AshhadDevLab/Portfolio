const cardopenweather = document.querySelector(".card-openweather"),
      lettersopenweather = cardopenweather.querySelector(".card-letters-openweather");

const handleOnMoveopenweather = e => {
  const rect = cardopenweather.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersopenweather.style.setProperty("--x", `${x}px`);
  lettersopenweather.style.setProperty("--y", `${y}px`);
  lettersopenweather.innerText = randomString(1500);    
}

cardopenweather.onmousemove = e => handleOnMoveopenweather(e);

cardopenweather.ontouchmove = e => handleOnMoveopenweather(e.touches[0]);