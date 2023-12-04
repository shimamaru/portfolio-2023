window.onload = function () {
  setTimeout(() => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loaded");

    // アイコンのアニメーション
    gsap.from(".about__image img", {
      x: -50,
      y: 50,
      scale: 0.5,
      rotation: -45,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    // スクロールのアニメーション
    // アニメーションの開始前に要素を初期位置に設定
    gsap.set(".about__scroll", { y: "-700%" });

    // アニメーション
    gsap.to(".about__scroll", {
      y: "0%",
      opacity: 1,
      duration: 1,
      ease: "power2.out", // イージングの設定（必要に応じて変更）
    });

    // 文字が出てくるアニメーション1
    animateText(".ml2", 600, 500);
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
    delay: (el, i) => delay + 70 * i,
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
  scaleMobile: 0.7,
  color: 0xaa9457,
  backgroundColor: 0x231c25,
  points: 15.0,
  maxDistance: 25.0,
});

//カードが一枚ずつ表示されるアニメーション
document.addEventListener("DOMContentLoaded", function () {
  const featureItems = document.querySelectorAll(".feature__item");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 300); // Adjust the delay time as needed
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  featureItems.forEach((item) => {
    observer.observe(item);
  });
});
