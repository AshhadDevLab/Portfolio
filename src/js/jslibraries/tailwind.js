const cardtailwind = document.querySelector(".card-tailwind"),
      letterstailwind = cardtailwind.querySelector(".card-letters-tailwind");

const handleOnMovetailwind = e => {
  const rect = cardtailwind.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  letterstailwind.style.setProperty("--x", `${x}px`);
  letterstailwind.style.setProperty("--y", `${y}px`);
  letterstailwind.innerText = randomString(1500);    
}

cardtailwind.onmousemove = e => handleOnMovetailwind(e);

cardtailwind.ontouchmove = e => handleOnMovetailwind(e.touches[0]);