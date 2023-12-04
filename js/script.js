window.onload = function () {
  setTimeout(() => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loaded");

    // 文字が出てくるアニメーション1
    animateText(".ml2", 600, 1300);
  }, 1300);
};

function animateText(selector, duration, delay) {
  var textWrapper = document.querySelector(selector);
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline().add({
    targets: `${selector} .letter`,
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: duration,
    delay: (el, i) => delay + 40 * i,
  });
}

VANTA.NET({
  //Add the id of your tag with the # before
  el: "#anim_net",
  mouseControls: false,
  touchControls: false,
  gyroControls: true,
  minHeight: 200.0,
  minWidth: 300.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xaa9457,
  backgroundColor: 0x231c25,
  points: 15.0,
  maxDistance: 25.0,
});

//
