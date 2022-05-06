/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
const initPage = () => {
  const isPressed = window.localStorage.getItem("dyslexic") === "true";
  if (isPressed) {
    document.body.classList.add("dyslexia-mode");
  }

  //set the button to pressed if appropriate
  const toggle = document.querySelector("#dyslexia-toggle");
  if (isPressed) {
    toggle.setAttribute("aria-pressed", "true");
  }

  //attach event handler
  toggle.addEventListener("click", toggleEventHandler);
};
const toggleEventHandler = (ev) => {
  //get current state;
  let pressed = ev.currentTarget.getAttribute("aria-pressed") === "true";

  //toggle button's current state:
  ev.currentTarget.setAttribute("aria-pressed", String(!pressed));

  //toggle the .dyslexia-mode class:
  document.body.classList.toggle("dyslexia-mode");

  //persist the setting to local storage:
  window.localStorage.setItem("dyslexic", String(!pressed));
};

// invoke initPage function:
initPage();
