const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
      randomString = length => Array.from(Array(length)).map(randomChar).join("");

const cardblender = document.querySelector(".card-blender"),
      lettersblender = cardblender.querySelector(".card-letters-blender");

const handleOnMoveblender = e => {
  const rect = cardblender.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  lettersblender.style.setProperty("--x", `${x}px`);
  lettersblender.style.setProperty("--y", `${y}px`);
  lettersblender.innerText = randomString(1500);    
}

cardblender.onmousemove = e => handleOnMoveblender(e);

cardblender.ontouchmove = e => handleOnMoveblender(e.touches[0]);