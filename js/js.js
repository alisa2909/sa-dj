document.addEventListener("DOMContentLoaded", function(){ 
    
const colors = ['#00AEEF', '#EC008C', '#FFF200', '#3E3E3E'];
const colors2 = ['#EC008C', '#00AEEF', '#FFF200'];

function firstAnimation() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    let colorIndex = 0;
    setInterval(() => {
      box.style.backgroundColor = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length; 
    }, 1000); 
  });
};

firstAnimation();



function secondAnimation() {
  const circles = document.querySelectorAll('.circle');
  circles.forEach(circle => {
    let colorIndex2 = 0;
    setInterval(() => {
      circle.style.backgroundColor = colors[colorIndex2];
      colorIndex2 = (colorIndex2 + 1) % colors.length; 
    }, 350); 
  });
}

secondAnimation();



const krugs = document.querySelectorAll('.krug');
const colors3 = ['#EC008C', '#00AEEF', '#FFF200'];

setInterval(() => {
    krugs.forEach(krug => {
        const randomColor = colors3[Math.floor(Math.random() * colors.length)];
        krug.style.backgroundColor = randomColor;
    });
}, 200);

// звук

const sliders = document.querySelectorAll('.slider');   
    
sliders.forEach(slider => {   
const thumb = slider.querySelector('.thumb');  
let shiftX;   

function onThumbDown(event) {  
    event.preventDefault(); 
    shiftX = event.clientX - thumb.getBoundingClientRect().left;  

    thumb.setPointerCapture(event.pointerId); 
    thumb.onpointermove = onThumbMove;  
}

function onThumbMove(event) {   
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;  
    if (newLeft < 0) { 
    newLeft = 0;}

    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) { newLeft = rightEdge;}
    thumb.style.left = newLeft + 'px';  
}

thumb.onpointerdown = onThumbDown; 
thumb.ondragstart = () => false;  
});
});


// 2 часть кода для добавления звука

//zvuk-1
document.addEventListener("DOMContentLoaded", function() {
let clickSound = document.getElementById("clickSound");  
let myDivs = document.querySelectorAll(".myDiv");  

myDivs.forEach(function(myDiv) {  
myDiv.addEventListener("click", function() {
    clickSound.play(); 
  });
});
});

//zvuk-2
document.addEventListener("DOMContentLoaded", function() {
  let MYA = document.getElementById("MYA");  
  let myDivvvik = document.querySelectorAll(".myDivvvik");  
  
  myDivvvik.forEach(function(mmmm) {  
  mmmm.addEventListener("click", function() {
      MYA.play(); 
  });
});
});

//zvuk-3
document.addEventListener("DOMContentLoaded", function() {
  let Nit = document.getElementById("Nit");  
  let myDivik = document.querySelectorAll(".myDivik");  
  
  myDivik.forEach(function(nnnn) {  
  nnnn.addEventListener("click", function() {
      Nit.play(); // Воспроизводим звук
  });
});
});

//zvuk-4
document.addEventListener("DOMContentLoaded", function() {
  let Pop = document.getElementById("Pop");  
  let myDivok = document.querySelectorAll(".myDivok");  
  
  myDivok.forEach(function(bbbb) {  
  bbbb.addEventListener("click", function() {
      Pop.play(); 
  });
});
});

//zvuk-5
document.addEventListener("DOMContentLoaded", function() {
  let Tu = document.getElementById("Tu");  
  let Divmy = document.querySelectorAll(".Divmy");  
  
  Divmy.forEach(function(tttt) {  
  tttt.addEventListener("click", function() {
      Tu.play(); 
  });
});
});


//инструменты_звук

//baraban
document.addEventListener("DOMContentLoaded", function() {
  let rab = document.getElementById("rab");  
  let bar = document.querySelectorAll(".bar");  
  
  bar.forEach(function(dddd) {  
  dddd.addEventListener("click", function() {
      rab.play(); 
    });
  });
  });

//piano
document.addEventListener("DOMContentLoaded", function() {
let aip = document.getElementById("aip");  
let pia = document.querySelectorAll(".pia");  
    
pia.forEach(function(xxxx) {  
xxxx.addEventListener("click", function() {
  aip.play(); 
});
});
});

//gitara
document.addEventListener("DOMContentLoaded", function() {
let artig = document.getElementById("artig");  
let gitra = document.querySelectorAll(".gitra");  
gitra.forEach(function(zzzz) { 
zzzz.addEventListener("click", function() {
  artig.play(); 
});
});
});

//truba
document.addEventListener("DOMContentLoaded", function() {
let burt = document.getElementById("burt");  
let trub = document.querySelectorAll(".trub");  
    
trub.forEach(function(ssss) {  
ssss.addEventListener("click", function() {
  burt.play(); 
});
});
});




//эффекты
document.addEventListener("DOMContentLoaded", function(){ 
const shariks = document.querySelectorAll('.sharik');
const colors4 = ['#EC008C', '#00AEEF', '#FFF200'];

setInterval(() => {
  shariks.forEach(sharik => {
        const randomColor = colors4[Math.floor(Math.random() * colors4.length)];
        sharik.style.backgroundColor = randomColor;
    });
}, 200);
});

document.addEventListener("DOMContentLoaded", function(){ 
  const shars = document.querySelectorAll('.shar');
  const colors5 = ['#EC008C', '#00AEEF', '#FFF200'];
  
  setInterval(() => {
    shars.forEach(shar => {
          const randomColor = colors5[Math.floor(Math.random() * colors5.length)];
          shar.style.backgroundColor = randomColor;
      });
  }, 200);
  });


document.addEventListener("DOMContentLoaded", function() {
  let gogo = document.getElementById("gogo");  
  let knop = document.querySelectorAll(".knop");  
  
  knop.forEach(function(aaaa) {  
  aaaa.addEventListener("click", function() {
      gogo.play();
    });
  });
  });

document.addEventListener("DOMContentLoaded", function() {
  let tara = document.getElementById("tara");  
  let knopi = document.querySelectorAll(".knopi");  
  
  knopi.forEach(function(ffff) {  
  ffff.addEventListener("click", function() {
    tara.play();
    });
  });
  });

  document.addEventListener("DOMContentLoaded", function() {
    let pam = document.getElementById("pam");  
    let knopik = document.querySelectorAll(".knopik");  
    
    knopik.forEach(function(qqqq) {  
    qqqq.addEventListener("click", function() {
      pam.play(); 
      });
    });
    });

document.addEventListener("DOMContentLoaded", function() {
  let lol = document.getElementById("lol");  
  let la = document.querySelectorAll(".la");  
  
  la.forEach(function(ssss) {  
  ssss.addEventListener("click", function() {
      lol.play(); 
    });
  });
  });

document.addEventListener("DOMContentLoaded", function() {
  let boom = document.getElementById("boom");  
  let lala = document.querySelectorAll(".lala");  
  
  lala.forEach(function(vvvv) {  
  vvvv.addEventListener("click", function() {
      boom.play(); 
    });
  });
  });

  document.addEventListener("DOMContentLoaded", function() {
    let kek = document.getElementById("kek"); 
    let lalala = document.querySelectorAll(".lalala");  
    
    lalala.forEach(function(uuuu) {  
    uuuu.addEventListener("click", function() {
        kek.play(); 
      });
    });
    });

  document.addEventListener("DOMContentLoaded", function() {
    let oi = document.getElementById("oi");  
    let lalalala = document.querySelectorAll(".lalalala");  
    
    lalalala.forEach(function(eeee) {  
    eeee.addEventListener("click", function() {
        oi.play(); 
      });
    });
    });
  
  