create extension if not exists pgcrypto;

create table if not exists public.admin_emails (
  email text primary key,
  created_at timestamptz not null default now()
);

create table if not exists public.site_pages (
  slug text primary key,
  nav_title text not null,
  page_title text not null,
  excerpt text,
  content_md text not null,
  updated_at timestamptz not null default now()
);

alter table public.admin_emails enable row level security;
alter table public.site_pages enable row level security;

-- 기존 정책 삭제
DO $$
BEGIN
  DROP POLICY IF EXISTS "admin email can view own row" ON public.admin_emails;
  DROP POLICY IF EXISTS "public can read pages" ON public.site_pages;
  DROP POLICY IF EXISTS "admins can insert pages" ON public.site_pages;
  DROP POLICY IF EXISTS "admins can update pages" ON public.site_pages;
  DROP POLICY IF EXISTS "admins can delete pages" ON public.site_pages;
END $$;

create policy "admin email can view own row"
on public.admin_emails
for select
to authenticated
using (email = (auth.jwt() ->> 'email'));

create policy "public can read pages"
on public.site_pages
for select
to anon, authenticated
using (true);

create policy "admins can insert pages"
on public.site_pages
for insert
to authenticated
with check (
  exists (
    select 1
    from public.admin_emails ae
    where ae.email = (auth.jwt() ->> 'email')
  )
);

create policy "admins can update pages"
on public.site_pages
for update
to authenticated
using (
  exists (
    select 1
    from public.admin_emails ae
    where ae.email = (auth.jwt() ->> 'email')
  )
)
with check (
  exists (
    select 1
    from public.admin_emails ae
    where ae.email = (auth.jwt() ->> 'email')
  )
);

create policy "admins can delete pages"
on public.site_pages
for delete
to authenticated
using (
  exists (
    select 1
    from public.admin_emails ae
    where ae.email = (auth.jwt() ->> 'email')
  )
);

insert into public.site_pages (slug, nav_title, page_title, excerpt, content_md)
values
(
  'notice',
  '공지',
  '츄르월드 공지',
  '서버 업데이트, 이벤트, 점검 공지를 확인하는 공간',
  E'# 최근 공지\n\n## 홈페이지 1차 개편\n- 메인 화면 퀄리티 업그레이드\n- 관리자 전용 문서 수정 기능 추가\n- 가이드 페이지 구조 정리\n\n## 앞으로 추가 예정\n- 서버 스크린샷 갤러리\n- 디스코드 연결 버튼\n- 지도 / 상점 / 이벤트 섹션 보강\n'
),
(
  'terms',
  '이용 약관',
  '츄르월드 이용 약관',
  '서버 이용 전 꼭 확인해야 하는 기본 약관',
  E'# 이용 약관\n\n츄르월드를 이용하는 모든 유저는 아래 내용을 확인하고 동의한 것으로 간주됩니다.\n\n## 1. 기본 원칙\n- 서버 운영 정책을 존중해야 합니다.\n- 운영 안정성을 해치는 행위는 제한될 수 있습니다.\n\n## 2. 계정 및 이용 제한\n- 제재 이력에 따라 서버 이용이 제한될 수 있습니다.\n- 심각한 악용 행위는 영구 차단될 수 있습니다.\n\n## 3. 정책 변경\n- 서버 상황에 따라 약관과 운영 정책은 변경될 수 있습니다.\n'
),
(
  'rules',
  '규칙',
  '츄르월드 규칙',
  '모든 유저가 지켜야 하는 기본 규칙',
  E'# 츄르월드 규칙\n\n## 기본 예절\n- 욕설, 비하, 도배 금지\n- 고의적인 분쟁 유도 금지\n- 운영진 안내 협조\n\n## 플레이 규칙\n- 타인 건축물 훼손 금지\n- 무단 약탈 / 트롤링 금지\n- 버그 악용 금지\n- 핵, 오토, 매크로 금지\n\n## 제재\n- 위반 정도에 따라 경고, 일시 정지, 영구 차단이 적용될 수 있습니다.\n'
),
(
  'commands',
  '명령어',
  '명령어 모음',
  '자주 쓰는 명령어를 정리한 페이지',
  E'# 명령어 모음\n\n## 기본 명령어\n- `/spawn` : 스폰으로 이동\n- `/home` : 집으로 이동\n- `/sethome` : 집 설정\n- `/warp` : 워프로 이동\n\n## 생활/편의 명령어\n- `/mail` : 우편함 확인\n- `/bag` : 가방 열기\n- `/guide` : 길라잡이 열기\n\n## 추후 추가\n서버 실제 명령어에 맞춰 계속 수정하세요.\n'
),
(
  'guide-basic',
  '기본 콘텐츠',
  '기본 콘텐츠 가이드',
  '서버 및 월드, 마을, 상점 등 기본 시스템 안내',
  E'# 기본 콘텐츠\n\n## 서버 및 월드\n서버의 전체 흐름과 월드 구조를 안내하는 구간입니다.\n\n## 마을\n마을 참여, 정착, 이용 방법을 안내하세요.\n\n## 엘리베이터\n엘리베이터 사용법과 설치법을 적어주세요.\n\n## 상점\n개인 상점 / 서버 상점 / 거래 방식을 정리하세요.\n\n## 가방\n가방 사용 방법, 해금 방식, 주의사항을 적어주세요.\n\n## 우편함\n우편 발송, 수령, 보관 방식 등을 적어주세요.\n\n## 길라잡이\n처음 온 유저가 참고할 동선과 메뉴를 정리하세요.\n'
),
(
  'guide-life',
  '생활 콘텐츠',
  '생활 콘텐츠 가이드',
  '숙련도, 강화, 제작, 경제, 도감 안내',
  E'# 생활 콘텐츠\n\n## 숙련도\n생활형 성장 시스템의 전체 구조를 설명하세요.\n\n### 농사\n농사 숙련도 성장 방식과 보상을 적어주세요.\n\n### 낚시\n낚시 숙련도, 물고기, 보상 구조를 정리하세요.\n\n### 채광\n채광 숙련도와 광물 보상 등을 적어주세요.\n\n### 요리\n요리 숙련도, 레시피, 제작 흐름을 적어주세요.\n\n## 강화\n장비나 생활 도구 강화 구조를 정리하세요.\n\n### 예시 항목\n- 생활 도구 강화\n- 장비 강화\n- 보호 / 실패 / 재료 시스템\n\n## 제작\n제작 레시피나 성장형 제작 시스템을 설명하세요.\n\n## 경제\n거래, 재화, 판매 구조를 정리하세요.\n\n## 도감\n수집형 시스템과 달성 보상을 정리하세요.\n'
)
on conflict (slug) do nothing;
