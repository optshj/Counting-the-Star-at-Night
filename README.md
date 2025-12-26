# ✨별 보러갈래! ✨

[별 보러갈래 서비스 링크](https://watchstar.vercel.app/)

🌌 별빛 가득한 밤하늘, 어디서 봐야 가장 아름다울까요?

**별 보러갈래**는 당신의 완벽한 별 관측을 돕기 위해 탄생한 특별한 웹 앱이에요!

💫 실시간 날씨 정보와 달의 위상을 분석해서, 반짝이는 별들을 가장 잘 볼 수 있는 최적의 순간과 장소를 알려드릴게요.

## 🌟 별 보러갈래의 기능들

- **나만의 별 관측 점수!** 🌠: 현재 날씨(구름, 습도, 시정)와 달의 상태를 꼼꼼히 확인해서, 당신이 별을 얼마나 선명하게 볼 수 있을지 점수로 알려드려요!
- **오늘 밤 달은 무슨 모양일까?** 🌕: 삭, 초승달, 보름달... 매일 변하는 달의 위상을 정확하게 계산해서 밤하늘이 얼마나 어두울지 예측해 드립니다.
- **실시간 날씨 정보 🌤️:** OpenWeatherMap API로 현재 위치의 상세한 날씨를 한눈에! 구름 없는 맑은 하늘을 찾아보세요.
- **숨겨진 별 명소 찾기 🗺️:** 카카오맵과 함께 별 보기 좋은 멋진 장소들을 발견하고 찾아갈 수 있어요. 당신만의 비밀스러운 별빛 아지트를 찾아보세요!
- **환상적인 UI 경험 ✨:** 아름다운 '별 궤적(Star Trails)' 배경과 부드러운 화면 전환으로 앱을 사용하는 내내 황홀경을 선사합니다.

## 🛠️ 'Counting'은 이렇게 만들어졌어요!

최신 기술들을 활용해 사용자 친화적인 경험을 제공합니다:

- **프레임워크:** ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) [React 19](https://react.dev/) - 빠르고 반응성 좋은 사용자 인터페이스를 위해!
- **빌드 도구:** ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) [Vite](https://vitejs.dev/) - 개발 속도를 높여주는 똑똑한 도구!
- **언어:** ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) [TypeScript](https://www.typescriptlang.org/) - 안정적이고 확장성 있는 코드를 위해!
- **스타일링:** ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) [Tailwind CSS 4](https://tailwindcss.com/) - 깔끔하고 예쁜 디자인을 쉽고 빠르게!
- **라우팅:** [React Router DOM 7](https://reactrouter.com/) - 매끄러운 페이지 이동을 위해!
- **지도:** [react-kakao-maps-sdk](https://react-kakao-maps-sdk.jaewonkim.com/) - 한국 사용자에게 친숙한 카카오맵 연동!
- **아이콘:** ![Lucide](https://img.shields.io/badge/Lucide-222222?style=for-the-badge&logo=lucide&logoColor=white) [Lucide React](https://lucide.dev/) - 직관적이고 세련된 아이콘들!

## 📂 프로젝트 구조는요? (FSD 기반)

저희 프로젝트는 깔끔하고 효율적인 [Feature-Sliced Design (FSD)](https://feature-sliced.design/) 아키텍처를 따르고 있어요. 덕분에 코드를 쉽게 이해하고 확장할 수 있답니다!

```
src/
├── app/          # 앱의 핵심 설정과 전역 스타일
├── pages/        # 각 페이지(홈, 장소 등)를 구성하는 곳
├── widgets/      # 앱의 특정 기능을 담당하는 UI 블록 (헤더, 푸터 등)
├── entities/     # 핵심 데이터와 로직 (날씨, 달, 장소 정보 등)
└── shared/       # 여러 곳에서 재사용되는 유틸리티, 컴포넌트, 타입들
```
