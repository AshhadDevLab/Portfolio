const cardgithubcopilot = document.querySelector(".card-githubcopilot"),
      lettersgithubcopilot = cardgithubcopilot.querySelector(".card-letters-githubcopilot");

const handleOnMovegithubcopilot = e => {
  const rect = cardgithubcopilot.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersgithubcopilot.style.setProperty("--x", `${x}px`);
  lettersgithubcopilot.style.setProperty("--y", `${y}px`);
  lettersgithubcopilot.innerText = randomString(1500);    
}

cardgithubcopilot.onmousemove = e => handleOnMovegithubcopilot(e);

cardgithubcopilot.ontouchmove = e => handleOnMovegithubcopilot(e.touches[0]);