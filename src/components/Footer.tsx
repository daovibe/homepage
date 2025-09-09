import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  MessageCircle, 
  MapPin,
  Calendar,
  ExternalLink,
  Send
} from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Show coming soon message
    alert('뉴스레터 구독 기능이 준비중입니다.');
    setEmail('');
  };

  return (
    <footer id="footer" className={cn('py-16 md:py-24 bg-gray-900 text-white border-t border-gray-800', className)}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Guild Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">다바코단</h3>
            <p className="text-gray-400 mb-4 text-sm">
              코드를 무기로, 아이디어를 현실로
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>설립: 2025년</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>서울 성수동</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">연락처</h3>
            <div className="space-y-3">
              <a href="mailto:daovibecodingguild@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                <span>daovibecodingguild@gmail.com</span>
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('카카오톡 오픈채팅이 준비중입니다.'); }} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <MessageCircle className="w-4 h-4" />
                <span>카카오톡 오픈채팅</span>
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Discord가 준비중입니다.'); }} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                </svg>
                <span>Discord</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">빠른 링크</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors text-sm">
                비밀결사
              </button>
              <button onClick={() => scrollToSection('activities')} className="block text-gray-400 hover:text-white transition-colors text-sm">
                혁명의 길
              </button>
              <a href="https://modulabs.co.kr/community/momos/283" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm">
                모두랩스 커뮤니티
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('프로젝트 갤러리가 준비중입니다.'); }} className="block text-gray-400 hover:text-white transition-colors text-sm">
                프로젝트 갤러리
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">뉴스레터</h3>
            <p className="text-gray-400 mb-4 text-sm">
              최신 소식과 이벤트 정보를 받아보세요
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="이메일 주소"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                required
              />
              <Button type="submit" className="w-full bg-[#212936] hover:bg-[#2a3544] text-white">
                <Send className="w-4 h-4 mr-2" />
                구독하기
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-xl font-serif font-medium">다바코단</Link>
              <div className="flex gap-3">
                <a href="#" onClick={(e) => { e.preventDefault(); alert('GitHub가 준비중입니다.'); }} className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('LinkedIn이 준비중입니다.'); }} className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Instagram이 준비중입니다.'); }} className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 다바코단. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;