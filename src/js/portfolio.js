// Open and close sidebar
let open = document.querySelector("#menuBtn").addEventListener("click", () => {
  document.querySelector("#sideBar").style.display = "inline-block";
  if ((document.querySelector("#sideBar").style.display = "inline-block")) {
    document.querySelector("#menuBtn").style.display = "none";
  }
});
let close = document
  .querySelector("#menuClose")
  .addEventListener("click", () => {
    document.querySelector("#sideBar").style.display = "none";
    if ((document.querySelector("#sideBar").style.display = "none")) {
      document.querySelector("#menuBtn").style.display = "inline-block";
    }
  });
