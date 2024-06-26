import React, { useState } from 'react';
import Question from './question';
import { NavBar } from 'antd-mobile'
import { findNodeById } from '@/app/lib/util'

const Questionnaire = ({ questionnaireTree }) => {
    const [currentNode, setCurrentNode] = useState(questionnaireTree);
    const [answers, setAnswers] = useState([]);
    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
        if (currentNode.children && currentNode.children.length > 0) {
            setCurrentNode(currentNode.children.find(item => item.parent === answer)); // 简化逻辑，实际应根据选项决定
        } else {
            alert('问卷结束！');
        }
    };

    const back = () => {
        const lastNode = findNodeById(questionnaireTree, currentNode.pid);
        setCurrentNode(lastNode);
    }

    return (
        <>
            <NavBar back='返回' onBack={back}>广医三院医保答疑</NavBar>
            <Question question={currentNode} options={currentNode.options} onAnswer={handleAnswer} />
        </>
    );
};

export default Questionnaire;