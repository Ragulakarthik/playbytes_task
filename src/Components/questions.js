import React from 'react';
import './questions.css';
import questionsImage from './questionsImage.png'; // Replace with your image path

function Questions() {
    const questions = [
        {
            id: 1,
            question: "What inspired you to pursue your current career path?",
            friendsAnswered: 22,
            friendLogos: [questionsImage, questionsImage, questionsImage], // Example images
        },
        {
            id: 2,
            question: "What skills do you think are most important for success in our industry?",
            friendsAnswered: 15,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 3,
            question: "What has been your biggest career achievement to date?",
            friendsAnswered: 15,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 4,
            question: "How do you stay motivated and productive during challenging times at work?",
            friendsAnswered: 15,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 5,
            question: "What’s the best piece of career advice you’ve ever received?",
            friendsAnswered: 15,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 6,
            question: "How do you handle setbacks or failures in your career?",
            friendsAnswered: 15,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 7,
            question: "What are your biggest goals for the next 5 years?",
            friendsAnswered: 15,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 8,
            question: "What do you think is the next big trend in our field/industry?",
            friendsAnswered: 10,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 9,
            question: "How do you approach building professional relationships and networking?",
            friendsAnswered: 12,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 10,
            question: "What are the most important qualities in a good leader?",
            friendsAnswered: 18,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 11,
            question: "What certifications, skills, or technologies are you planning to focus on next?",
            friendsAnswered: 20,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 12,
            question: "How do you stay current with new developments and trends in your industry?",
            friendsAnswered: 16,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 13,
            question: "What’s one thing you wish you had known when you first started in your career?",
            friendsAnswered: 14,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 14,
            question: "How do you manage your time and stay organized at work?",
            friendsAnswered: 17,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 15,
            question: "What do you consider to be your biggest strength in the workplace?",
            friendsAnswered: 13,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        },
        {
            id: 16,
            question: "What is the most valuable lesson you’ve learned from a difficult project or situation?",
            friendsAnswered: 11,
            friendLogos: [questionsImage, questionsImage, questionsImage],
        }
    ];

    return (
        <div className="questions-container">
            <center> <h3>QUESTIONS</h3> <hr></hr></center>
            PREVIOUS QUESTIONS
            <div className="questions-list">
                {questions.map((q) => (
                    <div key={q.id} className="question-card">
                        <img src={questionsImage} alt="Question" className="question-image" />
                        <div className="question-details">
                            <p className="question-text">{q.question}</p>
                            <p className="friends-info">
                                <span style={{ color: 'blue', fontSize: '9px' }}>{q.friendsAnswered} of your friends </span> answered this question.
                                {q.friendLogos.map((logo, index) => (
                                    <img
                                        key={index}
                                        src={logo}
                                        alt="Friend Logo"
                                        className="friend-logo"
                                    />
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Questions;
