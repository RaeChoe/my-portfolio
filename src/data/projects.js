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

    troubleshooting: [
      {
        title: "반응형 레이아웃 구조 정리",
        problem:
          "데스크톱 기준으로 구성된 콘텐츠를 작은 화면에서도 자연스럽게 보여주기 위해 섹션별 레이아웃 구조를 다시 정리해야 했습니다.",
        solution:
          "고정 크기와 불필요한 절대 위치 사용을 줄이고 Flex와 Grid를 중심으로 레이아웃을 구성했습니다. 주요 브레이크포인트에 따라 콘텐츠 배치와 간격을 조정해 화면 크기가 달라져도 정보 흐름이 유지되도록 개선했습니다.",
      },
      {
        title: "정보량이 많은 랜딩 페이지의 가독성 개선",
        problem:
          "교육 과정 소개 페이지 특성상 전달해야 할 정보가 많아 콘텐츠가 길고 복잡하게 느껴질 수 있었습니다.",
        solution:
          "섹션별 목적을 명확하게 나누고 제목, 설명, CTA의 시각적 우선순위를 조정했습니다. 사용자가 페이지를 순서대로 읽지 않아도 주요 정보를 빠르게 파악할 수 있도록 구성했습니다.",
      },
    ],

    learned: [
      "단순히 시안을 동일하게 구현하는 것보다 콘텐츠의 우선순위와 사용자 흐름을 고려한 마크업이 중요하다는 점을 배웠습니다.",
      "반응형 UI에서는 특정 해상도에 맞춘 보정보다 유연한 레이아웃 구조를 먼저 설계하는 것이 유지보수에 유리하다는 점을 경험했습니다.",
      "팀 프로젝트에서 공통 UI와 작업 범위를 초기에 정리하는 것이 이후 작업 충돌을 줄이는 데 도움이 된다는 점을 배웠습니다.",
    ],

    result:
      "첫 팀 프로젝트를 통해 HTML, CSS 기반의 반응형 웹사이트 구현 과정을 경험하고, 이후 프로젝트에서 재사용할 수 있는 레이아웃 설계와 협업 방식의 기본을 익혔습니다.",

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
  },
];

export default projects;
