reloadtime = 0;
character = document.getElementById("character");
gun = document.getElementById("gun");
bullet = document.getElementById("bullet");
playerhealth = document.getElementById("playerhealth");
gun.style.transform = "scaleX(1)";
function move(event) {
  if (event.keyCode == "39" || event.keyCode == "68" && gun.offsetLeft < window.innerWidth - gun.offsetWidth) {
    gun.style.left = character.offsetLeft + character.offsetWidth + 'px';
    character.style.transform = "scaleX(1)";
    gun.style.transform = "scaleX(1)";
    $("#character").animate({
      left: "+=100vw"
    }, 3000);
    $("#gun").animate({
      left: "+=100vw"
    }, 3000);
    $("#playerhealth").animate({
      left: "+=100vw"
    }, 3000)
  } else if (event.keyCode == "37" || event.keyCode == "65" && gun.offsetLeft > 0) {
    gun.style.left = character.offsetLeft - gun.offsetWidth + 'px';
    character.style.transform = "scaleX(-1)";
    gun.style.transform = "scaleX(-1)";
    $("#character").animate({
      left: "-=100vw"
    }, 3000);
    $("#gun").animate({
      left: "-=100vw"
    }, 3000);
    $("#playerhealth").animate({
      left: "-=100vw"
    }, 3000)
  } else if (event.keyCode == "38" || event.keyCode == "87") {
    character.classList.add("jump");
    gun.classList.add("gunjump");
    playerhealth.classList.add("healthjump");
    setTimeout(removejump, 500);
    function removejump() {
      character.classList.remove("jump");
      gun.classList.remove("gunjump");
      playerhealth.classList.remove("healthjump");
    }
  } else if (event.keyCode == "49") {
    gun.setAttribute("src", "https://rb.gy/lve6ne");
  } else if (event.keyCode == "50") {
    gun.setAttribute("src", "https://rb.gy/a0asev");
  } else if (event.keyCode == "51") {
    gun.setAttribute("src", "https://rb.gy/vt6xqb");
  }
}

setInterval(function() {
  if (gun.offsetLeft < 0) {
    $(gun).stop(true);
    $(character).stop(true);
    $(playerhealth).stop(true);
    gun.style.left = "0vw";
  }
  if (gun.offsetLeft > window.innerWidth - gun.offsetWidth) {
    $(gun).stop(true);
    $(character).stop(true);
    $(playerhealth).stop(true);
    gun.style.left = window.innerWidth - gun.offsetWidth + 'px';
  }
  if (bullet.offsetLeft == 0) {
    bullet.style.left = character.offsetLeft + window.innerHeight/20 + 'px';
    bullet.style.display = "none";
  }
  if (bullet.offsetLeft + bullet.offsetWidth == window.innerWidth) {
    bullet.style.left = character.offsetLeft + window.innerHeight/20 + 'px';
    bullet.style.display = "none";
  }
}, 10)

function stopmove(event) {
  if (event.keyCode == "38" || event.keyCode == "49" || event.keyCode == "50" || event.keyCode == "87" || event.keyCode == "51") {
    return;
  } else {
    $(gun).stop(true);
    $(character).stop(true);
    $(playerhealth).stop(true);
  }
}

function attack() {
  if (gun.getAttribute("src") == "https://rb.gy/lve6ne") {
    if (reloadtime == 1) {
      return;
    }
    if (gun.style.transform == "scaleX(1)") {
      bullet.style.display = "block";
      reloadtime = 1;
      bullet.style.transform = "scaleX(1)";
      bullet.style.left = gun.offsetLeft + gun.offsetWidth + 'px';
      bullet.style.top = gun.offsetTop - window.innerHeight/100 + 'px';
      $("#bullet").animate({
        left: window.innerWidth - bullet.offsetWidth + 'px'
      }, (window.innerWidth - (character.offsetLeft + character.offsetWidth))/2);
      setTimeout(reloadreset, 1000);
    } else {
      bullet.style.display = "block";
      reloadtime = 1;
      bullet.style.transform = "scaleX(-1)";
      bullet.style.left = gun.offsetLeft - bullet.offsetWidth + 'px';
      bullet.style.top = gun.offsetTop - window.innerHeight/100 + 'px';
      $("#bullet").animate({
        left: "0vw"
      }, bullet.offsetLeft/2);
      setTimeout(reloadreset, 1000);
    }
  }
}

function reloadreset() {
  reloadtime = 0;
}
