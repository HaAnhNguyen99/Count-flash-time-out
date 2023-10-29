if (!document.hidden) {
  const countdownButton_top = document.getElementById("countdown-top");
  const countdownDisplay_top = document.getElementById("countdown-top_vision");
  const sideDisplay_top = document.getElementById("sideTop_fls");
  const sideDisplay_Mid = document.getElementById("sideMid_fls");
  const sideDisplay_Ad = document.getElementById("sideAd_fls");
  const sideDisplay_Sp = document.getElementById("sideSp_fls");
  const sideDisplay_Jg = document.getElementById("sideJg_fls");
  const img_top = document.getElementById("image-top");

  const countdownButton_jg = document.getElementById("countdown-jg");
  const countdownDisplay_jg = document.getElementById("countdown-jg_vision");
  const img_jg = document.getElementById("image-jg");

  const countdownButton_ad = document.getElementById("countdown-ad");
  const countdownDisplay_ad = document.getElementById("countdown-ad_vision");
  const img_ad = document.getElementById("image-ad");

  const countdownButton_mid = document.getElementById("countdown-mid");
  const countdownDisplay_mid = document.getElementById("countdown-mid_vision");
  const img_mid = document.getElementById("image-mid");

  const countdownButton_sp = document.getElementById("countdown-sp");
  const countdownDisplay_sp = document.getElementById("countdown-sp_vision");
  const img_sp = document.getElementById("image-sp");

  //setting
  let reqAnim_top, reqAnim_jg, reqAnim_mid, reqAnim_ad, reqAnim_sp;
  var Config = {
    IsCouting_Top: false,
    IsCouting_Jg: false,
    IsCouting_Mid: false,
    IsCouting_Ad: false,
    IsCouting_Sp: false,
  };

  function startCountdown(
    nameReq,
    count,
    element,
    displayElement,
    imgElement,
    side
  ) {
    let startTime = Date.now();

    durationInMinutes = 5;
    Config[count] = !Config[count];

    function updateCountdown() {
      let currentTime = Date.now();
      imgElement.style.opacity = 0.5;
      element.opacity = 0.5;
      let elapsedTime = (currentTime - startTime) / 1000; // Chuyển đổi sang giây
      let remainingTime = durationInMinutes * 60 - Math.floor(elapsedTime);

      let minutes = Math.floor(remainingTime / 60);
      let seconds = remainingTime % 60;

      timeString = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      displayElement.innerHTML = timeString;
      side.innerHTML = timeString;

      if (remainingTime > 0) {
        nameReq = requestAnimationFrame(updateCountdown); // Cập nhật lại mỗi frame
      } else {
        Config[count] = !Config[count];
        remainingTime = 0;
        displayElement.innerHTML = "";
        side.innerHTML = 0;
        element.opacity = 1;
        imgElement.style.opacity = 1;
      }
    }
    if (Config[count]) {
      updateCountdown();
    } else {
      window.cancelAnimationFrame(nameReq);
      displayElement.innerHTML = "";
      side.innerHTML = "0";
      element.opacity = 1;
      imgElement.style.opacity = 1;
    }
  }

  // Top

  countdownButton_top.addEventListener("click", function () {
    startCountdown(
      reqAnim_top,
      "IsCouting_Top",
      countdownButton_top,
      countdownDisplay_top,
      img_top,
      sideTop_fls
    );
  });

  // Jungle
  countdownButton_jg.addEventListener("click", function () {
    startCountdown(
      reqAnim_jg,
      "IsCouting_Jg",
      countdownButton_jg,
      countdownDisplay_jg,
      img_jg,
      sideDisplay_Jg
    );
  });
  // Mid
  countdownButton_mid.addEventListener("click", function () {
    startCountdown(
      reqAnim_mid,
      "IsCouting_Mid",
      countdownButton_mid,
      countdownDisplay_mid,
      img_mid,
      sideDisplay_Mid
    );
  });

  // Sp
  countdownButton_sp.addEventListener("click", function () {
    startCountdown(
      reqAnim_sp,
      "IsCouting_Sp",
      countdownButton_sp,
      countdownDisplay_sp,
      img_sp,
      sideDisplay_Sp
    );
  });

  // Ad
  countdownButton_ad.addEventListener("click", function () {
    startCountdown(
      reqAnim_ad,
      "IsCouting_Ad",
      countdownButton_ad,
      countdownDisplay_ad,
      img_ad,
      sideDisplay_Ad
    );
  });

  document.addEventListener("keydown", function (event) {
    // Kiểm tra nếu phím bấm là F1 (keyCode 112) hoặc (key === "F1" cho phiên bản hiện đại hơn)
    switch (event.key) {
      case "4":
        startCountdown(
          reqAnim_top,
          "IsCouting_Top",
          countdownButton_top,
          countdownDisplay_top,
          img_top,
          sideTop_fls
        );
        break;
      case "6":
        startCountdown(
          reqAnim_jg,
          "IsCouting_Jg",
          countdownButton_jg,
          countdownDisplay_jg,
          img_jg,
          sideDisplay_Jg
        );
        break;

      case "5":
        startCountdown(
          reqAnim_mid,
          "IsCouting_Mid",
          countdownButton_mid,
          countdownDisplay_mid,
          img_mid,
          sideDisplay_Mid
        );
        break;

      case "2":
        startCountdown(
          reqAnim_ad,
          "IsCouting_Ad",
          countdownButton_ad,
          countdownDisplay_ad,
          img_ad,
          sideDisplay_Ad
        );
        break;

      case "3":
        startCountdown(
          reqAnim_sp,
          "IsCouting_Sp",
          countdownButton_sp,
          countdownDisplay_sp,
          img_sp,
          sideDisplay_Sp
        );
        break;
    }
  });
}
