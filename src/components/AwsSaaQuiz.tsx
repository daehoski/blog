import React, { useState, useMemo, useEffect } from 'react';
import keywordsData from '../assets/data/aws-saa-keywords.json';

const AwsSaaQuiz = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const [finished, setFinished] = useState(false);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

    // Shuffle keywords for the quiz session
    const quizData = useMemo(() => {
        return [...keywordsData].sort(() => Math.random() - 0.5);
    }, [quizStarted]);

    // Shuffle options whenever current question changes
    useEffect(() => {
        if (quizData[currentIndex]) {
            const options = [...quizData[currentIndex].options].sort(() => Math.random() - 0.5);
            setShuffledOptions(options);
            setSelectedOption(null);
        }
    }, [currentIndex, quizData, quizStarted]);

    const handleOptionSelect = (option: string) => {
        if (selectedOption) return; // Prevent multiple clicks

        setSelectedOption(option);
        if (option === quizData[currentIndex].answer) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex + 1 < quizData.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setFinished(true);
        }
    };

    const resetQuiz = () => {
        setCurrentIndex(0);
        setSelectedOption(null);
        setScore(0);
        setFinished(false);
        setQuizStarted(false);
    };

    if (!quizStarted) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center bg-skin-card rounded-xl border border-skin-line p-8 shadow-sm">
                <div className="w-16 h-16 bg-skin-accent/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">📝</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">AWS SAA 실전 객관식 퀴즈</h2>
                <p className="mb-8 opacity-80 leading-relaxed">
                    랜덤으로 출제되는 문제를 풀며 서비스의 특징을 학습하세요.<br />
                    총 <span className="font-bold text-skin-accent">{keywordsData.length}</span>개의 문제가 준비되어 있습니다.
                </p>
                <button
                    onClick={() => setQuizStarted(true)}
                    className="px-10 py-4 bg-skin-accent text-skin-inverted rounded-lg font-bold hover:opacity-90 transition-all hover:scale-105 shadow-md"
                >
                    퀴즈 시작하기
                </button>
            </div>
        );
    }

    if (finished) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center bg-skin-card rounded-xl border border-skin-line p-8">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-4xl">🏆</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">학습 완료!</h2>
                <div className="text-xl mb-8">
                    최종 점수: <span className="text-skin-accent font-bold text-3xl">{score}</span> / {quizData.length}
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={resetQuiz}
                        className="px-6 py-2 border border-skin-accent text-skin-accent rounded hover:bg-skin-accent hover:text-skin-inverted transition-all font-medium"
                    >
                        다시 도전하기
                    </button>
                    <a href="/aws-saa" className="px-6 py-2 bg-skin-line rounded hover:bg-skin-card-muted transition-all font-medium">
                        키워드 맵 보기
                    </a>
                </div>
            </div>
        );
    }

    const currentItem = quizData[currentIndex];
    const isAnswered = selectedOption !== null;

    return (
        <div className="max-w-3xl mx-auto my-8 p-6 md:p-10 bg-skin-card rounded-2xl border border-skin-line shadow-lg transition-all">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-skin-line">
                <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider opacity-60 mb-1">AWS SAA Practice</span>
                    <span className="text-sm font-bold">문제 {currentIndex + 1} of {quizData.length}</span>
                </div>
                <div className="px-3 py-1 bg-skin-accent/10 text-skin-accent rounded-full text-xs font-semibold">
                    {currentItem.category}
                </div>
            </div>

            {/* Question */}
            <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold leading-snug">
                    다음 상황에 필요한 가장 적절한 서비스 또는 기능은 무엇인가요?
                </h3>
                <div className="mt-4 p-4 bg-skin-fill rounded-lg border-l-4 border-skin-accent italic text-lg">
                    "{currentItem.keyword}"
                </div>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {shuffledOptions.map((option, idx) => {
                    const isCorrect = isAnswered && option === currentItem.answer;
                    const isWrongSelection = isAnswered && selectedOption === option && option !== currentItem.answer;

                    let buttonClass = "p-4 text-left rounded-xl border-2 transition-all duration-200 flex items-center justify-between ";
                    if (!isAnswered) {
                        buttonClass += "border-skin-line hover:border-skin-accent hover:bg-skin-accent/5 cursor-pointer";
                    } else {
                        if (isCorrect) buttonClass += "border-green-500 bg-green-500/10 text-green-700 font-bold";
                        else if (isWrongSelection) buttonClass += "border-red-500 bg-red-500/10 text-red-700 opacity-80";
                        else buttonClass += "border-skin-line opacity-40 grayscale-[0.5] cursor-default";
                    }

                    return (
                        <button
                            key={idx}
                            disabled={isAnswered}
                            onClick={() => handleOptionSelect(option)}
                            className={buttonClass}
                        >
                            <span>{option}</span>
                            {isCorrect && <span>✅</span>}
                            {isWrongSelection && <span>❌</span>}
                        </button>
                    );
                })}
            </div>

            {/* Explanation Area */}
            {isAnswered && (
                <div className="animate-in slide-in-from-bottom-4 fade-in duration-500">
                    <div className="p-5 bg-skin-accent/5 rounded-xl border border-skin-accent/20 mb-8">
                        <h4 className="font-bold text-skin-accent mb-2 flex items-center gap-2">
                            <span>💡</span> 해설
                        </h4>
                        <p className="text-skin-base leading-relaxed">
                            {currentItem.explanation}
                        </p>
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-full py-4 bg-skin-accent text-skin-inverted rounded-xl font-bold shadow-lg hover:opacity-90 transition-all active:scale-[0.98]"
                    >
                        {currentIndex + 1 === quizData.length ? "결과 보기" : "다음 문제로"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default AwsSaaQuiz;
