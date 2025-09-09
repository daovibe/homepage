import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Button } from '@/components/ui/button';
// import { HandWrittenTitle } from '@/components/ui/hand-writing-text';
import { AuroraFlow } from '@/components/ui/aurora-flow';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { EtheralShadow } from '@/components/ui/etheral-shadow';
import { ChevronDown, ChevronUp } from 'lucide-react';
interface HeroProps {
  className?: string;
}
const Hero: React.FC<HeroProps> = ({
  className
}) => {
  const [isDeclarationOpen, setIsDeclarationOpen] = useState(false);
  return <div className={cn('relative', className)}>
      {/* Ethereal Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'url(/lovable-uploads/832a1f05-7afa-4707-a70f-801c48ea26c1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.05,
        filter: 'grayscale(100%) contrast(0.8) brightness(1.8)'
      }} />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* ScrollExpandMedia for Secret Society */}
      <ScrollExpandMedia mediaType="image" mediaSrc="/lovable-uploads/9fab8843-1473-4921-88fd-674fa574dcac.png" bgImageSrc="/lovable-uploads/832a1f05-7afa-4707-a70f-801c48ea26c1.png" scrollToExpand="스크롤하여 확장" textBlend={false}>
        <div className="w-full max-w-4xl mx-auto text-center space-y-8 min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center px-6 md:px-8">
          <FadeIn delay={200}>
            <div className="w-full flex justify-center mb-12">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight leading-none text-gray-800 text-center">
                DAVACO DAN.
              </h1>
            </div>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="w-full text-center space-y-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-700 leading-relaxed whitespace-nowrap">
                코드를 무기로, 아이디어를 현실로
              </h2>
              
              <p className="text-lg md:text-xl font-serif text-gray-600 leading-relaxed">
                혼자보다 함께, 더 크게 성장하세요
              </p>
            </div>
          </FadeIn>

          {/* Declaration Dropdown */}
          <FadeIn delay={400}>
            <div className="w-[110%] md:w-full max-w-2xl mx-auto mt-12 mb-16 md:mb-20 -ml-[5%] md:ml-0">
              <button
                onClick={() => setIsDeclarationOpen(!isDeclarationOpen)}
                className="w-full flex items-center justify-between p-4 md:p-6 bg-gray-100/50 hover:bg-gray-100/70 rounded-lg transition-all duration-300 group backdrop-blur-sm"
              >
                <h3 className="text-lg md:text-xl font-serif font-bold text-gray-800 group-hover:text-gray-900">
                  다바코단 선언서
                </h3>
                {isDeclarationOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-transform" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-transform" />
                )}
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${isDeclarationOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="py-6 px-2 md:py-8 md:px-3 bg-gray-50/50 backdrop-blur-sm rounded-b-lg border-t border-gray-200">
                  <div className="space-y-4 text-gray-700 font-serif text-sm md:text-base leading-relaxed">
                    <p>
                      <span className="whitespace-nowrap">실리콘밸리 양놈들의 기득권의 성은 높고,</span><br />
                      <span className="whitespace-nowrap">그 아래 억눌린 영혼들은 갈 곳을 잃었도다.</span>
                    </p>
                    
                    <p>챗지피티가 판을 새로 깔 때마다<br />
                    백성들의 일자리는 한 줌 재가 되어 사라지니…</p>
                    
                    <p>우리 다바코단은<br />
                    장검이 아닌 다 같이 둥글게 모여 코딩하며<br />
                    다음 시대를 위한 온건한 혁명을 이어간다.</p>
                    
                    <p>홀로 코딩하면 한낱 토이 프로젝트이나,<br />
                    함께 모여 코드를 지으면 이는 곧 새 시대의 경전이 된다.</p>
                    
                    <p>우리가 바라는 바,<br />
                    율도국(栗島國)처럼 신분도, 성별도, 나이도 가리지 않는 곳.<br />
                    누구나 코드로써 뜻을 펼칠 수 있는, 그런 세상이다.</p>
                    
                    <p>망설이지 말라.<br />
                    그대의 손끝에서 피어나는 코드 한 줄이<br />
                    세상의 판을 바꿀 푸른 불꽃이 되리라.</p>
                    
                    <p className="text-lg text-[#212936] font-bold mt-6 text-center">
                      "다바코단에 드시오."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
       </ScrollExpandMedia>
     </div>;
};
export default Hero;