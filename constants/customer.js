const testimonialData = [{
    name: "Paul A",
    position: "Senior Critical Infrastructure Operator, Shaw",
    quote:
        "Found STAT Climate Control Solutions when I was looking for a partner company that could further my goal of providing Shaw with energy efficient and reliable cooling for Shaw’s electronic equipment. 'HVAC YOU CAN TRUST' became the way Shaw and STAT Climate worked together."
}, {
    name: "Paul B",
    position: "Senior Critical Infrastructure Operator, Shaw",
    quote:
        "Found STAT Climate Control Solutions when I was looking for a partner company that could further my goal of providing Shaw with energy efficient and reliable cooling for Shaw’s electronic equipment. 'HVAC YOU CAN TRUST' became the way Shaw and STAT Climate worked together."
}];
const customer_card = document.getElementById("customer_card");





customer_card.innerHTML = testimonialData.map(
    (card) =>
        `<div class="flex flex-col shadow-xl rounded-lg">
        <div class="flex items-center">
          <div class="p-7">
            <!-- stars -->
            <div class="flex py-3">
              <img src="./icon/start.svg" alt="" />
              <img src="./icon/start.svg" alt="" />
              <img src="./icon/start.svg" alt="" />
            </div>
            <!-- stars -->
            <h2 class="text-3xl font-bold">${card.name}</h2>
            <p>${card.position}</p>
          </div>
          <img
            src="./Media/quotes.png"
            class="ml-auto mr-2 w-20 h-20 object-contain"
            alt=""
          />
        </div>

        <div class="flex flex-col">
          <hr />
          <p class="p-7">
            “${card.quote}”
          </p>
        </div>
      </div>`
).join(' ');
