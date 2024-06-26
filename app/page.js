'use client';

import Questionnaire from './ui/questionnaire';
import questionData from './lib/question-data';
import {listToTree} from '@/app/lib/util';

export default function Home() {
  const questionnaireData = listToTree(questionData);
  console.log("ff", questionnaireData);
  return (
    <>
      <Questionnaire questionnaireTree={questionnaireData} />
    </>
  );
}
