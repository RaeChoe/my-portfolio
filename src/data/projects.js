const projects = [
  {
    id: "estsoft",
    number: "01",
    title: "ESTsoft 과정 소개 사이트 리뉴얼",
    shortTitle: "ESTsoft Renewal",
    type: "Landing Page Renewal",
    description:
      "정보 중심의 기존 사이트를 사용자 행동을 유도하는 반응형 랜딩 페이지로 리뉴얼했습니다.",
    overview:
      "ESTsoft 교육 과정 소개 사이트를 팀 프로젝트로 리뉴얼했습니다. 콘텐츠 구조와 사용자 흐름을 정리하고, 반응형 환경에서도 자연스럽게 정보를 탐색할 수 있도록 화면을 구현했습니다.",
    role: "Frontend Lead",
    year: "2026",
    period: "2026",
    teamSize: "5명",
    image: "/images/project-1.png",

    tech: ["HTML", "CSS"],

    work: [
      "Benefits 영역 구현",
      "Event 영역 구현",
      "PR 콘텐츠 영역 구현",
      "반응형 레이아웃 구현",
      "웹 표준 및 접근성 고려",
    ],

    features: [
      {
        title: "Responsive Layout",
        text: "다양한 화면 크기에 맞춰 콘텐츠 구조가 자연스럽게 변하도록 반응형 UI를 구현했습니다.",
      },
      {
        title: "Content Structure",
        text: "교육 과정의 핵심 정보가 빠르게 전달되도록 콘텐츠의 우선순위와 배치를 개선했습니다.",
      },
      {
        title: "Interactive UI",
        text: "사용자가 콘텐츠를 탐색하기 쉽도록 버튼과 섹션에 인터랙션을 적용했습니다.",
      },
    ],

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

    featured: true,

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

    github: "https://github.com/RaeChoe/ESTFE13_3rd_Finalproject_personal",

    live: "https://estfe-13-3rd-finalproject-personal.vercel.app/",
  },
];

export default projects;
