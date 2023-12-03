const faqs = document.querySelectorAll(".faq");
const faqQuestions = document.querySelectorAll(".faq-question");

for (let i = 0; i < faqs.length; i++) {
  const faq = faqs[i];
  const question = faq.childNodes[1];
  const answer = faq.childNodes[3];
  const icons = question.querySelectorAll(".icon")

  question.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter
    answer.classList.toggle("non-active");
    question.classList.toggle("active-question")

    icons.forEach(icon => {
      const i = icon.querySelector("i")
      i.classList.toggle("fa-caret-up")
      i.classList.toggle("fa-caret-down")
    })

    for (let i = 0; i < faqQuestions.length; i++) {
      const questions = faqQuestions[i];
      if (!questions.classList.contains(filter)) {
        questions.nextElementSibling.classList.add("non-active")
        questions.childNodes[1].firstChild.className = "fas fa-caret-down"
        questions.classList.remove("active-question")
      }
    }
  });
}
