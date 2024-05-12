let sidebar = document.querySelector("#sideBar");
let sideBarLinks = document.querySelector("#nav-links");
let sideBarFooter = document.querySelector("#nav-footer");
let art1Btn = document.querySelector("#art1-btn");

// Open and close sidebar
let open = document.querySelector("#menuBtn").addEventListener("click", () => {
  if ((sidebar.style.width = "0px")) {
    sidebar.style.width = "320px";
    sideBarLinks.style.display = "inline-flex";
    sideBarFooter.style.display = "inline-block";
    art1Btn.style.display = "none";
  }
});
let close = document
  .querySelector("#menuClose")
  .addEventListener("click", () => {
    document.querySelector("#sideBar").style.width = "0px";
    sideBarLinks.style.display = "none";
    sideBarFooter.style.display = "none";
    art1Btn.style.display = "inline-block";
  });
