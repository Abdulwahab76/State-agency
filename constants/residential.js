const residentialData = [{
  title: 'Furnace Installation',
  content: 'Lorem ipsum dolor sit amet  consectetur adipiscing eliti sed dictum purus..',
  img: './Media/furance.png',
}, {
  title: 'Furnace Repairs',
  content: 'Lorem ipsum dolor sit amet  consectetur adipiscing eliti sed dictum purus..',
  img: './Media/repairs.png',
}, {
  title: 'Air Conditioning Installation',
  content: 'Lorem ipsum dolor sit amet  consectetur adipiscing eliti sed dictum purus..',
  img: './Media/condition.png',
}, {
  title: 'Air Conditioning Repairs',
  content: 'Lorem ipsum dolor sit amet  consectetur adipiscing eliti sed dictum purus..',
  img: './Media/condition1.png',
}]
let residentialContainer = document.getElementById('residential')
console.log(residentialContainer, '---res');

residentialContainer.innerHTML = residentialData.map(
  (card, ind) =>
    `<div class="card h-full" onclick='handleClick(this)'>
              <div class="card_image" >
                <img src="${card.img}" class='${card.img == './Media/condition.png' ? 'invert' : 'invert-0'} invert_img ' alt="" />
              </div>
              <h2 class="text-2xl font-medium">${card.title}</h2>
              <p class="text-light-paragraph grow">
           ${card.content}
              </p>
  
              <button
                class="mt-auto flex items-center h-14 rounded-full font-medium text-1xl text-light-primary"
              >
                Learn more
                <div
                  class="w-10 h-10 bg-white/50 flex items-center justify-center rounded-full p-3"
                >
                  <img src="./icon/arrow.svg" class="fill_red " alt="" />
                  
                </div>
              </button>
            </div>`
).join('');