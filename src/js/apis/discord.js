const carddiscord = document.querySelector(".card-discord"),
      lettersdiscord = carddiscord.querySelector(".card-letters-discord");

const handleOnMovediscord = e => {
  const rect = carddiscord.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersdiscord.style.setProperty("--x", `${x}px`);
  lettersdiscord.style.setProperty("--y", `${y}px`);
  lettersdiscord.innerText = randomString(1500);    
}

carddiscord.onmousemove = e => handleOnMovediscord(e);

carddiscord.ontouchmove = e => handleOnMovediscord(e.touches[0]);