import React from 'react';
import FadeIn from './animations/FadeIn';
import { Card } from './ui/card';
import { Zap, Code2, GraduationCap, Trophy } from 'lucide-react';

const ActivitiesSection = () => {
  const activities = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "해커톤",
      subtitle: "빠르게 아이디어를 현실로",
      description: "24-48시간 동안 아이디어를 실제 프로토타입으로 구현합니다.\n창의적인 도전과 빠른 실행력을 기를 수 있습니다.",
      features: [
        "주제별 미니 해커톤 (월 1회)",
        "시즌 메인 해커톤 (시즌당 1회)",
        "외부 협업 해커톤"
      ]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "MVP톤",
      subtitle: "창업팀과 함께하는 실전 개발",
      description: "초기 창업팀의 비즈니스 아이템을 최소 기능 제품(MVP)으로 구현합니다.\n실제 시장 검증 가능한 서비스를 함께 만들어 창업 생태계 경험을 쌓습니다.",
      features: [
        "MVP 프로토타입 개발 (2-3주)",
        "핵심 기능 중심 구현",
        "창업팀과 협업 진행",
        "비즈니스 가치 검증"
      ]
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "챌린지톤",
      subtitle: "길드원의 소망 프로젝트를 함께 실현",
      description: "길드원이 평소 만들고 싶었던 소망 프로젝트를 모두가 힘을 모아 구현합니다.\n혼자서는 벅찬 프로젝트도 함께라면 완성할 수 있습니다.",
      features: [
        "길드원 소망 프로젝트 선정",
        "팀 단위 협업 개발 (3-4주)",
        "역할 분담 및 멘토링",
        "완성품까지 도전"
      ]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "교육",
      subtitle: "지식 공유와 교육 툴킷 제작",
      description: "바이브코딩 기술과 문화를 함께 배우고 전파합니다.\n일반인에게 바이브코딩을 쉽게 교육할 수 있는 툴킷을 제작합니다.",
      features: [
        "바이브코더 부트캠프",
        "기술 워크샵",
        "1:1 멘토링"
      ]
    }
  ];

  return (
    <section id="activities" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">혁명의 길</h2>
            <p className="text-gray-400 text-lg">Our Activities</p>
          </div>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={100}>
          <p className="text-center text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto font-serif">
            실전 프로젝트로 성장하는 바이브코더 길드
          </p>
        </FadeIn>

        {/* Activities Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <FadeIn key={index} delay={200 + index * 100}>
              <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-sky-500/20 rounded-lg flex items-center justify-center text-sky-500">
                      {activity.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-gray-100">{activity.title}</h3>
                    <p className="text-lg text-sky-500 mb-4">{activity.subtitle}</p>
                    <p className="text-gray-300 mb-6 whitespace-pre-line">{activity.description}</p>
                    
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-sm text-gray-400 mb-2">
                        {activity.title === "해커톤" && "주요 활동:"}
                        {activity.title === "MVP톤" && "프로젝트 범위:"}
                        {activity.title === "챌린지톤" && "프로젝트 범위:"}
                        {activity.title === "교육" && "교육 프로그램:"}
                      </p>
                      <ul className="space-y-2">
                        {activity.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-300">
                            <span className="text-sky-500">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;