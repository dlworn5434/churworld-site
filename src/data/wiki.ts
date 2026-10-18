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
      { href: '/guide', title: '빠른 시작 요약', description: '가입, 전용 클라이언트와 첫 활동을 한 페이지로 확인', keywords: '빠른 시작 요약 접속 전용클라이언트 디스코드' },
      { href: '/guide/basic/start', title: '첫걸음 가이드', description: '디스코드 가입·인증, 전용 클라이언트 접속과 추천 진행 순서', keywords: '초보 시작 입문 가입 디스코드 인증 화이트리스트 전용클라이언트 길라잡이' },
      { href: '/guide/basic/tutorial', title: '신규 유저 튜토리얼', description: '생활 핵심 기능 체험과 완료 후 시작 물품', keywords: '튜토리얼 로비 신규 농사 채광 벌목 낚시 시작물품 카메라 건설도면 잠수의자' },
      { href: '/guide/basic/menu', title: '메뉴 사용법', description: '통합 메뉴, 지도·비행·채팅 단축키와 키보드 설정', keywords: '메뉴 단축키 키보드 키변경 N M G H 지도 비행 채팅 워프 상점 거래소' },
      { href: '/guide/basic/hud', title: 'HUD와 채팅 설정', description: 'J키로 화면 배치·크기·채팅 글자와 단축키 안내 조절', keywords: 'HUD J 설정 배치 편지지 크기 80 투명도 표시 채팅 글자 이모티콘 쿨타임 단축키 숨기기' },
      { href: '/map', title: '월드 안내', description: '스폰, 마을, 야생, 지옥과 엔더 월드', keywords: '지도 월드 이동 워프 야생 지옥 엔더' },
      { href: '/commands', title: '명령어 모음', description: '자주 쓰는 플레이어 명령어', keywords: '명령 커맨드 도움말' }
    ]
  },
  {
    title: '정착과 편의',
    eyebrow: 'SETTLEMENT',
    entries: [
      { href: '/guide/basic/village', title: '마을', description: '점유·경작지 한도, 부마을장·금고, 공개 마을과 손님', keywords: '마을 클레임 점유 청크 한도 경작지 농지 출입 권한 프리셋 PVP 바이옴 그룹 조공 세금 부마을장 금고 출금 공개 방문 소개 비행 초대 손님 로그 로그막대기 랭킹' },
      { href: '/guide/basic/construction', title: '마을 건축', description: '건설 도면, 건차, 가구와 24시간 효과 타워', keywords: '마을 건축 건설 도면 츄르 코인 건차 도구함 원목 묶음 장식 가구 앉기 눕기 중세 시장 주점 효과 타워 나무신 땅의신 24시간 자정 유지비 HybridBuild' },
      { href: '/guide/basic/storage', title: '자동 창고 정리', description: '투입함과 액자로 품목별 자동 분류, 창고 생성과 관리', keywords: '창고 자동창고 자동정리 창고정리 투입함 상자 큰상자 액자 분류 필터 바닐라 보관 새로고침 일시정지 LifeStorageSorter' },
      { href: '/guide/basic/travel', title: '이동과 홈', description: '개인 홈, 랜덤 이동, 택시 목적지 선택과 엘리베이터', keywords: '홈 셋홈 공개홈 rtp back 택시 상점 강화소 목적지 엘리베이터 이동' },
      { href: '/guide/basic/camera', title: '카메라와 벽 사진', description: '촬영, 필터·편집, 인화와 벽 사진 설치', keywords: '카메라 사진 촬영 필름 인화 벽사진 스티커 필터 줌 churcamera ccamera' },
      { href: '/guide/basic/bag', title: '가방', description: '코인·프리미엄 독립 확장, 모두 넣기와 로얄 보너스 공간', keywords: '가방 인벤토리 모두넣기 확장 츄르코인 455 코인10회 프리미엄확장권 20회 독립 자동획득 로얄 27칸 279칸 306칸 31줄 34줄' },
      { href: '/guide/basic/mailbox', title: '우편함', description: '아이템 발송·수령, 보관 기간과 시스템 회수품', keywords: '우편 메일 발송 수령 보관함 회수품 만료 입장권 빨간우편함' },
      { href: '/guide/basic/shop', title: '상점과 거래', description: '생활·나무 상점, 후원상품과 추천상자 보상 수령', keywords: '상점 나무상점 황금원목 황금나무 판매 거래소 후원상점 츄르 물물교환 재분배 주문서 마을비행 이용권 요리시세 추천상자 가챠수령 보상' },
      { href: '/guide/basic/marketplace', title: '유저 거래소', description: '판매 등록과 구매 주문, 보관함·정산 이용법', keywords: '거래소 등록 판매 구매주문 삽니다 팝니다 검색 수수료 보관함 정산 에스크로' },
      { href: '/guide/basic/economy', title: '재화·교환·ATM', description: '물물교환 상인의 네 메뉴, 돈주머니와 츄르 환전', keywords: '돈보내기 돈주머니 송금 pay 재화 물물교환 무지개물고기 금별 생활조각 강화조각 고급화분 작물교환 ATM 츄르 환전' },
      { href: '/guide/basic/requests', title: '의뢰', description: '일일·주간·월간 목표와 새로고침', keywords: '의뢰 퀘스트 일일 주간 월간 새로고침 보상' },
      { href: '/guide/basic/codi', title: '코디와 뽑기', description: '코디 선택권, 보유 필터와 장비 스킨의 내구도 보호', keywords: '코디 치장 뽑기 선택권 보유중 필터 도구스킨 방어구스킨 내구도 등급 외형 복구 추출기 마일리지 모자 날개' },
      { href: '/guide/basic/drawing', title: '그림 그리기', description: '그림 도구·색상환·음영, 작품 관리와 지도 출력', keywords: '그림 ChurPaint 자체 캔버스 저장 지도 작품 붓 에어브러시 그림자 빛 색상환 HEX RGB HSV 색혼합 액자 관람' },
      { href: '/guide/basic/diving-chair', title: '잠수 서버와 별 포인트', description: '전용 잠수 서버, 별 판매와 프리미엄 의자 등록', keywords: '잠수 이동 종료 AFK 별 창고 판매 포인트 프리미엄 의자 등록 꿈의조각 음성채널 디스코드' }
    ]
  },
  {
    title: '후원',
    eyebrow: 'SUPPORT',
    entries: [
      { href: '/support/membership', title: '츄르냥 멤버십', description: '등급별 가격, 즉시 이동, 수리와 로얄 편의 기능', keywords: '후원 멤버십 츄르냥 골드츄르냥 로얄츄르냥 혜택 이용권 수리 한글닉네임 가방27칸 vip' },
      { href: '/guide/basic/benefits', title: '등급 혜택 비교', description: '기본·츄르냥·골드·로얄 등급의 편의 기능 비교', keywords: '등급 혜택 비교 rtp 홈 잠금 제작대 back 수리 가방 비행' }
    ]
  },
  {
    title: '전투·모험',
    eyebrow: 'COMBAT & ADVENTURE',
    entries: [
      { href: '/combat/tower', title: '더 타워', description: '1~4인이 도전하는 30층 전투·장비 성장 콘텐츠', keywords: '더타워 탑 30층 파티 입장권 횟수 난이도 증강 유물 장비 장신구 천장 공명 강화 규율 랭킹전', icon: 'lifeblacksmith.png' },
      { href: '/combat/echoes', title: '잔향록', description: '행동·원정·전투·동료를 성장시키는 서버 판정형 RPG', keywords: '잔향록 지역 행동 원정 오프라인 창고 장비 일식보관층 기록과제 표본 작업장 동료 공명', icon: 'lifeknowledge.png' }
    ]
  },
  {
    title: '생활 콘텐츠',
    eyebrow: 'LIFE CONTENTS',
    entries: [
      { href: '/life/miner', title: '광부', description: '광석, 광맥, 발광 윤곽선 감지와 액티브 스킬', keywords: '채광 광산 광맥 스캔 윤곽선 광석감지 단축키 각성', icon: 'lifemine.png' },
      { href: '/life/fisher', title: '어부', description: '낚시 미니게임, 보물과 파츠 제작·관리', keywords: '낚시 물고기 파츠 바늘 줄 릴 수명 옵션 재설정 타이밍 균형 화살표 보물', icon: 'lifefish.png' },
      { href: '/life/farmer', title: '농부', description: '커스텀 작물, 농사 장비, 급수 물탱크와 액티브 스킬', keywords: '농사 작물 씨앗 수확 숙련 경험치 화분 청크 100 제한 계절 봄 여름 가을 겨울 물뿌리개 스프링클러 스프링쿨러 물탱크 급수 자동급수 고정성장 성장속도 신비한수액 철블록 비닐하우스 허수아비 단축키', icon: 'lifefarm.png' },
      { href: '/life/woodcutter', title: '나무꾼', description: '마을 재배 나무, 일곱 스킬·스탯과 야생 벌목', keywords: '벌목 나무 커스텀 고목 도끼 강인한도끼 목재잔재 숲의분노 되살아나는숲 금빛수관 연속참격 숲의파동 스탯 재식재 묘목 2x2 황금원목 신비한수액 지역활력', icon: 'lifewoodcutter.png' }
    ]
  },
  {
    title: '생산 콘텐츠',
    eyebrow: 'PRODUCTION',
    entries: [
      { href: '/life/chef', title: '요리사', description: '손질도마·후라이팬·냉장고 설치와 조리·완성품 수령', keywords: '생산 요리 주방 손질도마 손질칼 후라이팬 냉장고 재료 공급 자동배출 조리 품질 음식 마나 회복 배부름 뒤집개 보조손', icon: 'lifecook.png' },
      { href: '/life/blacksmith', title: '대장술', description: '제련, 제작, 재료 절약과 추가 결과물', keywords: '생산 대장장이 대장술 제련 제작 화로 모루', icon: 'lifeblacksmith.png' }
    ]
  },
  {
    title: '생활·생산 안내',
    eyebrow: 'LIFE GUIDE',
    entries: [
      { href: '/life/growth', title: '성장 구조', description: '공용 성장, 스탯과 직접·확장·유효 스킬 랭크', keywords: '근로 지식 감각 행운 스탯 투자 포인트 직접20 확장25 유효35 스킬확장 생산', icon: 'lifework.png' },
      { href: '/life/recipes', title: '생활 제작법', description: '재료 자동 배치, 6칸 대기열과 생활 제작법', keywords: '제작법 조합법 재료 자동배치 좌클릭 우클릭 대기열 작업대 흔한 화로 물뿌리개 스프링클러 생활 조각 강화석 큐브 드라코라이트', icon: 'lifeblacksmith.png' },
      { href: '/life/equipment', title: '장비·강화·큐브', description: '드라코라이트 별 강화 수치와 강화 단계별 큐브 적용등급', keywords: '드라코라이트 소유권 각인 장비스탯 스탯분배 강화석 별강화 장비강화 큐브 재설정 보존 저장잠재등급 적용등급 큐브적용상한 +0 +3 +5 +8 레어 에픽 유니크 레전드리 가열', icon: 'lifesense.png' },
      { href: '/life/codex', title: '생활 도감', description: '8개 대분류 150종 등록과 영구 보상', keywords: '생활 도감 수집 등록 보상 광부 농부 어부 요리사 나무꾼 생존 기타 방어구 고대도시 시련 고고학 허기 마나 체력', icon: 'lifeknowledge.png' },
      { href: '/life/systems', title: '주요 시스템', description: '스킬 랭크, 지역 활력, 생활 조각과 장비 성장', keywords: '스킬랭크 지역활력 작업대 화로 의뢰 도감 생활조각 파편 강화석 마나 큐브 장비 생산 요일 경험치', icon: 'lifeknowledge.png' },
      { href: '/life/faq', title: '생활·생산 FAQ', description: '생활·생산 콘텐츠 자주 묻는 질문', keywords: '질문 도움 생산' },
      { href: '/guide/life', title: '생활·생산 통합 가이드', description: '운영진이 실시간으로 갱신하는 생활·생산 안내', keywords: '생활 생산 통합 안내 실시간 가이드' }
    ]
  },
  {
    title: '서버 안내',
    eyebrow: 'SERVER INFO',
    entries: [
      { href: '/notice', title: '위키 이용 안내', description: '전체 목차와 현재 제공하는 문서 안내', keywords: '위키 목차 안내 찾기' },
      { href: '/rules', title: '서버 규칙', description: '마인크래프트와 디스코드에서 함께 지켜야 할 이용 기준', keywords: '규칙 경고 정지 차단 제재 신고 무고 디스코드 개인 DM 괴롭힘 PVP 테러 사기 거래 도박 시세조작 버그 모드 매크로 계정공유 공장 자동화 레드스톤 피스톤 수레 호퍼 채굴 평지화 동물 스포너 스킨 닉네임' },
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
