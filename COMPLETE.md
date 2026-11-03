# 완료 기록

## 완료 이력

- 2026-11-03: 별도 taskdo-web 폴더에 추가 의존성 없는 홈페이지·개인정보처리방침·이용약관과 자체 호스팅 이미지·글꼴을 작성했다. 실제 날짜의 1–4주 달력 체험, 앱 화면 전환과 Mac·Windows 미리보기 다운로드 구성을 포함했다.
- 2026-11-03: 공개 taskdo-web 저장소와 GitHub Pages를 게시했다. 앱 소스는 기존 비공개 TaskDo 저장소에 유지했다.
- 2026-11-03: 앱 소스 16b0a68 기준 Mac Apple Silicon·Windows x64 0.10.0 미리보기를 GitHub Release로 공개했다. SHA-256·라이선스 고지·검증 상태 파일을 포함했다.
- 2026-11-03: Chrome에서 390·768·1440px 화면, 1–4주 달력·주 이동·갤러리 키보드 조작·정책 이동을 확인했다. 태블릿 날짜 줄바꿈과 모바일 정책 표 너비를 수정했다.

- 2026-11-03: 사용자 제공 Search Console HTML 소유권 확인 파일을 Pages 루트에 원본 그대로 추가하고 인증 파일 유지·OAuth 심사 구분을 문서화했다.

## 현재 진행

- 홈페이지: https://ghdic.github.io/taskdo-web/
- 개인정보처리방침: https://ghdic.github.io/taskdo-web/privacy/
- 이용약관: https://ghdic.github.io/taskdo-web/terms/
- 다운로드: https://github.com/ghdic/taskdo-web/releases/tag/v0.10.0
- 세 페이지 HTTPS 200, 네 릴리스 파일의 비로그인 부분 다운로드 206과 ZIP 헤더를 확인했다. 업로드 크기·GitHub 서버 SHA-256도 로컬 파일과 일치한다.
- 정적 HTML 검사: 3페이지·로컬 링크 38개 통과. JavaScript 문법 검사 통과. 디자인 소스 lint는 실패 0개이며 ISO 날짜의 padStart(2, '0') 경고 1개는 유효한 날짜 포맷 처리다. 브라우저 콘솔 오류는 없었다.
- 화면별 가로 넘침 없음. 태블릿 날짜는 한 줄, 모바일 개인정보 표는 342px 안에 표시된다. 스크린샷은 Git에서 제외한 artifacts/qa에 보관한다. 개발 서버와 별도 CDP 검사기는 실행하지 않았다.
- 두 ZIP CRC 검사·개인 DB/작업 데이터 제외를 확인했다. Mac은 기존 MacroKit 서명·엄격 검증을 통과한 배포본이다. Windows는 Windows SDK 트리밍 경고를 피하도록 트리밍 없이 교차 빌드했고 최종 빌드 경고는 없었다.

## 남은 검증·제약

- Windows 실제 실행·Store 결제, 실제 Google OAuth/Drive와 두 실기기 동기화는 미검증이다. Mac 공증과 Windows 코드 서명은 미완료다.
- 판매 URL·Store 상품 ID·라이선스 발급 공개키가 준비되지 않아 현재 미리보기에서 구매와 Pro 동기화는 잠겨 있다.
- OAuth 정식 도메인 인증은 Google Cloud 설정에서 별도로 진행한다. 현재 공식 안내는 DNS TXT를 통한 Search Console Domain property 검증을 요구하므로 기본 GitHub Pages 주소만으로 심사 통과를 보장하지 않는다. 직접 소유한 도메인을 연결하는 경우 OAUTH_SETUP.md의 URL도 함께 변경한다.

## Search Console HTML 확인 파일

- 추가 파일: google5880cf420efa6ac1.html. 원본 바이트 일치를 확인했다.
- GitHub Pages 게시 완료. https://ghdic.github.io/taskdo-web/google5880cf420efa6ac1.html 에서 비로그인 HTTP 200·리디렉션 없음·원본 53바이트 일치를 확인했다. Search Console의 확인 버튼 및 OAuth 재심사는 아직 실행하지 않았다.
