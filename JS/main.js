document.getElementById("button1").onclick = function button1() {
  setTimeout(setVideo1, 3500);
  setTimeout(setFade1, 3500);
  document.getElementById("transition").play();
  document.getElementById("video").pause();
  document.getElementById("transition").style.opacity = "100";
  document.getElementById("transition").classList.add("fade-in");
  document.getElementById("transition").classList.remove("fade-out");
  document.getElementById("video").classList.remove("hidden");
  document.getElementById("introGif").style.display = "none";
  document.getElementById("button1").classList.add("active");
  document.getElementById("button2").classList.remove("active");
  document.getElementById("button3").classList.remove("active");
};

function setVideo1() {
  document.getElementById("video").src = "./img/Schieten_2.mp4";
  document.getElementById("video").classList.add("fade-in");
  setTimeout(playVideo1, 500);
}

function playVideo1() {
  document.getElementById("video").play();
}

function setFade1() {
  document.getElementById("transition").classList.add("fade-out");
  document.getElementById("transition").style.opacity = "0";
}

document.getElementById("button2").onclick = function button2() {
  setTimeout(setVideo2, 3500);
  setTimeout(setFade2, 3500);
  document.getElementById("transition").play();
  document.getElementById("video").pause();
  document.getElementById("transition").style.opacity = "100";
  document.getElementById("transition").classList.add("fade-in");
  document.getElementById("transition").classList.remove("fade-out");
  document.getElementById("introGif").style.display = "none";
  document.getElementById("video").classList.remove("hidden");
  document.getElementById("button2").classList.add("active");
  document.getElementById("button1").classList.remove("active");
  document.getElementById("button3").classList.remove("active");
};

function setVideo2() {
  document.getElementById("video").src = "./img/Dynamiet_2.mp4";
  document.getElementById("video").classList.add("fade-in");
  setTimeout(playVideo2, 500);
}

function playVideo2() {
  document.getElementById("video").play();
}

function setFade2() {
  document.getElementById("transition").style.opacity = "0";
  document.getElementById("transition").classList.add("fade-out");
}

document.getElementById("button3").onclick = function button3() {
  setTimeout(setVideo3, 3500);
  setTimeout(setFade3, 3500);
  document.getElementById("transition").play();
  document.getElementById("video").pause();
  document.getElementById("transition").style.opacity = "100";
  document.getElementById("transition").classList.add("fade-in");
  document.getElementById("transition").classList.remove("fade-out");
  document.getElementById("video").classList.remove("hidden");
  document.getElementById("introGif").style.display = "none";
  document.getElementById("button3").classList.add("active");
  document.getElementById("button1").classList.remove("active");
  document.getElementById("button2").classList.remove("active");
};

function setVideo3() {
  document.getElementById("video").src = "./img/Roken_2.mp4";
  document.getElementById("video").classList.add("fade-in");
  setTimeout(playVideo3, 500);
}

function playVideo3() {
  document.getElementById("video").play();
}

function setFade3() {
  document.getElementById("transition").style.opacity = "0";
  document.getElementById("transition").classList.add("fade-out");
}
