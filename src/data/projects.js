const projects = [
  {
    id: "astrolog",
    number: "04",
    title: "AstroLog",
    shortTitle: "AstroLog",
    type: "Astronomy Observation Service",
    description:
      "현재 위치와 기상·천문 데이터를 결합해 오늘 밤 관측할 천체를 추천하고, 실제 관측 기록과 천체 도감을 연결한 개인 천문 관측 서비스입니다.",
    overview:
      "AstroLog는 천체 정보를 보는 데서 끝나지 않고 '오늘의 밤하늘 → 천체 탐색 → 관측 → 기록 → 도감 완성'으로 이어지는 흐름을 구현한 개인 프로젝트입니다. 브라우저 위치 정보와 기상청 단기예보, Astronomy Engine과 SunCalc의 천문 계산을 결합해 관측 환경과 추천 시간대를 제공하고, Supabase를 활용해 인증·관측 기록·관심 천체·Private Storage 기반 이미지를 관리했습니다.",
    role: "Frontend Developer",
    year: "2026",
    period: "2026.08.28 - 2026.09.01",
    teamSize: "1명",
    image: "/images/project-4.png",

    featured: true,

    tech: ["Next.js", "React", "JavaScript", "Supabase", "Astronomy Engine", "SunCalc", "Vercel"],
    tools: ["Figma", "Git", "GitHub", "ChatGPT"],

    work: [
      "서비스 기획 및 UI 구현",
      "현재 위치 기반 관측 환경 계산",
      "기상청 단기예보 API 연동",
      "Astronomy Engine / SunCalc 기반 천문 계산",
      "Tonight's Highlights 추천 로직 구현",
      "Supabase Auth / Database / Storage / RLS 구성",
      "관측 기록 CRUD 및 Private Storage 이미지 처리",
      "천체 도감 / 개인 관측소 대시보드 구현",
      "Google OAuth 및 Vercel 배포",
      "SEO / Open Graph / sitemap / robots 설정",
    ],

    features: [
      {
        title: "오늘의 밤하늘",
        text: "현재 위치와 기상 데이터를 바탕으로 기온, 습도, 달 위상, 일몰·월출, 관측 적합도와 추천 관측 시간대를 제공합니다.",
      },
      {
        title: "Tonight's Highlights",
        text: "천체 고도와 밝기뿐 아니라 시간대별 구름량, 강수확률, 습도, 풍속, 달 조명률과 달과의 각거리까지 반영해 추천 천체와 시간대를 계산합니다.",
      },
      {
        title: "Observation & Collection",
        text: "실제 관측 기록과 사진을 저장하고, 기록된 천체를 기준으로 별도의 수집 테이블 없이 개인 천체 도감 진행률을 자동 계산합니다.",
      },
      {
        title: "My Observatory",
        text: "총 관측 횟수, 관측 천체 수, 누적 시간, 평균 만족도, 월별 기록, 최근 관측과 관심 천체를 한 화면에서 확인할 수 있습니다.",
      },
    ],

    troubleshooting: [
      {
        title: "Server Component와 브라우저 위치 정보 연결",
        problem:
          "Next.js Server Component에서는 navigator.geolocation을 사용할 수 없어 사용자의 현재 위치를 서버 기반 천문·기상 계산에 바로 활용할 수 없었습니다.",
        solution:
          "Client Component인 LocationInitializer에서 위치 권한을 요청하고 위도·경도를 Cookie에 저장한 뒤 router.refresh()를 실행했습니다. 서버에서는 Cookie를 읽어 현재 위치 기준 데이터를 계산하고, 위치 조회 실패 시 서울 좌표를 fallback으로 사용하도록 구성했습니다.",
      },
      {
        title: "실제 관측 환경을 반영한 추천 로직 개선",
        problem:
          "초기 추천은 천체 고도와 밝기 중심이라 구름이 많거나 달빛이 강한 상황에서도 높은 추천 결과가 나올 수 있었습니다.",
        solution:
          "시간대별 구름량, 강수확률, 강수 여부, 습도, 풍속, 달 조명률과 대상 천체-달 각거리를 추가했습니다. 별점은 천체 자체의 관측 가치로 유지하고 실제 날씨는 추천 순서와 관측 시간 선정에 반영해 역할을 분리했습니다.",
      },
      {
        title: "Supabase Private Storage 이미지 접근",
        problem:
          "개인 관측 사진을 Private Bucket에 저장하면 일반 public URL로는 브라우저에서 이미지를 표시할 수 없었습니다.",
        solution:
          "DB에는 Storage 내부 경로만 저장하고 화면 출력 시 createSignedUrl()로 임시 접근 URL을 생성했습니다. URL 생성이나 이미지 로드가 실패할 경우 SafeImage를 통해 fallback 이미지를 표시하도록 예외 처리했습니다.",
      },
      {
        title: "RLS Policy와 Table Grant 권한 문제",
        problem: "RLS Policy를 설정한 뒤에도 일부 Supabase 테이블 요청이 권한 문제로 실패했습니다.",
        solution:
          "RLS Policy와 PostgreSQL Table Grant가 별개의 권한 체계임을 확인하고 필요한 GRANT 권한과 사용자별 RLS 정책을 함께 설정해 데이터 접근을 정상화했습니다.",
      },
    ],

    learned: [
      "Next.js의 Server / Client Component 경계를 고려해 브라우저 전용 정보와 서버 계산을 연결하는 방법을 경험했습니다.",
      "외부 기상 데이터와 천문 계산 결과를 결합하면서 단순 API 출력이 아닌 서비스 목적에 맞는 추천 로직을 설계했습니다.",
      "Supabase Auth, Database, RLS, Private Storage를 연결하며 사용자별 데이터를 안전하게 다루는 흐름을 구현했습니다.",
      "ChatGPT를 기획 보조, 로직 검토, 코드 개선과 디버깅에 활용하되 실제 동작과 데이터 흐름을 직접 검증하며 개발했습니다.",
      "배포 이후 OAuth Redirect, 환경변수, SEO와 오류 fallback까지 점검하면서 로컬 구현 이후의 운영 환경을 경험했습니다.",
    ],

    result:
      "Next.js 기반 개인 프로젝트로 기획부터 UI, 외부 API, 천문 계산, 인증, 데이터베이스, Storage, SEO, 배포까지 하나의 서비스 흐름으로 완성했습니다. 특히 위치·기상·천문 데이터를 실제 사용자 관측 경험과 연결하면서 데이터 기반 기능을 서비스 UX로 구성하는 경험을 얻었습니다.",

    github: "https://github.com/RaeChoe/astrol-log",
    live: "https://astrol-log-woad.vercel.app",

    screens: [
      {
        title: "Today & Tonight's Highlights",
        image: "/images/project4-today.png",
        description:
          "현재 위치의 관측 환경과 달 위상, 일몰·월출, 관측 적합도를 제공하고 실제 기상·천문 조건을 반영한 Tonight's Highlights와 주간 천문 이벤트를 보여줍니다.",
      },
      {
        title: "Explore",
        image: "/images/project4-explore.png",
        description:
          "40개의 천체를 검색·분류하고 관심 천체와 관측 완료 상태를 함께 확인할 수 있는 천체 탐색 화면입니다.",
      },
      {
        title: "Object Detail",
        image: "/images/project4-object-detail.png",
        description:
          "천체 기본 정보와 현재 고도·방위·관측 조건을 위치 기준으로 계산하고, 관심 등록과 관측 기록 흐름으로 연결합니다.",
      },
      {
        title: "Collection",
        image: "/images/project4-collection.png",
        description:
          "실제 관측 기록을 기준으로 태양계, Messier Objects, 별 컬렉션의 수집 진행률과 관측 여부를 자동으로 계산합니다.",
      },
      {
        title: "My Observatory",
        image: "/images/project4-observatory.png",
        description:
          "사용자의 관측 통계, 도감 진행률, 월별 관측 기록, 최근 관측과 관심 천체를 한 화면에 정리한 개인 대시보드입니다.",
      },
    ],
  },

  {
    id: "estsoft",
    number: "01",
    title: "ESTsoft 과정 소개 사이트 리뉴얼",
    shortTitle: "ESTsoft Renewal",
    type: "Landing Page Renewal",
    description:
      "HTML/CSS 기반 1차 팀 프로젝트를 완성한 뒤, 기존 구조를 유지하면서 UI와 인터랙션을 개인적으로 추가 리뉴얼했습니다.",
    overview:
      "ESTsoft 교육 과정 소개 사이트를 팀 프로젝트로 리뉴얼한 작업입니다. 당시에는 HTML과 CSS를 중심으로 콘텐츠 구조와 반응형 랜딩 페이지를 구현했고, 이후 다른 프로젝트를 진행하며 쌓은 경험을 바탕으로 기존 결과물을 다시 점검해 개인 리뉴얼을 진행했습니다. 기존 기획과 HTML/CSS 중심의 구조는 유지하면서 Header Navigation, Scroll Reveal, FAQ 인터랙션을 보완하고 커리큘럼 영역에는 Swiper.js를 적용해 사용성과 코드 구조를 개선했습니다.",
    role: "Frontend Lead · Personal Renewal",
    year: "2026",
    period: "2026.04.30 - 05.12 / 2026.09 Renewal",
    teamSize: "5명",
    image: "/images/project-1.png",

    tech: ["HTML", "CSS", "JavaScript", "Swiper.js"],

    work: [
      "팀 프로젝트 Benefits 영역 구현",
      "팀 프로젝트 Event 영역 구현",
      "팀 프로젝트 PR 콘텐츠 영역 구현",
      "반응형 레이아웃 및 웹 표준·접근성 고려",
      "프로젝트 종료 후 전체 UI 개인 리뉴얼",
      "Header Navigation 활성 상태 및 Scroll Reveal 개선",
      "커리큘럼 Slider를 Swiper.js 기반으로 전환",
      "FAQ 독립 열기 / 닫기 애니메이션 및 모션 접근성 보완",
    ],

    features: [
      {
        title: "Responsive Layout",
        text: "다양한 화면 크기에 맞춰 콘텐츠 구조가 자연스럽게 변하도록 반응형 UI를 구현하고, 개인 리뉴얼 과정에서 모바일 레이아웃과 간격을 다시 정리했습니다.",
      },
      {
        title: "Personal Renewal",
        text: "초기 팀 프로젝트의 기획과 HTML/CSS 구조를 유지하면서 Header, Hero, 후기, 강사진, FAQ 등 전체 UI를 다시 점검하고 개선했습니다.",
      },
      {
        title: "Curriculum Swiper",
        text: "직접 transform 값을 계산하던 커리큘럼 슬라이더를 Swiper.js 12로 전환하고, 현재 슬라이드와 상단 Progress가 함께 변경되도록 연동했습니다.",
      },
      {
        title: "Progressive Interaction",
        text: "IntersectionObserver 기반 Scroll Reveal, 현재 섹션 Navigation 표시, FAQ 애니메이션 등 JavaScript를 사용자 경험을 보조하는 인터랙션 중심으로 적용했습니다.",
      },
    ],

    troubleshooting: [
      {
        title: "기존 CSS와 리뉴얼 스타일 충돌 해결",
        problem:
          "기존 팀 프로젝트 CSS 위에 리뉴얼 스타일을 추가하면서 커리큘럼 진행선과 구분선처럼 이전 스타일과 새 스타일이 동시에 적용되는 충돌이 발생했습니다.",
        solution:
          "기존 구조를 전부 다시 작성하지 않고 충돌 지점을 확인해 renewal.css에서 선택자 범위를 명확히 하고 필요한 속성을 재정의했습니다. 특히 커리큘럼 영역은 Swiper 구조에 맞게 스타일을 분리해 기존 코드와 리뉴얼 코드의 역할을 구분했습니다.",
      },
      {
        title: "커리큘럼 슬라이더 구조 개선",
        problem:
          "기존 슬라이더는 JavaScript에서 직접 translate3d 값을 계산해 이동시키는 방식이라 슬라이드 이동과 상단 진행 상태를 함께 관리해야 했고 관련 코드가 복잡해졌습니다.",
        solution:
          "Swiper.js 12로 슬라이더를 전환하고 slideChange 이벤트를 이용해 현재 슬라이드와 Progress UI를 동기화했습니다. Navigation 버튼과 모바일 Swipe, Keyboard Navigation을 활용할 수 있도록 구성하면서 직접 관리해야 하는 슬라이더 로직을 줄였습니다.",
      },
      {
        title: "FAQ 기본 구조를 유지한 애니메이션 개선",
        problem:
          "HTML details/summary를 사용하면 JavaScript 없이도 기본적인 FAQ 동작은 가능하지만, 닫힐 때 답변이 즉시 사라져 전환이 부자연스러웠습니다.",
        solution:
          "details/summary 구조는 유지하면서 Web Animations API로 질문과 답변의 실제 높이를 계산해 열림과 닫힘을 부드럽게 처리했습니다. 각 FAQ는 독립적으로 동작하도록 구성하고 prefers-reduced-motion 환경에서는 애니메이션 없이 즉시 전환되도록 처리했습니다.",
      },
      {
        title: "현재 섹션을 반영하는 Navigation 구현",
        problem:
          "기존 Anchor Navigation은 원하는 섹션으로 이동할 수는 있었지만 사용자가 현재 어느 섹션을 보고 있는지 Header에서 확인하기 어려웠습니다.",
        solution:
          "스크롤 위치와 각 Section의 위치를 비교해 현재 영역에 대응하는 Navigation에 active Class와 aria-current 속성을 적용했습니다. 링크를 직접 클릭했을 때도 활성 상태가 즉시 반영되도록 동기화했습니다.",
      },
    ],

    learned: [
      "첫 프로젝트를 다시 살펴보며 새로운 기술로 전부 다시 만드는 것보다 기존 코드의 문제를 읽고 필요한 부분을 개선하는 리팩토링 과정의 중요성을 경험했습니다.",
      "HTML과 CSS만으로 가능한 부분은 기본 기능을 우선 활용하고, JavaScript는 Navigation 동기화나 애니메이션처럼 사용자 경험을 보조하는 역할에 제한했습니다.",
      "직접 구현한 Slider와 라이브러리 방식을 비교하면서 복잡한 이동 기능은 Swiper.js에 맡기고 프로젝트에 필요한 Progress 상태 연동만 직접 구현하는 방식이 유지보수에 유리하다는 점을 배웠습니다.",
      "IntersectionObserver와 requestAnimationFrame을 활용하며 스크롤 기반 인터랙션을 무조건 이벤트마다 처리하기보다 필요한 시점에 효율적으로 갱신하는 방식을 경험했습니다.",
      "팀 프로젝트 당시의 결과물과 이후 개인 리뉴얼을 비교하면서 반응형 구조, 접근성, CSS 설계와 인터랙션 구현에서의 성장을 확인할 수 있었습니다.",
    ],

    result:
      "첫 팀 프로젝트 결과물을 그대로 보관하는 대신 이후 프로젝트에서 학습한 내용을 다시 적용해 개인 리뉴얼까지 진행했습니다. 기존 HTML/CSS 중심의 구조와 팀 프로젝트의 기획 의도는 유지하면서 UI, 반응형, 접근성, Navigation, FAQ와 커리큘럼 인터랙션을 개선해 초기 결과물을 현재의 개발 기준으로 다시 다듬었습니다.",

    github: "https://github.com/RaeChoe/ESTFE13_1st_Project_personal",

    live: "https://raechoe.github.io/ESTFE13_1st_Project_personal/",
  },

  {
    id: "rounz",
    number: "02",
    title: "ROUNZ 쇼핑몰 구현",
    shortTitle: "ROUNZ",
    type: "E-Commerce Website",
    description:
      "쇼핑몰 상품 탐색부터 상세 정보 확인까지 JavaScript 기반의 인터랙티브 UI를 구현했습니다.",
    overview:
      "패션 브랜드 ROUNZ의 쇼핑몰 UI를 참고하여 JavaScript 기반으로 구현한 팀 프로젝트입니다. 상품 목록과 상세 정보, 옵션 선택 등 실제 쇼핑몰에서 사용되는 인터랙션 구현에 집중했습니다.",
    role: "Frontend Developer",
    year: "2026",
    period: "2026",
    teamSize: "5명",
    image: "/images/project-2.png",

    tech: ["JavaScript", "Vite", "HTML", "CSS"],

    work: [
      "상품 상세 페이지 담당",
      "상품 데이터 렌더링",
      "옵션 선택 UI 구현",
      "수량 및 가격 계산",
      "장바구니 관련 인터랙션",
      "반응형 UI 구현",
    ],

    features: [
      {
        title: "상품 상세 페이지",
        text: "상품 이미지와 가격, 옵션, 제품 정보를 사용자가 한눈에 확인할 수 있도록 구현했습니다.",
      },
      {
        title: "옵션 / 수량 / 가격",
        text: "사용자의 옵션과 수량 선택에 따라 가격과 선택 상태가 실시간으로 반영되도록 구현했습니다.",
      },
      {
        title: "장바구니",
        text: "선택한 상품 정보와 옵션을 기준으로 장바구니 관련 인터랙션을 구현했습니다.",
      },
      {
        title: "반응형 UI",
        text: "데스크톱과 모바일 환경에 맞게 UI와 콘텐츠 배치를 조정했습니다.",
      },
    ],

    troubleshooting: [
      {
        title: "옵션과 수량에 따른 상품 상태 동기화",
        problem:
          "상품 상세 페이지에서 옵션과 수량이 변경될 때 화면에 표시되는 정보와 사용자가 선택한 상태가 서로 어긋날 수 있었습니다.",
        solution:
          "선택된 옵션과 수량을 하나의 상태 흐름으로 관리하고, 사용자 입력이 변경될 때 관련 UI와 가격 정보가 함께 갱신되도록 로직을 정리했습니다.",
      },
      {
        title: "데이터 기반 상품 상세 UI 구성",
        problem:
          "상품마다 이름, 가격, 이미지, 옵션 등 데이터가 달라 하드코딩 방식으로는 확장성과 유지보수가 떨어지는 문제가 있었습니다.",
        solution:
          "상품 데이터를 기준으로 상세 정보를 동적으로 렌더링하도록 구조를 변경했습니다. 반복되는 UI는 동일한 데이터 구조를 활용하도록 정리해 상품이 변경되어도 동일한 화면 구조를 사용할 수 있도록 했습니다.",
      },
    ],

    learned: [
      "JavaScript에서 DOM을 직접 조작하는 것보다 상태와 데이터 흐름을 먼저 정리하는 것이 복잡한 인터랙션 구현에 중요하다는 점을 배웠습니다.",
      "사용자의 선택에 따라 여러 UI가 동시에 바뀌는 화면에서는 각각을 독립적으로 처리하기보다 하나의 상태를 기준으로 동기화하는 방식이 안정적이라는 점을 경험했습니다.",
      "쇼핑몰 UI를 구현하면서 사용자가 상품 정보를 확인하고 구매 행동으로 이어지는 흐름을 고려하게 되었습니다.",
    ],

    result:
      "정적인 페이지 구현에서 한 단계 더 나아가 JavaScript를 활용해 데이터와 사용자 입력에 따라 UI가 변화하는 인터랙티브 웹페이지를 구현했습니다.",

    github: "https://github.com/RaeChoe/ESTFE13_2nd_Project_personal",

    live: "https://estfe132ndprojectpersonal.vercel.app/",
  },

  {
    id: "gitggal-recipe",
    number: "03",
    title: "깃깔나는 레시피",
    shortTitle: "깃깔나는 레시피",
    type: "AI Recipe Platform",
    description:
      "AI 레시피 생성부터 저장, 후기, 커뮤니티까지 연결되는 풀스택 레시피 서비스를 구현했습니다.",
    overview:
      "AI를 활용해 레시피를 생성하고, 사용자가 레시피를 저장하거나 후기와 커뮤니티를 통해 서로 공유할 수 있는 웹 서비스입니다. React와 Supabase를 활용해 인증부터 데이터베이스, 사용자 상호작용 기능까지 구현했습니다.",
    role: "Frontend Developer",
    year: "2026",
    period: "2026",
    teamSize: "4명",
    image: "/images/project-3.png",

    featured: false,

    tech: ["React", "TypeScript", "Vite", "Supabase", "Vercel"],

    work: [
      "커뮤니티 페이지 구현",
      "로그인 / 회원가입 구현",
      "Google / Kakao OAuth",
      "레시피 상세 페이지",
      "좋아요 / 북마크",
      "후기 및 댓글",
      "AI 레시피 요약",
      "Supabase DB / Storage 연동",
    ],

    features: [
      {
        title: "Community",
        text: "게시글 CRUD, 좋아요, 북마크, 댓글과 Masonry 기반 커뮤니티 UI를 구현했습니다.",
      },
      {
        title: "Authentication",
        text: "Supabase Auth를 활용해 이메일 로그인과 Google, Kakao OAuth 로그인을 구현했습니다.",
      },
      {
        title: "Recipe Detail",
        text: "레시피 상세 정보와 좋아요, 북마크, 후기 등 사용자 상호작용 기능을 구현했습니다.",
      },
      {
        title: "AI Summary",
        text: "레시피 데이터를 활용한 AI 요약 기능과 중복 요청 방지 로직을 적용했습니다.",
      },
    ],

    troubleshooting: [
      {
        title: "좋아요 기능의 동시성 문제 개선",
        problem:
          "클라이언트에서 기존 좋아요 수를 조회한 뒤 직접 값을 증가시키는 방식은 여러 사용자가 동시에 요청할 경우 값이 정확하게 반영되지 않을 가능성이 있었습니다.",
        solution:
          "Supabase RPC를 활용해 데이터베이스에서 좋아요 수를 직접 증가시키도록 변경했습니다. 클라이언트는 변경된 결과만 받아 화면에 반영하도록 해 데이터 일관성을 높였습니다.",
      },
      {
        title: "AI 요약 중복 요청 방지",
        problem:
          "레시피 상세 페이지에서 AI 요약 결과가 없는 경우 여러 사용자가 동시에 페이지에 접근하면 동일한 레시피에 대해 AI 요청이 중복으로 발생할 수 있었습니다.",
        solution:
          "요약 생성 상태를 관리하기 위해 claim token과 claimed_at 값을 추가하고 RPC를 활용해 하나의 요청만 생성 권한을 얻도록 구성했습니다. 생성 완료 또는 페이지 이탈 시 토큰을 정리해 이후 요청이 정상적으로 진행될 수 있도록 처리했습니다.",
      },
      {
        title: "사용자 프로필 정보의 일관성 개선",
        problem:
          "커뮤니티 게시글과 댓글 등 여러 영역에서 사용자 정보를 각각 관리하면 프로필 변경 시 화면마다 서로 다른 정보가 표시될 수 있었습니다.",
        solution:
          "profiles 테이블과 user_id를 기준으로 사용자 프로필 데이터를 관리하고 필요한 화면에서 공통 데이터를 조회하도록 정리했습니다. 이를 통해 닉네임과 프로필 이미지의 일관성을 높였습니다.",
      },
    ],

    learned: [
      "React 컴포넌트 구현뿐 아니라 Supabase Auth, Database, Storage, RPC를 연결하면서 프론트엔드와 백엔드 데이터 흐름을 함께 이해하게 되었습니다.",
      "좋아요, 북마크, 댓글처럼 여러 사용자가 동시에 사용하는 기능에서는 화면 상태뿐 아니라 데이터베이스 수준의 일관성을 고려해야 한다는 점을 배웠습니다.",
      "기능 구현 이후 Lighthouse, WAVE, W3C 등을 활용해 접근성, 웹 표준, 성능, SEO까지 점검하며 배포 이후의 품질 관리 과정도 경험했습니다.",
      "기능이 많아질수록 공통 컴포넌트와 Context, 데이터 처리 로직을 분리하는 것이 유지보수와 협업에 중요하다는 점을 체감했습니다.",
    ],

    result:
      "React 기반 UI 구현을 넘어 인증, 데이터베이스, Storage, RPC, AI 기능이 연결된 서비스형 프로젝트를 완성했습니다. 프로젝트를 통해 실제 서비스에서 발생할 수 있는 데이터 동시성, 인증 상태, 사용자 콘텐츠 관리 문제를 직접 해결해보는 경험을 얻었습니다.",

    github: "https://github.com/RaeChoe/ESTFE13_3rd_Finalproject_personal",

    live: "https://estfe-13-3rd-finalproject-personal.vercel.app/",

    screens: [
      {
        title: "Recipe Detail",
        image: "/images/project3-detail.png",
        description:
          "레시피 정보와 조리 시간, 난이도, 인분, 조회수 등을 한 화면에서 확인하고 좋아요, 북마크, 공유, 후기 기능까지 사용할 수 있도록 구현했습니다.",
      },
      {
        title: "Community",
        image: "/images/project3-community.png",
        description:
          "게시글 CRUD와 좋아요, 북마크, 댓글 기능을 제공하며 Masonry 레이아웃을 적용해 다양한 크기의 콘텐츠를 자연스럽게 탐색할 수 있도록 구현했습니다.",
      },
      {
        title: "Authentication",
        image: "/images/project3-login.png",
        description:
          "Supabase Auth를 기반으로 이메일 로그인과 Google, Kakao 소셜 로그인을 구현하고 인증 상태에 따라 페이지 접근과 사용자 흐름을 제어했습니다.",
      },
    ],
  },
];

const projectsByLatest = [...projects].sort((a, b) => Number(b.number) - Number(a.number));

export default projectsByLatest;
