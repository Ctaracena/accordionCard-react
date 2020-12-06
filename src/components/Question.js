import React, {useState} from 'react'
import arrowD from '../images/icon-arrow-down.svg'
import './styles/Question.css'

const Question = ( {q, a} ) => {

    const [answer, setAnswer] = useState('')
    const [arrow, setArrow] = useState('arrowDown')
    const [questionStyle, setQuestionStyle] = useState('question')

    const handleClick = () => {
        if ( answer === '') {
            setAnswer(a)
        } else {
            setAnswer('')
        }
        if (arrow === 'arrowDown') {
            setArrow('arrowUp')
        } else {
            setArrow('arrowDown')
        }
        questionStyle === 'question' ? setQuestionStyle('questionOn') : setQuestionStyle('question')
    }
    
    return (
        <div className="container">
           <div className="question-container" onClick={handleClick} >
           <img src={arrowD} alt="arrow" className={arrow} />
           <h3 className={questionStyle} > {q} </h3>
           <p className="answer"> {answer} </p>
           <hr/>
           </div>
        </div>
    )
}

export default Question
