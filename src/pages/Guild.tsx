import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FadeIn from '@/components/animations/FadeIn';

const Guild = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              다오랩 바이브코딩길드
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              실력으로 인정받는 바이브코더들의 프로젝트 길드
            </p>
            <p className="text-lg text-gray-600 mb-8">
              프로젝트 기반 바이브코더 커뮤니티 — 해커톤, 외주톤, 교육을 한 곳에서
            </p>
            <p className="text-xl font-serif text-gray-800 italic mb-8">
              "코드를 무기로, 아이디어를 현실로 - 성수동 선언"
            </p>
            <p className="text-lg text-gray-700 mb-8">
              혼자보다 함께, 더 크게 성장하세요
            </p>
            <Button size="lg" className="px-8 py-4 text-lg">
              길드 참가 신청
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* About the Guild Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              About the Guild
            </h2>
            <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">
              다바코단 바이브코딩길드는 단순한 스터디 모임이 아닙니다. 길드원들이 자발적으로 모여 미래의 일하는 방식과 조직 문화를 실험하며, 새로운 협업 패러다임을 만들어가는 DAO 기반 길드입니다.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <FadeIn delay={100}>
              <Card className="p-6 text-center bg-white shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">자발성</h3>
                <div className="space-y-2 text-gray-700">
                  <p>스스로</p>
                  <p>참여하고</p>
                  <p>기여하는</p>
                  <p>문화</p>
                </div>
              </Card>
            </FadeIn>
            <FadeIn delay={200}>
              <Card className="p-6 text-center bg-white shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">학습</h3>
                <div className="space-y-2 text-gray-700">
                  <p>지속적인</p>
                  <p>성장과</p>
                  <p>지식</p>
                  <p>공유</p>
                </div>
              </Card>
            </FadeIn>
            <FadeIn delay={300}>
              <Card className="p-6 text-center bg-white shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">협업</h3>
                <div className="space-y-2 text-gray-700">
                  <p>함께</p>
                  <p>만들어가는</p>
                  <p>프로젝트</p>
                </div>
              </Card>
            </FadeIn>
            <FadeIn delay={400}>
              <Card className="p-6 text-center bg-white shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">시즌제</h3>
                <div className="space-y-2 text-gray-700">
                  <p>6개월</p>
                  <p>단위의</p>
                  <p>집중적</p>
                  <p>활동</p>
                </div>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={500}>
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">길드원 성장 경로</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">①</div>
                  <h4 className="font-bold mb-2">길드원 신청</h4>
                  <p className="text-sm text-gray-600">추천/초대 기반 가입</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">②</div>
                  <h4 className="font-bold mb-2">바이브코더 전환</h4>
                  <p className="text-sm text-gray-600">공통 학습 코스 수료</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">③</div>
                  <h4 className="font-bold mb-2">시즌 활동</h4>
                  <p className="text-sm text-gray-600">6개월 단위 프로젝트 참여</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">④</div>
                  <h4 className="font-bold mb-2">성장과 리드</h4>
                  <p className="text-sm text-gray-600">프로젝트 리더로 성장</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              이런 분들을 위한 길드입니다
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={100}>
              <Card className="p-8 bg-gray-50 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">프리랜서 바이브코더</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 혼자 일하는 것이 외롭고 불안정하신가요?</li>
                  <li>• 큰 프로젝트는 혼자 하기 버거우신가요?</li>
                  <li>• 실력 있는 동료들과 함께 성장하고 싶으신가요?</li>
                </ul>
              </Card>
            </FadeIn>
            <FadeIn delay={200}>
              <Card className="p-8 bg-gray-50 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">사이드잡을 원하는 직장인</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 본업 외 추가 수입을 원하시나요?</li>
                  <li>• 다양한 프로젝트 경험을 쌓고 싶으신가요?</li>
                  <li>• 네트워킹과 성장 기회를 찾고 계신가요?</li>
                </ul>
              </Card>
            </FadeIn>
            <FadeIn delay={300}>
              <Card className="p-8 bg-gray-50 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">실무 경험이 필요한 주니어</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 포트폴리오를 만들고 싶으신가요?</li>
                  <li>• 시니어 바이브코더의 멘토링을 받고 싶으신가요?</li>
                  <li>• 실제 프로젝트로 실력을 증명하고 싶으신가요?</li>
                </ul>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={400}>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              바이브코딩길드만의 특별함
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-blue-50 shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-blue-900">공정한 수익 분배</h4>
                <p className="text-gray-700">
                  프로젝트 기여도에 따라 투명하고 공정하게 수익을 분배합니다.
                  일한 만큼 정확히 보상받는 시스템입니다.
                </p>
              </Card>
              <Card className="p-8 bg-green-50 shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-green-900">함께 성장하는 문화</h4>
                <p className="text-gray-700">
                  혼자서는 어려운 대형 프로젝트도 팀으로 도전합니다. 
                  서로의 노하우를 공유하며 함께 성장합니다.
                </p>
              </Card>
              <Card className="p-8 bg-purple-50 shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-purple-900">유연한 참여 방식</h4>
                <p className="text-gray-700">
                  풀타임, 파트타임, 프로젝트 단위 참여 모두 가능합니다.
                  본업과 병행하며 자유롭게 활동할 수 있습니다.
                </p>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Our Activities
            </h2>
            <p className="text-lg text-center text-gray-700 mb-16">
              실전 프로젝트로 성장하는 바이브코더 길드
            </p>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn delay={100}>
              <Card className="p-8 bg-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">해커톤</h3>
                <p className="text-xl text-gray-700 mb-4">빠르게 아이디어를 현실로</p>
                <p className="text-gray-600 mb-6">
                  24-48시간 동안 아이디어를 실제 프로토타입으로 구현합니다.
                  창의적인 도전과 빠른 실행력을 기를 수 있습니다.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>주요 활동:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>주제별 미니 해커톤 (월 1회)</li>
                    <li>시즌 메인 해커톤 (시즌당 1회)</li>
                    <li>외부 협업 해커톤</li>
                  </ul>
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="p-8 bg-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">외주톤</h3>
                <p className="text-xl text-gray-700 mb-4">실제 클라이언트 프로젝트</p>
                <p className="text-gray-600 mb-6">
                  실제 클라이언트의 프로젝트를 팀으로 수행합니다.
                  프로젝트 수익은 기여도에 따라 공정하게 분배됩니다.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>프로젝트 범위:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>MVP 개발 (2-4주)</li>
                    <li>웹/앱 서비스 구축</li>
                    <li>기술 컨설팅</li>
                  </ul>
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={300}>
              <Card className="p-8 bg-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">교육</h3>
                <p className="text-xl text-gray-700 mb-4">함께 배우고 나누는 성장</p>
                <p className="text-gray-600 mb-6">
                  바이브코딩 기술과 문화를 함께 배우고 전파합니다.
                  시니어의 노하우를 주니어에게 전수하는 선순환 구조입니다.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>교육 프로그램:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>바이브코더 부트캠프</li>
                    <li>기술 워크샵</li>
                    <li>1:1 멘토링</li>
                  </ul>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DAO System Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              DAO System
            </h2>
            <p className="text-lg text-center text-gray-700 mb-16">
              탈중앙화 자율 조직으로 진화하는 바이브코더 길드
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              시즌 참여 활동 방식
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 text-center bg-gray-50 shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-gray-900">팀 빌딩</h4>
                <p className="text-gray-600">
                  시즌 시작 시 관심사와 역량에 따라 팀 구성
                </p>
              </Card>
              <Card className="p-6 text-center bg-gray-50 shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-gray-900">프로젝트 수행</h4>
                <p className="text-gray-600">
                  6개월간 집중적으로 프로젝트를 진행
                </p>
              </Card>
              <Card className="p-6 text-center bg-gray-50 shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-gray-900">성과 공유</h4>
                <p className="text-gray-600">
                  시즌 종료 시 성과를 공유하고 보상 분배
                </p>
              </Card>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              단계별 진화 로드맵
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 bg-blue-50 shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-blue-900">Phase 1</h4>
                <h5 className="font-bold mb-2">프로젝트 중심 커뮤니티</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 프로젝트 기반 협업</li>
                  <li>• 카톡/디스코드 소통</li>
                  <li>• 엑셀/노션 관리</li>
                </ul>
              </Card>
              <Card className="p-6 bg-green-50 shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-green-900">Phase 2</h4>
                <h5 className="font-bold mb-2">체계화된 길드 시스템</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 웹 기반 매칭 플랫폼</li>
                  <li>• 기여도 포인트 시스템</li>
                  <li>• 내부 화폐 실험</li>
                </ul>
              </Card>
              <Card className="p-6 bg-purple-50 shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-purple-900">Phase 3</h4>
                <h5 className="font-bold mb-2">완전 자율 DAO</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 탈중앙화 거버넌스</li>
                  <li>• 스마트 컨트랙트</li>
                  <li>• 국제 협업 네트워크</li>
                </ul>
              </Card>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
                투명한 보상 시스템
              </h3>
              <div className="text-center">
                <div className="inline-flex items-center space-x-4 text-lg">
                  <span className="bg-white px-4 py-2 rounded-lg shadow">프로젝트 기여도</span>
                  <span>→</span>
                  <span className="bg-white px-4 py-2 rounded-lg shadow">동료 평가</span>
                  <span>→</span>
                  <span className="bg-white px-4 py-2 rounded-lg shadow">보상 분배</span>
                </div>
                <div className="mt-6 grid md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white p-3 rounded-lg shadow">
                    <p className="font-medium">코드 기여도</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow">
                    <p className="font-medium">프로젝트 리딩</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow">
                    <p className="font-medium">멘토링 활동</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow">
                    <p className="font-medium">커뮤니티 기여</p>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              함께 성장할 준비가 되셨나요?
            </h2>
            <p className="text-lg text-center text-gray-700 mb-16">
              다오랩 바이브코딩길드와 함께 새로운 도전을 시작하세요
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <Card className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                길드 참가 신청서
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이름 *</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이메일 *</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">포트폴리오/GitHub 링크</label>
                  <input 
                    type="url" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">관심 분야 *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['프론트엔드', '백엔드', '풀스택', '모바일', 'AI/ML', '블록체인'].map((field) => (
                      <label key={field} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        {field}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">참여 가능 시간 *</label>
                  <div className="space-y-2">
                    {[
                      '풀타임 (주 40시간 이상)',
                      '파트타임 (주 20-40시간)',
                      '프로젝트 단위'
                    ].map((option) => (
                      <label key={option} className="flex items-center">
                        <input type="radio" name="availability" className="mr-2" />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">자기소개 *</label>
                  <textarea 
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">추천인 (선택사항)</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="text-center pt-4">
                  <Button size="lg" className="px-12 py-4 text-lg">
                    신청서 제출
                  </Button>
                </div>
              </form>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Guild;