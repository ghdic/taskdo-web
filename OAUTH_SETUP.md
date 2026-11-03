# Google OAuth 브랜딩 입력값

| 입력란 | 값 |
|---|---|
| 앱 이름 | TaskDo |
| 지원/개발자 이메일 | ghdic77@gmail.com |
| 홈페이지 | https://ghdic.github.io/taskdo-web/ |
| 개인정보처리방침 | https://ghdic.github.io/taskdo-web/privacy/ |
| 이용약관 | https://ghdic.github.io/taskdo-web/terms/ |
| 기본 Pages 주소의 도메인 부분 | ghdic.github.io |
| 로고 파일 | assets/taskdo.png |

127.0.0.1은 데스크톱 OAuth의 일회성 loopback 응답 주소다. 공개 홈페이지나 승인된 도메인으로 입력하지 않는다. Desktop 클라이언트와 웹 사이트 도메인 설정을 혼동하지 않는다.

주의: GitHub Pages 기본 주소를 게시하는 것과 Google OAuth의 정식 도메인 검증은 다르다. 현재 Google 심사 안내는 Search Console의 Domain property를 DNS TXT로 검증하도록 요구한다. github.io 하위 주소의 DNS는 GitHub가 관리하므로, 정식 심사에는 직접 DNS를 관리하는 보유 도메인을 Pages에 연결하고 그 도메인을 검증해야 할 수 있다. 단순 HTML 태그/URL-prefix 인증으로 OAuth 심사가 보장된다고 안내하지 않는다.

도메인을 연결한 뒤 홈페이지·privacy·terms URL, canonical·사이트맵·브랜딩 URL과 승인된 도메인을 함께 변경한다. GitHub Pages가 계속 호스팅하므로 별도 앱 서버는 필요 없다.

공식 안내:
- https://support.google.com/cloud/answer/15549049
- https://support.google.com/cloud/answer/13804266
- https://developers.google.com/identity/protocols/oauth2/native-app
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
