import React from 'react';
import FadeIn from './animations/FadeIn';

const WhatSection = () => {
  return (
    <section id="what" className="py-20 md:py-32 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <FadeIn delay={100}>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-12 text-center">
            Section 2 – 솔로 사우나는?
          </h2>
        </FadeIn>
        
        <div className="space-y-8 text-base md:text-lg leading-relaxed text-center">
          <FadeIn delay={200}>
            <p className="text-muted-foreground">
              솔로 사우나는 디지털 공간이기도 하고, 오프라인 공간이기도 합니다.<br />
              존재하기도 하고, 존재하지 않기도 하죠.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="text-primary font-medium text-lg md:text-xl">
              마치 슈뢰딩거의 고양이처럼—<br />
              당신이 지켜볼 때만 존재합니다.
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-muted-foreground">
              어쩌면 가까운 미래엔 우리가 수증기가 피어오르는<br />
              진짜 사우나에서 만나게 될 지도 모르죠.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhatSection;