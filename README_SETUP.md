# 츄르월드 프리미엄 Astro 킷

이 압축은 **기존 Astro 프로젝트에 덮어쓰기**해서 쓰는 버전입니다.

## 1. 필요한 패키지 설치
PowerShell에서 프로젝트 폴더로 들어간 뒤:

```powershell
npm.cmd install @supabase/supabase-js marked
```

## 2. 파일 덮어쓰기
압축 안의 `src`, `public`, `supabase`, `.env.example` 파일을
기존 `churworld-site` 프로젝트에 복사해서 덮어쓰기하세요.

## 3. Supabase 만들기
1. Supabase 프로젝트 생성
2. SQL Editor에서 `supabase/schema.sql` 실행
3. Authentication > Providers 에서 Email 로그인 사용
4. Authentication > Users 에서 **본인 관리자 계정** 생성
5. SQL Editor에서 아래처럼 본인 이메일을 관리자 테이블에 추가

```sql
insert into public.admin_emails(email) values ('본인메일@example.com');
```

## 4. 환경변수 설정
프로젝트 루트에 `.env` 파일을 만들고 아래처럼 입력:

```env
PUBLIC_SUPABASE_URL=여기에_프로젝트_URL
PUBLIC_SUPABASE_ANON_KEY=여기에_anon_key
```

Vercel에도 같은 값을 넣어야 합니다.
- Vercel > Project > Settings > Environment Variables

## 5. 로컬 실행
```powershell
npm.cmd run dev
```

## 6. 관리자 페이지
배포 후 또는 로컬에서 아래 주소로 접속:
- `/admin`

여기서 로그인하면 아래 문서를 **배포 없이 바로 수정**할 수 있습니다.
- 공지
- 이용 약관
- 츄르월드 규칙
- 명령어 모음
- 기본 콘텐츠 가이드
- 생활 콘텐츠 가이드

## 7. 수정 반영 방식
이 버전은 문서 내용을 Supabase DB에서 실시간으로 불러옵니다.
그래서 **문서 수정은 재배포 없이 바로 반영**됩니다.
홈페이지 디자인 파일 자체를 바꾸는 건 여전히 코드 수정이 필요합니다.

## 8. 추천 운영 방식
- 자주 바뀌는 텍스트: 관리자 페이지에서 수정
- 디자인/레이아웃 변경: VS Code에서 코드 수정 후 GitHub Push
