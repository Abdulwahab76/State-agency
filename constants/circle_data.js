const circleData = [
    { img: "./Media/companies.png", title: "Telecommunication Companies" },
    { img: "./Media/apartment.png", title: "Apartment Buildings / Condos" },
    { img: "./Media/data-center.png", title: "Data Centres" },
    { img: "./Media/shopping.png", title: "Shopping Malls" },
    { img: "./Media/computer.png", title: "Computer Rooms" },
    { img: "./Media/aviation.png", title: "Aviation / Industrial / Heating Plants" },
    { img: "./Media/property.png", title: "Property  Management Firms" },
    { img: "./Media/process.png", title: "Process Centres" },
];

const columns = [document.getElementById("column1"), document.getElementById("column2"), document.getElementById("column3"), document.getElementById("column4")];



circleData.forEach((card, index) => {
    const column = columns[index % columns.length];
    column.innerHTML += `
      <div class="h-52 w-52 bg-gray-200 flex-col gap-3  flex justify-center items-center rounded-full">
        <img src="${card.img}" class='h-10 w-10 object-center' alt="" />
        <p class="text-light-paragraph font-bold  text-center">${card.title}</p>
      </div>
    `;
});



console.log(columns, 'sss');
// circleContainer.innerHTML = servicesData.map(

//     (card, ind) =>
//         `  <div class="h-48 w-48 bg-gray-200 flex-col gap-3 flex justify-center items-center rounded-full">
//       <img src="${card.img}" alt="" />
//       <p class="text-light-paragraph font-bold">${card.title}</p>
//     </div>`
// ).join('');
// console.log(servicesData);