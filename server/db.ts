import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 10; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What is the 50th U.S. State?',
        answer: 'Hawaii',
    },
    {
        points: 200,
        question: 'What was last year\'s UD Spring Musical?',
        answer: 'Chicago',
    },
    {
        points: 400,
        question: 'What is the name of the boba shop next to Fieldston?',
        answer: 'Pearl Dynastea',
    },
    {
        points: 300,
        question: 'What type of hacking is offered at this school?',
        answer: 'Ethical Hacking',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question: 'What is the study of the structure of the body?',
            answer: 'Anatomy',
        },
        {
            points: 100,
             question: 'What city is named \"The Big Apple?\"',
            answer: 'New York City', 
        },
        {
            points: 300,
            question: 'What month and day is Veterans Day?',
            answer: 'November 11', 
        },
        {
            points: 400,
            question: 'What time does I period end?',
            answer: '4:00',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What country is oddly shaped like a boot?', 
        answer: 'Italy',
    },
    {
        points: 200,
        question: 'What is this year\'s UD Spring Musical',
        answer: 'Oklahoma',
    },
    {
        points: 300,
        question: 'Which play does the quote "to be or not to be, that is the question" come from',
        answer: 'Hamlet',
    },
    {
        points: 400,
        question: 'What is the name of the book for Book Day 2026?',
        answer: 'Beyond Measure',
    }
]);


const categories = [
    {
        title: 'Kelissa\'s Past',
        questions: pastQuestions
    },
    {
        title: 'Kelissa\'s Present',
        questions: presentQuestions
    },
    {
        title: 'Kelissa\'s Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}