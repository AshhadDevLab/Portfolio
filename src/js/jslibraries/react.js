const cardreact = document.querySelector(".card-react"),
      lettersreact = cardreact.querySelector(".card-letters-react");

const handleOnMovereact = e => {
  const rect = cardreact.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersreact.style.setProperty("--x", `${x}px`);
  lettersreact.style.setProperty("--y", `${y}px`);
  lettersreact.innerText = randomString(1500);    
}

cardreact.onmousemove = e => handleOnMovereact(e);

cardreact.ontouchmove = e => handleOnMovereact(e.touches[0]);