# 이력서 웹사이트

## 파일 구조

```
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # JavaScript 기능
├── config.js           # 설정 파일 (텍스트/이미지 변경용)
├── profile.png         # 프로필 이미지 (메타데이터 제거됨)
└── README.md           # 사용법 안내
```

## GitHub Pages 배포

1) 저장소 생성 및 푸시
```
git init
git add .
git commit -m "feat: resume site initial"
git branch -M main
git remote add origin https://github.com/<YOUR_ID>/<YOUR_REPO>.git
git push -u origin main
```

2) Pages 설정
- GitHub 저장소 → Settings → Pages
- Source: Deploy from a branch
- Branch: main / root 선택 → Save

3) 배포 URL 확인
- `https://<YOUR_ID>.github.io/<YOUR_REPO>/`

참고
- `.nojekyll` 포함: Jekyll 처리 비활성화
- 파비콘 404 방지: `profile.png`를 `<link rel="icon">`으로 사용
- 상대 경로 사용: 루트/서브패스 모두 호환

## 사용법

### 1. 기본 설정
1. `profile.png` 파일을 프로젝트 폴더에 추가하세요
2. `config.js` 파일을 열어서 개인 정보를 수정하세요

### 2. 개인 정보 수정 (`config.js`)

#### 기본 정보
```javascript
profile: {
    name: "홍길동",                    // 이름
    email: "hong@example.com",         // 이메일
    profileImage: "profile.png",       // 프로필 이미지 파일명
    socialLinks: {
        github: "https://github.com/username",
    }
}
```

#### 자기소개
```javascript
introduce: {
    content: `여기에 자기소개를 작성하세요...`
}
```

#### 스킬
```javascript
skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript"],
    frameworks: ["Spring Boot", "Nest.js", "FastAPI"],
    infrastructure: ["AWS", "Docker"],
    tools: ["VS Code", "Git"],
    misc: ["DevOps"]
}
```

#### 경력
```javascript
experience: {
    totalExperience: "총 0년 10개월",
    companies: [
        {
            name: "회사명",
            period: "2024. 09 ~",
            duration: "0년 10개월",
            isCurrent: false,
            positions: [
                {
                    period: "2025. 03 ~",
                    title: "백엔드 개발자",
                    description: [
                        "API 개발 및 설계",
                        "실시간 데이터 처리"
                    ],
                    skills: "TypeScript Nest.js MongoDB Kafka Nginx"
                }
            ]
        }
    ]
}
```

### 3. 웹사이트 실행
1. 모든 파일을 같은 폴더에 저장
2. `index.html` 파일을 웹브라우저로 열기
3. 또는 로컬 서버 실행:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server 설치 필요)
   npx http-server
   ```

## 주요 기능

### 디자인 특징
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원
- **깔끔한 레이아웃**: 원본과 동일한 디자인
- **인쇄 최적화**: Ctrl+P로 인쇄 시 최적화된 레이아웃

### 인터랙션 기능
- **다크모드**: 우측 상단 버튼으로 다크/라이트 모드 전환
- **스크롤 애니메이션**: 섹션이 화면에 나타날 때 부드러운 애니메이션
- **이메일 복사**: 이메일 클릭 시 클립보드에 자동 복사
- **스킬 호버 효과**: 스킬 태그에 마우스 오버 시 확대 효과
- **모바일 네비게이션**: 모바일에서 하단에 섹션 네비게이션 표시

### 반응형 지원
- **데스크톱**: 1200px 이상
- **태블릿**: 768px ~ 1199px
- **모바일**: 767px 이하

## 커스터마이징

### 색상 변경
`style.css` 파일에서 다음 변수들을 수정하세요:
```css
/* 주요 색상 */
--primary-color: #3498db;      /* 파란색 */
--text-color: #333;            /* 텍스트 색상 */
--background-color: #fff;      /* 배경색 */
--border-color: #eee;          /* 테두리 색상 */
```

### 폰트 변경
`index.html`의 `<head>` 섹션에서 Google Fonts 링크를 수정하세요:
```html
<link href="https://fonts.googleapis.com/css2?family=원하는폰트:wght@300;400;500;700&display=swap" rel="stylesheet">
```

### 섹션 추가/제거
1. `index.html`에서 원하는 섹션을 추가/제거
2. `config.js`에서 해당 데이터 추가/제거
3. `style.css`에서 스타일 추가 (필요시)

## 인쇄 설정

- **Ctrl+P** (Windows) 또는 **Cmd+P** (Mac)로 인쇄
- 인쇄 시 자동으로 최적화된 레이아웃으로 변환
- 불필요한 요소들은 자동으로 숨겨짐

## 문제 해결

### 프로필 이미지가 안 보여요
- `profile.png` 파일이 HTML 파일과 같은 폴더에 있는지 확인
- 파일명이 `config.js`의 `profileImage` 값과 일치하는지 확인

### 스타일이 적용되지 않아요
- `style.css` 파일이 올바른 경로에 있는지 확인
- 브라우저 캐시를 새로고침 (Ctrl+F5)

### JavaScript 기능이 작동하지 않아요
- 브라우저 개발자 도구(F12)에서 콘솔 에러 확인
- `config.js`와 `script.js` 파일이 올바른 경로에 있는지 확인

## 라이선스

이 프로젝트는 MIT 라이선스 하에 제공됩니다.
