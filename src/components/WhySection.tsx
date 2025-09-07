import React from 'react';
import FadeIn from './animations/FadeIn';

const WhySection = () => {
  return (
    <section id="why" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <FadeIn delay={100}>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-12 text-center">
            Section 1 – Why?
          </h2>
        </FadeIn>
        
        <div className="space-y-8 text-base md:text-lg leading-relaxed text-muted-foreground text-center">
          <FadeIn delay={200}>
            <p className="text-center">
              무언가를 만들어나가는 과정은 고요하지만 치열합니다.<br />
              그 열기의 밀도는 오직 몸으로 통과해낼 때 느낄 수 있죠.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="text-center">
              고통도 기쁨도 오롯이 겪는 자의 것이지만,<br />
              같은 열기를 견디는 사람들과의 사적 대화가 그리운 순간이 있습니다.
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <p className="text-center text-foreground font-medium">
                디지털 기획자 캐리 × 아날로그 기획자 비다
              </p>
              <p className="text-center mt-4">
                비슷하지만 다른 두 세계가 만나 새로운 불씨가 붙었습니다.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={500}>
            <p className="text-center text-base md:text-lg text-primary font-medium">
              혼자이지만 혼자가 아닌 고요한 연대,<br />
              복합 미디어 프로젝트, 솔로 사우나의 시작을 목격해주세요.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhySection;