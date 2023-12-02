function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById("js-hamburger");
  var blackBg = document.getElementById("js-black-bg");

  //上記の関数のコンソール

  hamburger.addEventListener("click", function () {
    body.classList.toggle("nav-open");
  });
  blackBg.addEventListener("click", function () {
    body.classList.remove("nav-open");
  });
}
toggleNav();

window.onload = function () {
  // 2秒後にローディングアニメーションを非表示にする
  setTimeout(function () {
    const spinner = document.getElementById("loading");
    spinner.classList.add("loaded");
  }, 1000);
};
