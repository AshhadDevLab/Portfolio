const cardgoogle = document.querySelector(".card-google"),
      lettersgoogle = cardgoogle.querySelector(".card-letters-google");

const handleOnMovegoogle = e => {
  const rect = cardgoogle.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersgoogle.style.setProperty("--x", `${x}px`);
  lettersgoogle.style.setProperty("--y", `${y}px`);
  lettersgoogle.innerText = randomString(1500);    
}

cardgoogle.onmousemove = e => handleOnMovegoogle(e);

cardgoogle.ontouchmove = e => handleOnMovegoogle(e.touches[0]);