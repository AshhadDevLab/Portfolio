const cardkommunicate = document.querySelector(".card-kommunicate"),
      letterskommunicate = cardkommunicate.querySelector(".card-letters-kommunicate");

const handleOnMovekommunicate = e => {
  const rect = cardkommunicate.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  letterskommunicate.style.setProperty("--x", `${x}px`);
  letterskommunicate.style.setProperty("--y", `${y}px`);
  letterskommunicate.innerText = randomString(1500);    
}

cardkommunicate.onmousemove = e => handleOnMovekommunicate(e);

cardkommunicate.ontouchmove = e => handleOnMovekommunicate(e.touches[0]);