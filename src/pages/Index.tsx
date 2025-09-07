
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import HistorySection from '@/components/HistorySection';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    // URL 해시에 따라 해당 섹션으로 스크롤
    if (location.hash) {
      const targetId = location.hash.substring(1);
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100); // DOM이 완전히 렌더링된 후 실행
    } else {
      // 해시가 없으면 페이지 상단으로
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location]);
  
  return (
    <main className="relative">
      <Header />
      <Hero />
      <AboutSection />
      <ActivitiesSection />
      <HistorySection />
      <Footer />
    </main>
  );
};

export default Index;
