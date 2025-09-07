import React from 'react';
import FadeIn from './animations/FadeIn';
import { Button } from './ui/button';

const HistorySection = () => {
  return (
    <section id="history" className="py-20 md:py-32 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">걸어온 길</h2>
            <p className="text-gray-400 text-lg">Our Journey</p>
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn delay={100}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-300 mb-12 font-serif">
              다바코단의 여정과 성장 기록을 확인하세요
            </p>
            
            {/* Long Buttons */}
            <div className="flex flex-col items-center space-y-4">
              <Button
                asChild
                size="lg"
                className="w-[80%] md:w-[288px] px-8 md:px-16 py-6 md:py-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium text-base md:text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-serif"
              >
                <a 
                  href="https://daolabus.notion.site/daolab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <span>다바코단의 활동 기록 보기</span>
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                className="w-[80%] md:w-[288px] px-8 md:px-16 py-6 md:py-8 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-medium text-base md:text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-serif"
              >
                <a 
                  href="https://modulabs.co.kr/community/momos/283" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <span>입단하기</span>
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HistorySection;