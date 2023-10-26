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

  function performance_trick() {
    if (sounds.empty) return sounds.empty.play();
    sounds.empty = new Howl({
      src: [
        "/sounds/loops/empty_loop_for_js_performance.ogg",
        "/sounds/loops/empty_loop_for_js_performance.wav",
      ],
      volume: 0.5,
      autoplay: true,
      loop: true,
    });
  }

  function secondsToMinutesAndSeconds(seconds) {
    // Tính phút và giây
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    var timeString;
    if (seconds < 60) {
      timeString = remainingSeconds;
    } else {
      // Định dạng chuỗi phút và giây
      timeString = minutes + ":" + remainingSeconds;
    }

    return timeString;
  }

  function startCountdown(element, displayElement, imgElement, side) {
    let startTime = Date.now();
    durationInMinutes = 5;

    function updateCountdown() {
      let currentTime = Date.now();
      imgElement.style.opacity = 0.5;
      element.disabled = true;
      let elapsedTime = (currentTime - startTime) / 1000; // Chuyển đổi sang giây
      let remainingTime = durationInMinutes * 60 - Math.floor(elapsedTime);

      let minutes = Math.floor(remainingTime / 60);
      let seconds = remainingTime % 60;

      timeString = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      displayElement.innerHTML = timeString;
      side.innerHTML = timeString;

      console.log(remainingTime);
      if (remainingTime > 0) {
        requestAnimationFrame(updateCountdown); // Cập nhật lại mỗi frame
      } else {
        remainingTime = 0;
        displayElement.innerHTML = "";
        side.innerHTML = 0;
        element.disabled = false;
        imgElement.style.opacity = 1;
      }
    }

    updateCountdown();
  }

  // function startCountdown(element, displayElement, imgElement, side) {
  //   imgElement.style.opacity = 0.5;
  //   element.disabled = true;
  //   let time = 300; // 5 phút
  //   const countdownInterval = setInterval(function () {
  //     displayElement.innerHTML = secondsToMinutesAndSeconds(time);
  //     side.innerHTML = secondsToMinutesAndSeconds(time);

  //     if (time === 0) {
  //       displayElement.innerHTML = "";
  //       side.innerHTML = 0;
  //       element.disabled = false;
  //       imgElement.style.opacity = 1;
  //       clearInterval(countdownInterval);
  //     }
  //     time--;
  //     performance_trick();
  //   }, 1000); // Cứ mỗi giây cập nhật thời gian
  // }

  // Top
  countdownButton_top.addEventListener("click", function () {
    startCountdown(
      countdownButton_top,
      countdownDisplay_top,
      img_top,
      sideTop_fls
    );
  });

  // Jungle
  countdownButton_jg.addEventListener("click", function () {
    startCountdown(
      countdownButton_jg,
      countdownDisplay_jg,
      img_jg,
      sideDisplay_Jg
    );
  });
  // Mid
  countdownButton_mid.addEventListener("click", function () {
    startCountdown(
      countdownButton_mid,
      countdownDisplay_mid,
      img_mid,
      sideDisplay_Mid
    );
  });

  // Sp
  countdownButton_sp.addEventListener("click", function () {
    startCountdown(
      countdownButton_sp,
      countdownDisplay_sp,
      img_sp,
      sideDisplay_Sp
    );
  });

  // Ad
  countdownButton_ad.addEventListener("click", function () {
    startCountdown(
      countdownButton_ad,
      countdownDisplay_ad,
      img_ad,
      sideDisplay_Ad
    );
  });
}
