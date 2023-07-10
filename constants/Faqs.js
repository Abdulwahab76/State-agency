const Faqs = [
    {
        question: "Do you offer free quotes?",
        answer: "yes",
    },
    {
        question: "Do you work on commercial equipment and refrigeration?",
        answer: "Our hourly service charge starts from $135; we also offer reduced rates for those customers that have regularly scheduled maintenance agreements with us.",
    },
    {
        question: "What are your rates?",
        answer:
            "Our hourly service charge starts from $135; we also offer reduced rates for those customers that have regularly scheduled maintenance agreements with us.",
    },
    {
        question: "Are there mileage or truck charges added?",
        answer:
            "Our hourly service charge starts from $135; we also offer reduced rates for those customers that have regularly scheduled maintenance agreements with us.",
    },
    {
        question: "How quickly can you come?",
        answer:
            "Our hourly service charge starts from $135; we also offer reduced rates for those customers that have regularly scheduled maintenance agreements with us.",
    },
    {
        question: "Can you perform warranty repairs for my furnace?",
        answer:
            "Our hourly service charge starts from $135; we also offer reduced rates for those customers that have regularly scheduled maintenance agreements with us.",
    },
    {
        question: "Do you provide backflow testing?",
        answer:
            "Our hourly service charge starts from $135; we also offer reduced rates for those customers that have regularly scheduled maintenance agreements with us.",
    },
    {
        question: "Do you provide backflow testing?",
        answer:
            "Our hourly service charge starts from $135; we also offer reduced rates for those customers that have regularly scheduled maintenance agreements with us.",
    },
];

let FaqsContainer = document.getElementById("faqsContainer");
FaqsContainer.innerHTML = Faqs.map(
    (faq, ind) =>
        `<div class="border-b border-gray-200 w-full faq">
        <div class="flex w-full p-8 gap-x-10">
        <p class="text-lg text-gray-400 font-medium">01</p>

          <div class="flex gap-5 flex-col basis-full">
            <p class="text-2xl font-bold ">
              ${faq.question}
            </p>
            <p class="leading-relaxed answer">
             ${faq.answer}
            </p>
          </div>
          <span
            class="ml-auto  w-[40px] h-[30px] question  cursor-pointer bg-gray-200 rounded-full flex justify-center items-center"
          >
            <p class="font-extrabold">+</p>
          </span>
        </div>
      </div>`
).join("");

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((question, index) => {
    question.addEventListener("click", function (e) {
        const answer = answers[index];
        const isHidden = !answer.classList.contains("show");
        console.log(e.target, 'hidden');
        // Hide all answers
        answers.forEach((ans) => {
            ans.classList.remove("show");
            question.classList.remove("active");
            e.target.innerHTML = '+'

        });

        // Show the clicked answer
        if (isHidden) {
            answer.classList.add("show");
            question.classList.add('active')
            e.target.innerHTML = '-'
        }
    });
});
