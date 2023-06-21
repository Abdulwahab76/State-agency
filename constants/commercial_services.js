const servicesData = [
  {
    title: "Commercial Heating",
    content: "In need of commercial heating services in Calgary? STAT Climate Control Solutions is here to help. We offer a wide range...",
    img: './Media/heating.png',
  },
  {
    img: './Media/cooling.png',
    title: "Commercial Cooling",
    content: "Keep your commercial building cool and comfortable with expert air conditioning  services from STAT Climate.", img: './Media/cooling.png',

  },
  {
    img: './Media/maintaine.png',
    title: "Building Maintenance",
    content: "Keep your commercial building cool and comfortable with expert air conditioning  services from STAT Climate."
  },
  {
    img: './Media/data.png',
    title: "Data Center Service",
    content: "Keep your commercial building cool and comfortable with expert air conditioning  services from STAT Climate."
  },
  {
    img: './Media/refrigeration.png',
    title: "Commercial Refrigeration",
    content: "Keep your commercial refrigeration  running smoothly with  STAT  Climate Control Solutions."
  },
  {
    img: './Media/electrical.png',
    title: "Electrical",
    content: "Keep your electrical systems running smoothly with STAT Climate Control Solutions. We offer a complete."
  },

  {
    img: './Media/plumb.png',
    title: "Plumbing",
    content: "Keep your electrical systems running smoothly with STAT Climate Control Solutions. We offer a complete."
  },
  {
    img: './Media/electrical.png',
    title: "HVAC Control",
    content: "Keep your electrical systems running smoothly with STAT Climate Control Solutions. We offer a complete."
  }
];

let commercialContainer = document.getElementById('commercialContainer')
let activeCard = null;

function handleClick(clickedCard) {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    let image_invert = card.childNodes[1].firstChild.nextElementSibling
    if (card === clickedCard) {
      card.classList.toggle('active');
      card.childNodes[1].classList.toggle('active');
      image_invert.classList.toggle('active');

    } else {
      image_invert.classList.remove('active');
      card.childNodes[1].classList.remove('active');
      card.classList.remove('active');
    }
  });

}
commercialContainer.innerHTML = servicesData.map(
  (card, ind) =>
    `<div class="card" onclick='handleClick(this)'>
            <div class="card_image" >
              <img src="${card.img}" class='${card.img == './Media/plumb.png' ? 'invert' : 'invert-0'} invert_img ' alt="" />
            </div>
            <h2 class="text-2xl font-bold">${card.title}</h2>
            <p class="text-light-paragraph">
         ${card.content}
            </p>

            <button
              class="whitespace-nowrap flex items-center h-14 rounded-full font-medium text-1xl text-light-primary"
            >
              Learn more
              <div
                class="w-10 h-10 bg-white/50 flex items-center justify-center rounded-full p-3"
              >
                <img src="./icon/arrow.svg" class="fill-cyan-950" alt="" />
              </div>
            </button>
          </div >`
).join('');
console.log(servicesData);
