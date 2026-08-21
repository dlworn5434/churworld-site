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
      { href: '/guide/basic/tutorial', title: '신규 유저 튜토리얼', description: '생활 핵심 기능 체험과 완료 후 시작 물품', keywords: '튜토리얼 로비 신규 농사 채광 벌목 낚시 시작물품 카메라 건설도면 잠수의자' },
      { href: '/guide/basic/menu', title: '메뉴 사용법', description: 'Shift + F 통합 메뉴와 주요 기능', keywords: '메뉴 단축키 워프 상점 거래소' },
      { href: '/map', title: '월드 안내', description: '스폰, 마을, 야생, 지옥과 엔더 월드', keywords: '지도 월드 이동 워프 야생 지옥 엔더' },
      { href: '/commands', title: '명령어 모음', description: '자주 쓰는 플레이어 명령어', keywords: '명령 커맨드 도움말' }
    ]
  },
  {
    title: '정착과 편의',
    eyebrow: 'SETTLEMENT',
    entries: [
      { href: '/guide/basic/village', title: '마을', description: '점유, 권한, 경작지, 바이옴, 손님과 세금', keywords: '마을 클레임 점유 청크 비용 경작지 농지 농지훼손 출입 권한 프리셋 PVP 바이옴 그룹 조공 세금 비행 초대 손님 로그 로그막대기 랭킹' },
      { href: '/guide/basic/construction', title: '마을 건축', description: '건설 도면, 건차, 가구와 24시간 효과 타워', keywords: '마을 건축 건설 도면 츄르 코인 건차 도구함 원목 묶음 장식 가구 앉기 눕기 중세 시장 주점 효과 타워 나무신 땅의신 24시간 자정 유지비 HybridBuild' },
      { href: '/guide/basic/travel', title: '이동과 홈', description: '개인 홈, 랜덤 이동, 상점 택시와 엘리베이터', keywords: '홈 셋홈 공개홈 rtp back 택시 상점택시 엘리베이터 이동' },
      { href: '/guide/basic/camera', title: '카메라와 벽 사진', description: '촬영, 필터·편집, 인화와 벽 사진 설치', keywords: '카메라 사진 촬영 필름 인화 벽사진 스티커 필터 줌 churcamera ccamera' },
      { href: '/guide/basic/bag', title: '가방', description: '보관 공간, 확장, 자동 수집과 로얄 보너스', keywords: '가방 인벤토리 확장 자동획득 로얄 27칸 126칸' },
      { href: '/guide/basic/mailbox', title: '우편함', description: '아이템 발송, 수령과 보관 한도', keywords: '우편 메일 발송 수령 보관함' },
      { href: '/guide/basic/shop', title: '상점과 거래', description: '생활상점, 후원상품, 시세와 추천 보상', keywords: '상점 거래소 후원상점 츄르 물물교환 재분배 주문서 마을비행 이용권 요리시세' },
      { href: '/guide/basic/marketplace', title: '유저 거래소', description: '추천 이용 조건, 판매 등록, 보관함과 정산', keywords: '거래소 등록 판매 검색 수수료 보관함 정산 추천' },
      { href: '/guide/basic/economy', title: '재화·교환·ATM', description: '돈 보내기, 재화 조회, 물물교환과 츄르 환전', keywords: '돈보내기 송금 pay 재화 물물교환 작물교환 ATM 츄르 환전' },
      { href: '/guide/basic/requests', title: '의뢰', description: '일일·주간·월간 목표와 새로고침', keywords: '의뢰 퀘스트 일일 주간 월간 새로고침 보상' },
      { href: '/guide/basic/codi', title: '코디와 뽑기', description: '일반 코디와 도구·방어구 스킨 적용·뽑기', keywords: '코디 치장 뽑기 도구스킨 방어구스킨 외형 복구 추출기 마일리지 모자 날개' },
      { href: '/guide/basic/drawing', title: '그림과 이젤', description: '이젤에서 그림을 그리고 저장·지도 출력', keywords: '그림 이젤 daub 저장 지도 작품 붓' },
      { href: '/guide/basic/diving-chair', title: '잠수 의자', description: '일반·프리미엄 의자, 별 보상과 포인트 상점', keywords: '잠수 의자 별 판매 포인트 스폰 월드 프리미엄 음성채널 디스코드' }
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
      { href: '/life/miner', title: '광부', description: '광석, 광맥, 발광 윤곽선 감지와 액티브 스킬', keywords: '채광 광산 광맥 스캔 윤곽선 광석감지 단축키 각성', icon: 'lifemine.png' },
      { href: '/life/fisher', title: '어부', description: '낚시 미니게임, 보물과 파츠 제작·관리', keywords: '낚시 물고기 파츠 바늘 줄 릴 수명 옵션 재설정 타이밍 균형 화살표 보물', icon: 'lifefish.png' },
      { href: '/life/farmer', title: '농부', description: '커스텀 작물, 농사 장비, 스탯과 액티브 스킬', keywords: '농사 작물 씨앗 수확 숙련 경험치 화분 청크 96 제한 계절 봄 여름 가을 겨울 물뿌리개 스프링클러 스프링쿨러 비닐하우스 허수아비 단축키', icon: 'lifefarm.png' },
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
      { href: '/life/growth', title: '성장 구조', description: '공용 레벨, 고레벨 EXP와 스탯 투자', keywords: '근로 지식 감각 행운 스탯 투자 포인트 장비 합산 숙련도 51레벨 경험치 생산', icon: 'lifework.png' },
      { href: '/life/recipes', title: '생활 제작법', description: '재료 자동 배치, 6칸 대기열과 생활 제작법', keywords: '제작법 조합법 재료 자동배치 좌클릭 우클릭 대기열 작업대 흔한 화로 물뿌리개 스프링클러 생활 조각 강화석 큐브 드라코라이트', icon: 'lifeblacksmith.png' },
      { href: '/life/equipment', title: '장비와 큐브', description: '드라코라이트 각인, 스탯 분배·재분배와 큐브', keywords: '드라코라이트 희생장비 순정장비 소유권 각인 제거 장비스탯 스탯분배 재분배 주문서 근로 지식 감각 행운 큐브 재설정 보존 잠재등급 가열', icon: 'lifesense.png' },
      { href: '/life/codex', title: '생활 도감', description: '생활·생존 아이템 등록과 영구 보상', keywords: '생활 도감 수집 등록 보상 채광 농사 낚시 요리 벌목 생존 검 몬스터 드롭 허기 마나', icon: 'lifeknowledge.png' },
      { href: '/life/systems', title: '주요 시스템', description: '제작, 도감, 생활 조각, 마나와 장비 성장', keywords: '작업대 화로 의뢰 제작 도감 생활 조각 확률 강화석 마나 저장 큐브 장비 생산', icon: 'lifeknowledge.png' },
      { href: '/life/faq', title: '생활·생산 FAQ', description: '생활·생산 콘텐츠 자주 묻는 질문', keywords: '질문 도움 생산' }
    ]
  },
  {
    title: '서버 안내',
    eyebrow: 'SERVER INFO',
    entries: [
      { href: '/notice', title: '위키 이용 안내', description: '전체 목차와 현재 제공하는 문서 안내', keywords: '위키 목차 안내 찾기' },
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
