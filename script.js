const programs = [
  {
    id: 1,
    title: "Sporcu",
    img: "./images/sporcu.jpg",
    desc: `SPORCU BESLENMESİ`,
  },
  {
    id: 2,
    title: "Çölyak",
    img: "./images/çölyakjpg.jpg",
    desc: `ÇÖLYAK BESLENMESİ`,
  },
  {
    id: 3,
    title: "Kilo Verme",
    img: "./images/liko-verme.jpg",
    desc: `KİLO VERME`,
  },
  {
    id: 4,
    title: "Gebelikte",
    img: "./images/emzirenjpg.jpg",
    desc: `GEBELİKTE BESLENME`,
  },
  {
    id: 5,
    title: "Diyabet",
    img: "./images/diyabet.jpg",
    desc: "DİYABETİK BESLENME",
  },

  {
    id: 6,
    title: "falan",
    img: "./images/kiloalma.jpg",
    desc: "KİLO ALMA",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displayProgram(programs);
});

const programElement = document.querySelector(".program-container");

function displayProgram(prog) {
  let programContent = "";

  // map ile ?
  prog.forEach((item) => {
    programContent += `<div class='progbox'> 
      <img src=${item.img} alt="menu item" class="photo"/>
      <p id='prog-info'>${item.desc}</p>
      
    </div>`;
  });
  programElement.innerHTML = programContent;
}
