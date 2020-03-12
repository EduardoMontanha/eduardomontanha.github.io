import React from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import './Faq.css';

/**
 * Behaviors
 */
function changeCategory(e) {
    e.preventDefault();

    let categoryTab = e.target,
        elementId = categoryTab.getAttribute("href"),
        activeQuestions = document.querySelector(elementId);

    let categoriesTabs = document.querySelectorAll("#faq .category"),
        questionsContainers = document.querySelectorAll("#faq .questions"),
        questItems = document.querySelectorAll("#faq .question-item");

    //Change active category tab
    for (let i = 0; i < categoriesTabs.length; i++) {
        categoriesTabs[i].classList.remove("active");
    }

    categoryTab.classList.add("active");

    //Change active questions content
    for (let i = 0; i < questionsContainers.length; i++) {
        questionsContainers[i].classList.remove("active");
    }

    activeQuestions.classList.add("active");

    //Open first question on active tab
    for (let i = 0; i < questItems.length; i++) {
        questItems[i].classList.remove("open");
    }

    let firstQuestion = document.querySelector("#faq .questions.active .question-item"),
        firstAnswer = firstQuestion.querySelector(".answer");

    firstQuestion.classList.add("open");
    firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
}

function toggleQuestions(e) {

    let questHeader = e.target,
        questionItems = document.querySelectorAll("#faq .question-item"),
        answers = document.querySelectorAll("#faq .question-item .answer");

    if (questHeader.tagName === "SPAN") {
        questHeader = questHeader.parentNode;
    }

    //Remove 'open' class from question items
    for (let i = 0; i < questionItems.length; i++) {
        questionItems[i].classList.remove("open");
    }

    //Setting max-height for smooth openning/close
    for (let i = 0; i < answers.length; i++) {
        answers[i].style.maxHeight = null;
    }

    //Add class 'open' on the triggered one
    questHeader.parentNode.classList.add("open");

    //Open answer content 
    let content = questHeader.nextElementSibling;

    if (!content.style.maxHeight){
        content.style.maxHeight = content.scrollHeight + "px";
    } 
}

//On window load, active the first tab of questions
window.onload = function () {
    let questCategory = document.querySelector("#faq .questions"),
        firstQuestion = questCategory.querySelector(".question-item"),
        firstAnswer = firstQuestion.querySelector(".answer");

    questCategory.classList.add("active");
    firstQuestion.classList.add("open");
    firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
};


/**
 * Components
 */
const RenderQuestions = (props) => {

    let data = props.data,
        questions = data.questions.map((item, index) => 
            
            <div key={index} className="question-item">
                <div className="question" onClick={(e) => toggleQuestions(e)}>
                    <span></span>
                    {item.question}
                </div>
                <div className="answer">{item.answer}</div>
            </div>
        );

    return(
        <div id={data.id} className="questions">
            {questions}
        </div>
    );
}

class Faq extends React.Component {

    static contextType = LanguageContext;

    render() {
        let faqData = this.context.faq,
            generalData = faqData.categories.general,
            tokensData = faqData.categories.tokens,
            clientData = faqData.categories.client,
            legalData = faqData.categories.legal;

        return(
            <section id="faq">
                <div className="container">
                    <div className="content-title">
                        <h2>{faqData.title}</h2>

                        <div className="separator">
                            <div className="large"></div>
                            <div className="medium"></div>
                            <div className="small"></div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="content-data">
                            <div className="categories">
                                <a className="category active" href="#general" onClick={(e) => changeCategory(e)}>{generalData.title}</a>
                                <a className="category" href="#tokens" onClick={(e) => changeCategory(e)}>{tokensData.title}</a>
                                <a className="category" href="#client" onClick={(e) => changeCategory(e)}>{clientData.title}</a>
                                <a className="category" href="#legal" onClick={(e) => changeCategory(e)}>{legalData.title}</a>
                            </div>

                            <div className="questions-container">
                                <RenderQuestions data={generalData} />
                                <RenderQuestions data={tokensData} />
                                <RenderQuestions data={clientData} />
                                <RenderQuestions data={legalData} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Faq;