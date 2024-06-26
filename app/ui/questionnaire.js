import React, { useState } from 'react';
import Question from './question';
import { NavBar } from 'antd-mobile'
import { findNodeById } from '@/app/lib/util'

const Questionnaire = ({ questionnaireTree }) => {
    const [currentNode, setCurrentNode] = useState(questionnaireTree);
    const [answers, setAnswers] = useState([]);
    const handleAnswer = (answer) => {
        console.log("当前点击", answer);
        setAnswers([...answers, answer]);
        if (currentNode.children && currentNode.children.length > 0) {
            const tem = currentNode.children.find(item => item.parent === answer);
            if (tem) setCurrentNode(tem); // 简化逻辑，实际应根据选项决定
            else alert('问卷结束！');
        } else {
            alert('问卷结束！');
        }
        console.log("当前节点", currentNode);
    };

    const back = () => {
        if (currentNode.pid === "-1") return;
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