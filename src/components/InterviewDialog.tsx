import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ChevronRight, CheckCircle } from 'lucide-react';

interface InterviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  id: string;
  question: string;
  type: 'boolean' | 'text';
  placeholder?: string;
}

const questions: Question[] = [
  {
    id: 'ready',
    question: '함께 배울 준비가 됐는가?',
    type: 'boolean'
  },
  {
    id: 'notion',
    question: '노션은 쓸 수 있는가?',
    type: 'boolean'
  },
  {
    id: 'share',
    question: '단원들과 무엇을 나누고 싶은가?',
    type: 'text',
    placeholder: '그대의 마음을 털어놓으시오...'
  }
];

const InterviewDialog: React.FC<InterviewDialogProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean | string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = questions[currentStep];
  const isLastQuestion = currentStep === questions.length - 1;

  const handleAnswer = (answer: boolean | string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);

    if (isLastQuestion) {
      setIsCompleted(true);
    } else {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 500);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const handleSubmit = () => {
    alert(`입단 심사 완료!\n함께 배울 준비: ${answers.ready ? '그렇소' : '아니오'}\n노션 사용 가능: ${answers.notion ? '그렇소' : '아니오'}\n나누고 싶은 것: ${answers.share}`);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-center">
            🏮 문지기의 심문
          </DialogTitle>
        </DialogHeader>

        <div className="py-6">
          {!isCompleted ? (
            <div className="space-y-6">
              {/* Progress indicator */}
              <div className="flex justify-center space-x-2 mb-8">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index < currentStep
                        ? 'bg-green-500'
                        : index === currentStep
                        ? 'bg-red-500'
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <Card className="p-6 bg-gray-800/50 border-gray-600">
                <h3 className="text-lg font-serif mb-6 text-white text-center">
                  {currentStep + 1}. {currentQuestion.question}
                </h3>

                {currentQuestion.type === 'boolean' ? (
                  <div className="flex gap-4">
                    <Button
                      onClick={() => handleAnswer(true)}
                      className="flex-1 font-serif bg-red-600 hover:bg-red-700"
                    >
                      그렇소
                    </Button>
                    <Button
                      onClick={() => handleAnswer(false)}
                      variant="outline"
                      className="flex-1 font-serif border-gray-500 text-white hover:bg-gray-700"
                    >
                      아니오
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <textarea
                      placeholder={currentQuestion.placeholder}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 font-serif resize-none h-24"
                      onChange={(e) => setAnswers(prev => ({ ...prev, [currentQuestion.id]: e.target.value }))}
                    />
                    <Button
                      onClick={() => handleAnswer(answers[currentQuestion.id] || '')}
                      disabled={!answers[currentQuestion.id]?.toString().trim()}
                      className="w-full font-serif bg-red-600 hover:bg-red-700 disabled:opacity-50"
                    >
                      답변 완료 <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
              <h3 className="text-xl font-serif text-white">
                심문이 완료되었습니다!
              </h3>
              <p className="text-gray-300 font-serif">
                문지기가 그대의 답변을 검토 중입니다...
              </p>
              
              <div className="flex gap-4">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="flex-1 font-serif border-gray-500 text-white hover:bg-gray-700"
                >
                  다시 답변하기
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="flex-1 font-serif bg-red-600 hover:bg-red-700"
                >
                  입단 신청 완료
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InterviewDialog;