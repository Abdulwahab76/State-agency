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
        <p class="text-lg text-gray-400 font-medium serial">0${ind + 1}</p>

          <div class="flex gap-5 flex-col basis-full">
            <p class="text-2xl font-bold question" >
              ${faq.question}
            </p>
            <p class="leading-relaxed answer">
             ${faq.answer}
            </p>
          </div>
          <span
            class="ml-auto  w-[40px] h-[30px] toggle-button  cursor-pointer bg-gray-200 rounded-full flex justify-center items-center"
          >
            <p class="font-extrabold">+</p>
          </span>
        </div>
      </div>`
).join("");

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const toggleButtons = document.querySelectorAll(".toggle-button");
const serial_active = document.querySelectorAll(".serial");

questions.forEach((question, index) => {
    const answer = answers[index];
    const toggleButton = toggleButtons[index];
    const toggleSerial = serial_active[index]

    toggleButton.addEventListener("click", function () {
        const isActive = question.classList.contains("active-question");

        // Hide all answers and remove active class from all questions
        answers.forEach((ans) => {
            ans.classList.remove("show");
        });
        questions.forEach((ques) => {
            ques.classList.remove("active-question");
        });
        toggleButtons.forEach((button) => {
            button.innerHTML = "+";
            button.classList.remove("active");
        });

        // Toggle the clicked question's active state and show/hide the answer
        if (!isActive) {
            answer.classList.add("show");
            question.classList.add("active-question");
            toggleButton.innerHTML = "-";
            toggleButton.classList.add("active");
            toggleSerial.classList.add("serial-active");
        }
    });
});
