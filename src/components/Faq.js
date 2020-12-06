import React from 'react'
import Question from './Question'
import './styles/Faq.css'



const Faq = () => {

    const state = {
        data: 
        [
            {
                num: 1,
                q: 'How many team members can I invite?',
                a: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
            },
            {
                num: 2,
                q: 'What is the maximum file upload size?',
                a: 'No more than 2GB. All files in your account must fit your allotted storage space.'
            },
            {
                num: 3,
                q: 'How do I reset my password?',
                a: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
            },
            {
                num: 4,
                q: 'Can I cancel my subscription?',
                a: 'Yes! Send us a message and we’ll process your request no questions asked.'
            },
            {
                num: 5,
                q: 'Do you provide additional support?',
                a: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
            },
        ]
    }

    return (
        <div className="faq-container">
            <h1 className="title">FAQ</h1>
            {state.data.map((i) => {
                return (
                    <Question key={i.num} q={i.q} a={i.a} />
                )
            })}
        </div>
    )
}

export default Faq
