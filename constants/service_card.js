const cardsData = [
    {
        image: "./Media/setting.png",
        title: "Installation",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas purus ut tincidunt accumsan.",
    },
    {
        image: "./Media/setting.png",
        title: "Repair",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas purus ut tincidunt accumsan.",
    },
    {
        image: "./Media/setting.png",
        title: "Services",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas purus ut tincidunt accumsan.",
    },
];

const cardsContainer = document.getElementById("cardsContainer");

cardsContainer.innerHTML = cardsData.map(
    (card) =>
        `<div class="card">
    <div class="w-20 h-20 shadow-lg p-5 rounded-full">
     <img src="${card.image}" alt="" />
    </div>
    <h2 class="text-3xl font-bold">${card.title}</h2>
    <p class="text-light-paragraph">
    ${card.description}
      </p>
    </div>`
);
