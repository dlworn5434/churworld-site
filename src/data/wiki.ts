export type WikiEntry = {
  href: string;
  title: string;
  description: string;
  keywords?: string;
  icon?: string;
};

export type WikiSection = {
  title: string;
  eyebrow: string;
  entries: WikiEntry[];
};

export const wikiSections: WikiSection[] = [
  {
    title: '처음 오셨나요?',
    eyebrow: 'START HERE',
    entries: [
      { href: '/guide/basic/start', title: '첫걸음 가이드', description: '접속 후 가장 먼저 할 일과 추천 진행 순서', keywords: '초보 시작 입문 길라잡이' },
      { href: '/guide/basic/tutorial', title: '신규 유저 튜토리얼', description: '로비에서 생활 핵심 기능을 체험하는 필수 과정', keywords: '튜토리얼 로비 신규 농사 채광 벌목 낚시' },
      { href: '/guide/basic/menu', title: '메뉴 사용법', description: 'Shift + F 통합 메뉴와 주요 기능', keywords: '메뉴 단축키 워프 상점 거래소' },
      { href: '/map', title: '월드 안내', description: '스폰, 마을, 야생, 지옥과 엔더 월드', keywords: '지도 월드 이동 워프 야생 지옥 엔더' },
      { href: '/commands', title: '명령어 모음', description: '자주 쓰는 플레이어 명령어', keywords: '명령 커맨드 도움말' }
    ]
  },
  {
    title: '정착과 편의',
    eyebrow: 'SETTLEMENT',
    entries: [
      { href: '/guide/basic/village', title: '마을', description: '점유, 그룹, 손님, 조공, 세금과 레벨', keywords: '마을 클레임 점유 그룹 조공 세금 비행' },
      { href: '/guide/basic/travel', title: '이동과 홈', description: '개인 홈, 공개 홈, 랜덤 이동과 엘리베이터', keywords: '홈 셋홈 공개홈 rtp back 엘리베이터 이동' },
      { href: '/guide/basic/bag', title: '가방', description: '보관 공간, 확장 비용과 자동 수집', keywords: '가방 인벤토리 확장 자동획득' },
      { href: '/guide/basic/mailbox', title: '우편함', description: '아이템 발송, 수령과 보관 한도', keywords: '우편 메일 발송 수령 보관함' },
      { href: '/guide/basic/shop', title: '상점과 거래', description: '거래소, 후원상점, 생활상점과 물물교환', keywords: '상점 거래소 후원상점 츄르 물물교환' },
      { href: '/guide/basic/diving-chair', title: '잠수 의자', description: '잠수 보상과 별 판매 방법', keywords: '잠수 의자 별 판매 포인트' }
    ]
  },
  {
    title: '후원',
    eyebrow: 'SUPPORT',
    entries: [
      { href: '/support/membership', title: '츄르냥 멤버십', description: '츄르냥 등급별 혜택과 이용권 사용법', keywords: '후원 멤버십 츄르냥 골드츄르냥 로얄츄르냥 혜택 이용권 vip' }
    ]
  },
  {
    title: '생활 콘텐츠',
    eyebrow: 'LIFE CONTENTS',
    entries: [
      { href: '/life/miner', title: '광부', description: '광석, 광맥, 채굴 스킬과 감지', keywords: '채광 광산 광맥 스캔', icon: 'lifemine.png' },
      { href: '/life/fisher', title: '어부', description: '낚시 미니게임, 등급, 조각과 파츠', keywords: '낚시 물고기 파츠 바늘 줄 릴 타이밍 균형 화살표 보물', icon: 'lifefish.png' },
      { href: '/life/farmer', title: '농부', description: '커스텀 작물, 화분 청크 제한, 계절과 농사 장비', keywords: '농사 작물 씨앗 수확 화분 청크 96 제한 계절 봄 여름 가을 겨울 물뿌리개 스프링클러 스프링쿨러 비닐하우스 허수아비', icon: 'lifefarm.png' },
      { href: '/life/woodcutter', title: '나무꾼', description: '벌목, 커스텀 나무와 나무꾼 스킬', keywords: '벌목 나무 커스텀 나무 도끼', icon: 'lifewoodcutter.png' }
    ]
  },
  {
    title: '생산 콘텐츠',
    eyebrow: 'PRODUCTION',
    entries: [
      { href: '/life/chef', title: '요리사', description: '레시피, 조리대와 요리 등급', keywords: '생산 요리 레시피 조리 품질', icon: 'lifecook.png' },
      { href: '/life/blacksmith', title: '대장술', description: '제련, 제작, 재료 절약과 추가 결과물', keywords: '생산 대장장이 대장술 제련 제작 화로 모루', icon: 'lifeblacksmith.png' }
    ]
  },
  {
    title: '생활·생산 안내',
    eyebrow: 'LIFE GUIDE',
    entries: [
      { href: '/life/growth', title: '성장 구조', description: '공용 레벨, 직업별 숙련도와 스탯', keywords: '근로 지식 감각 행운 숙련도 생산', icon: 'lifework.png' },
      { href: '/life/systems', title: '작업대와 시스템', description: '생활·생산 작업대와 공용 시스템', keywords: '작업대 화로 의뢰 제작 생산', icon: 'lifeknowledge.png' },
      { href: '/life/faq', title: '생활·생산 FAQ', description: '생활·생산 콘텐츠 자주 묻는 질문', keywords: '질문 도움 생산' }
    ]
  },
  {
    title: '서버 안내',
    eyebrow: 'SERVER INFO',
    entries: [
      { href: '/notice', title: '공지사항', description: '서버 운영 소식과 업데이트', keywords: '공지 업데이트 소식' },
      { href: '/rules', title: '서버 규칙', description: '마인크래프트와 디스코드에서 함께 지켜야 할 이용 기준', keywords: '규칙 제재 신고 디스코드 개인 DM 공장 자동화 호퍼 채굴 동물 스포너' },
      { href: '/terms', title: '이용 약관', description: '서비스 이용 및 운영 정책', keywords: '약관 정책' }
    ]
  }
];

export const searchEntries = wikiSections.flatMap((section) =>
  section.entries.map((entry) => ({ ...entry, section: section.title }))
);

export function findSection(pathname: string) {
  return wikiSections.find((section) => section.entries.some((entry) => entry.href === pathname));
}
