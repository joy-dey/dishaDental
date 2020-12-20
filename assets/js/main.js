let serviceDescription = document.querySelectorAll('[data-description]'),
    faq = {
        "questions": [
            "Is Dentist equal to Pain?",
            "Baby Teeth is not so important. Is it true?",
            "Will Dental scaling weaken my teeth?",
            "are dental treatments costly?",
            "does extraction of teeth damages eyes?",
            "does alignment of malaligned tooth has only esthetic values?",
            "does braces correct the malaligned tooth of only teens and kids?",
            "Should dentures be used 24x7?",
            "does whiter teeth means healthy teeth?",
            "which toothpaste to use?",
            "should brushing be done very fast for a long time?",
            "can one tooth brush be used the entire life?",
            "is it necessary to clean my kids teeth after meal as he/she has no teeth?"
        ],
        "answer": [
            "Dental phobia common cause for not visiting dentist at early stage. Every dental treatment does not cause pain. Early visit to dentist can save patient from terrible tooth pain and also from high expenditure. We aim to complete all treatments in painless way and in comfortable zone of patient",
            "Baby teeth are important as much as permanent teeth. Thy play a big role in guiding eruption of permanent teeth in right position. Removing baby tooth before actual time causes blocking of space of permanent teeth eruption leading to mal alignment of permanent teeth",
            "Not at all. Scaling is the process of cleaning debris and biofilm layer and calculus from tooth surface by vibration and water spray. But not doing scaling atleast yearly once leads to severe gum diseases and ultimately tooth loss.",
            "Negligence is expensive - Dental treatments are not. Early visit to dentist can save you from experiencing terrible tooth pain and high expenditure.",
            "No, not at all. There is no co-relation between your eyes and your teeth but if you keep your infected teeth in your mouth, that infection can spread surrounding parts and can lead to serious complication. Any dental treatment does not cause any damage to your eyes even if you have any eye problems.",
            "Yes it has, but also mal-alignment of tooth cause debris and calculus formation around the tooth as tooth brush can’t reach near the mal-aligned tooth and clean it. This retained debris lead to severe gum diseases and periodontal infections and ultimately causes tooth loss.",
            "Starting of treatment for mal-aligned teeth correction at early stage is best. But it doesn’t mean adults can’t have aligned teeth. Today there are several ways for correction of mal-aligned teeth for adults. Consult us to know more.",
            "No. Remove your dentures when you sleep. Immerse it in water and clean it every day before you wear it.  Let your gums have sound blood circulation when you are sleeping. Using of uncleaned dentures lead to fungal infections and other complications too",
            "Colour shade of your teeth doesn’t prove healthiness of your teeth. Your teeth are healthy or not depends on your gum health, presence or absence of cavities, health of your jaw bones.",
            "If you have any particular tooth problem like sensitivity and your dentist has prescribed any particular toothpaste for sensitivity or for any other problems, then use it. Otherwise any branded company’s toothpaste is enough. For kids, use kids special toothpaste and mouth washes.",
            "No – You should brush your teeth for atleast 03-04 minutes twice daily after meals following proper brushing technique. Brushing for longer time causes tooth damage. To know more, ask us.",
            "No, use one tooth brush only for three months and then throw it and get a new one for you and your kid.",
            "You should gently clean your kid’s gum pads with moist gauge/ moist clean cotton cloth after every meal specially after any sugary diet. Because this can affect the tooth buds of your kid.",
        ]
    },
    faqAccordion = document.querySelector('#accordionExample'),
    servicesCard = document.querySelectorAll('.flip-card');

if (servicesCard) {
    servicesCard.forEach(card => {
        card.addEventListener('click', () => {
            location.href = 'services.html';
        })
    })
}

if (faqAccordion) {
    faq.questions.forEach((question, i) => {
        faqAccordion.innerHTML += `
        <div class="card border my-3">
            <div class="card-header d-flex justify-content-between align-items-center" id="headingOne" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}" style="background-color: #eaecef !important">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-decoration-none text-left text-dark font-weight-bold text-capitalize">
                ${question}
              </button>
                </h2>
                <i class="mdi mdi-plus"></i>
            </div>
    
            <div id="collapse${i}" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                   ${faq.answer[i]}
                </div>
            </div>
        </div>
        `
    })

}


serviceDescription.forEach(description => {
    description.innerText = description.innerText.substring(0, 90) + '...';
});

AOS.init();