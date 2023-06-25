let reviewProfileData = [
    {
        title: 'Gregory Davis ',
        subTile: '(Professionalism, Punctuality)',
        rating: 5,
        content: 'STAT Climate control has provided  excellent service to my business and facilities for over 8 years. They are efficient, professional and highly skilled. They have earned our trust and are my number one recommendation for HVAC in Calgary.',
        img: './Media/profileIcon.png'
    },
    {
        title: 'Ralph Birchard',
        subTile: '(Punctuality, Quality)',
        rating: 5,
        content: 'We purchased a home air conditioner from a small company that closed shop and was unable and unwilling to compensate us for a defective coil.   Sean of Stat stepped up, sent Greg over and got us back on track.',
        img: './Media/profileIcon.png'
    },
    {
        title: 'Gregory Davis ',
        subTile: '(Professionalism)',
        rating: 5,
        content: 'I was so impressed at how prompt the technician was to show up at my door as stated, fix my heated flooring issue and everything is working perfectly. It was a pleasure to have found such a great dependable',
        img: './Media/profileIcon.png'
    },
    {
        title: 'Gregory Davis ',
        subTile: '(Professionalism)',
        rating: 5,
        content: 'I was so impressed at how prompt the technician was to show up at my door as stated, fix my heated flooring issue and everything is working perfectly. It was a pleasure to have found such a great dependable',
        img: './Media/profileIcon.png'
    },

]
let reviewContainer = document.getElementById('reviewContainer')


reviewContainer.innerHTML = reviewProfileData.map(
    (card, ind) =>
        `<div class="swiper-slide">
        <div class="card h-full" onclick="handleClick(this)">
          <div class="card_image w-full justify-between">
            <div class="flex gap-3">
              <img
                src="${card.img}"
                class="rounded-full h-14 w-14"
                alt=""
              />
              <div class="flex flex-col">
                <h2 class="text-xl font-bold">${card.title}</h2>
                <p class="text-light-paragraph text-sm">
                  ${card.subTile}
                </p>
              </div>
            </div>
            <img src="./Media/googeLogo.png" class="h-7 w-7" alt="" />
          </div>

          <div>
            <img
              src="./Media/fiveStar.png"
              class="h-6 w-28 object-contain"
              alt=""
            />
          </div>

          <p class="text-light-paragraph font-medium w-11/12">
          ${card.content}
          </p>
        </div>
      </div>`
).join('');