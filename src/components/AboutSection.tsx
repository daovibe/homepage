import React from 'react';
import FadeIn from './animations/FadeIn';
import { Card } from './ui/card';

const AboutSection = () => {
  const values = [
    { 
      title: "자발성", 
      description: ["스스로", "참여하고", "기여하는", "문화"] 
    },
    { 
      title: "학습", 
      description: ["지속적인", "성장과", "지식", "공유"] 
    },
    { 
      title: "협업", 
      description: ["함께", "만들어가는", "프로젝트"] 
    },
    { 
      title: "시즌제", 
      description: ["6개월", "단위의", "집중적", "활동"] 
    }
  ];

  const growthPath = [
    { step: 1, title: "길드원 신청", description: ["추천/초대", "기반 가입"] },
    { step: 2, title: "바이브코더 전환", description: ["공통 학습 코스", "수료"] },
    { step: 3, title: "시즌 활동", description: ["6개월 단위", "프로젝트 참여"] },
    { step: 4, title: "성장과 리드", description: ["프로젝트", "리더로 성장"] }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.02) 35px, rgba(255,255,255,.02) 70px)'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">비밀결사</h2>
            <p className="text-gray-400 text-lg">About the Guild</p>
          </div>
        </FadeIn>

        {/* Main Description */}
        <FadeIn delay={100}>
          <p className="text-center text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto font-serif">
            다바코단 바이브코딩길드는 단순한 스터디 모임이 아닙니다.<br />
            길드원들이 자발적으로 모여 미래의 일하는 방식과 조직 문화를 실험하며,<br />
            새로운 협업 패러다임을 만들어가는 DAO 기반 길드입니다.
          </p>
        </FadeIn>

        {/* Values Grid */}
        <FadeIn delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 p-6 text-center backdrop-blur-sm hover:scale-105"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-500 font-serif">{value.title}</h3>
                <div className="space-y-1">
                  {value.description.map((line, idx) => (
                    <p key={idx} className="text-gray-300 text-sm md:text-base">{line}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </FadeIn>

        {/* Growth Path */}
        <FadeIn delay={300}>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12">길드원 성장 경로</h3>
            
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {growthPath.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center">
                      {/* Step Number */}
                      <div className="w-12 h-12 bg-[#212936] rounded-full flex items-center justify-center mb-4 z-10 relative">
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                      
                      {/* Step Content */}
                      <h4 className="font-serif font-bold text-lg mb-2 text-center">{step.title}</h4>
                      <div className="text-center">
                        {step.description.map((line, idx) => (
                          <p key={idx} className="text-gray-400 text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    {index < growthPath.length - 1 && (
                      <div className="hidden md:block absolute top-6 -right-4 text-gray-600">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;