// 이력서 설정 파일 - 여기서 모든 텍스트와 이미지를 쉽게 변경할 수 있습니다

const resumeConfig = {
    // 기본 정보
    profile: {
        name: "이승제",
        email: "lsj0158@gmail.com",
        profileImage: "profile.jpg", // 프로필 이미지 파일명
        socialLinks: {
            github: "https://github.com/lsjsos",
        }
    },

    // 자기소개
    introduce: {
        content: `VR 프론트엔드 및 웹/앱 서비스 백엔드 개발과 개발 PM으로서의 다양한 경험이 있습니다. C#, Nest.js, MySQL, AWS, 등을 사용하여 실제 서비스를 설계, 개발, 운영한 경험을 바탕으로 확장성과 유지 보수성이 높은 풀스택 아키텍처를 위해 계속해서 고민하고 있습니다.

아키텍처와 시스템 설계에 관심이 많고, 객체 지향적인 개발을 하려고 노력하고 있습니다. 이외에도 개인 프로젝트, 사이드 프로젝트 등을 통해 다양한 분야의 개발 경험을 쌓고 있습니다. 보안을 매우 중요하게 생각하기에 다양한 해킹 기법 및 사례, 방지 기법들을 개인 노션에 정리하고 개발에 적용했습니다. 항상 안정적인 IT 서비스 또는 플랫폼을 개발하고 싶다고 생각하고 있으며, CTO라는 목표를 가지고 보안, 최적화 등 여러 요소들을 고려하여 다양한 분야의 개발 기술을 학습하거나 사용하며 경험을 쌓고 있습니다.

IT 프로덕트를 성공적으로 개발하기 위해서는 결국 기획, 디자인, 개발 팀 등 여러 부서 및 비즈니스와의 커뮤니케이션이 가장 중요하다고 생각합니다. 부드럽고 적극적인 커뮤니케이션으로 문제를 해결하고, 비즈니스 성장을 도모합니다. 이러한 점을 바탕으로 CTO로서의 능력을 갖추기 위해 계속해서 학습하고, 경험하고 있습니다.`
    },

    // 스킬
    skills: {
        languages: ["C#", "C++", "Java", "Kotlin", "TypeScript", "JavaScript", "Python"],
        frameworks: ["Node.js", "Nest.js", "Express.js", "FastAPI", "Unity"],
        infrastructure: ["AWS", "Docker", "Nginx", "Kafka", "MySQL", "MongoDB", "Linux"],
        tools: ["VS Code", "Visual Studio", "Git", "Github", "Github Actions", "Draw.io", "Notion", "Teams", "Slack"],
        misc: ["DevOps", "AI", "Security"]
    },

    // 경력
    experience: {
        totalExperience: "총 0년 11개월",
        companies: [
            {
                name: "래빗홀컴퍼니 주식회사",
                period: "2024. 09 ~ 2025. 07",
                duration: "0년 11개월",
                isCurrent: false,
                positions: [
                    {
                        period: "2024. 09 ~ 2025. 07",
                        title: "VR Product: 깡총영어 / 개발 팀장",
                        description: [
                            "VR 교육용 콘텐츠 개발, 최적화 및 유지보수",
                            "실시간 웹 소켓 통신 및 Google Cloud STT, TTS 서비스를 활용한 음성 피드백 시스템 구축",
                            "WebRTC 모니터링 시스템 안정성 개선 및 유지보수",
                            "성적 관리 시스템 백엔드 API, 데이터베이스 설계 및 개발"
                        ],
                        skills: "C# JavaScript Node.js Express.js Unity AWS nginx MySQL Linux"
                    },
                    {
                        period: "2024. 11 ~ 2025. 02",
                        title: "VR Product: 마음평화 / 개발 팀장",
                        description: [
                            "VR 360도 영상 콘텐츠 개발 및 유지보수",
                            "StereoScopic 3D 360도 영상 처리 시스템 구축",
                            "CDN 기반 영상 파일 원격 다운로드 로직 구현"
                        ],
                        skills: "C# JavaScript Node.js Express.js Unity AWS MySQL Nginx Linux"
                    },
                    {
                        period: "2025. 03 ~ 2025. 05",
                        title: "Smart Ring / 백엔드 개발자",
                        description: [
                            "사용자 생체 데이터 저장 및 전송을 위한 백엔드 API, 데이터베이스 설계 및 개발",
                            "Kafka 이벤트 핸들링 및 생체 데이터 암호화",
                        ],
                        skills: "TypeScript Nest.js MongoDB Kafka Nginx Linux"
                    }
                ]
            }
        ]
    },

    // 학력
    education: [
        {
            period: "2018. 03 ~ 2024. 02",
            school: "건국대학교",
            major: "컴퓨터공학 학사 졸업"
        },
        {
            period: "2015. 03 ~ 2018. 02",
            school: "고색고등학교",
            major: "자연계 졸업 (경기도 수원시)"
        }
    ],

    // 기타 활동
    etc: [
        {
            period: "2025. 07",
            title: "QueryPie 인턴",
            description: "Software Engineer"
        },
        {
            period: "2023. 12 ~ 2024. 11",
            title: "G-STAR 2024 Indie Showcase 'The Cloud VR' 전시 및 Steam 출시",
            description: "VeRapy 개발 팀장"
        },
        {
            period: "2023. 09 ~ 2023. 11",
            title: "건국대학교 2023 SW경진대회 대상",
            description: "Unity 기반 VR 방탈출 공포 게임 개발 프로젝트"
        },
        {
            period: "2020. 05 ~ 2021. 11",
            title: "육군 병장 만기 전역",
            description: "통신병"
        }
    ]
};

// 전역 노출 (디버깅 및 수동 재적용 용이)
// 일부 환경에서 const 전역 바인딩 접근성 이슈를 방지
try {
    window.resumeConfig = resumeConfig;
} catch (e) {
    // 무시
}

// 설정을 HTML에 적용하는 함수
function applyConfig() {
    console.log('[resume] applyConfig start', { readyState: document.readyState });
    // 프로필 정보 적용
    document.getElementById('name').textContent = resumeConfig.profile.name;
    document.getElementById('email').textContent = resumeConfig.profile.email;
    // 이미지 메타데이터 제거된 PNG 우선 사용
    const imgEl = document.getElementById('profile-img');
    if (imgEl) {
        // 설정값이 png가 아니라도, 동일 파일명이면 png를 우선 시도
        const configured = resumeConfig.profile.profileImage || 'profile.png';
        const pngFallback = 'profile.png';
        imgEl.src = pngFallback;
        imgEl.onerror = function() {
            imgEl.src = configured;
        };
    }
    
    // 소셜 링크 적용
    // 안전한 링크만 적용 (http/https)
    const safeUrl = (url) => {
        try {
            const u = new URL(url, window.location.origin);
            return ['http:', 'https:'].includes(u.protocol) ? u.href : '#';
        } catch {
            return '#';
        }
    };

    document.getElementById('github-link').href = safeUrl(resumeConfig.profile.socialLinks.github || '#');
    
    // 자기소개 적용
    // 소개는 텍스트로 안전 렌더링
    const introduceRoot = document.getElementById('introduce-content');
    introduceRoot.textContent = '';
    const paragraphs = (resumeConfig.introduce.content || '').split('\n\n');
    introduceRoot.innerHTML = '';
    paragraphs.forEach((p) => {
        const el = document.createElement('p');
        el.textContent = p;
        introduceRoot.appendChild(el);
    });
    
    // 스킬 적용
    document.getElementById('languages').innerHTML = resumeConfig.skills.languages.map(skill => `<span>${skill}</span>`).join('');
    document.getElementById('frameworks').innerHTML = resumeConfig.skills.frameworks.map(skill => `<span>${skill}</span>`).join('');
    document.getElementById('infrastructure').innerHTML = resumeConfig.skills.infrastructure.map(skill => `<span>${skill}</span>`).join('');
    document.getElementById('tools').innerHTML = resumeConfig.skills.tools.map(skill => `<span>${skill}</span>`).join('');
    document.getElementById('misc').innerHTML = resumeConfig.skills.misc.map(skill => `<span>${skill}</span>`).join('');
    
    // 총 경력 적용
    document.getElementById('total-experience').textContent = resumeConfig.experience.totalExperience;
    console.log('[resume] applyConfig done');

    // 경력 섹션 동적 렌더링
    try {
        renderExperience();
    } catch (e) {
        console.error('renderExperience 실행 중 오류:', e);
    }
}

// DOM 상태에 따라 즉시 적용 또는 로드 후 적용
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConfig);
} else {
    // 이미 DOM이 준비된 상태면 즉시 적용
    try {
        applyConfig();
    } catch (e) {
        console.error('applyConfig 실행 중 오류:', e);
    }
}

// 수동 호출을 위한 전역 노출
try {
    window.applyConfig = applyConfig;
} catch (e) {
    // 무시
}

// 경력 섹션을 resumeConfig 기준으로 재구성
function renderExperience() {
    const section = document.querySelector('.experience-section');
    if (!section) return;

    // h2는 유지하고 이후 콘텐츠를 재구성
    const heading = section.querySelector('h2');
    if (!heading) return;

    // 기존 항목 제거
    [...section.children].forEach((child) => {
        if (child !== heading) section.removeChild(child);
    });

    // 회사별 경험 아이템 생성
    resumeConfig.experience.companies.forEach((company) => {
        const item = document.createElement('div');
        item.className = 'experience-item';

        // 헤더
        const header = document.createElement('div');
        header.className = 'experience-header';

        const dateDiv = document.createElement('div');
        dateDiv.className = 'experience-date';
        dateDiv.textContent = company.period || '';

        const companyDiv = document.createElement('div');
        companyDiv.className = 'experience-company';
        companyDiv.textContent = company.name || '';
        if (company.isCurrent) {
            const current = document.createElement('span');
            current.className = 'current';
            current.textContent = '재직 중';
            companyDiv.appendChild(document.createTextNode(' '));
            companyDiv.appendChild(current);
        }
        if (company.duration) {
            const duration = document.createElement('span');
            duration.className = 'duration';
            duration.textContent = company.duration;
            companyDiv.appendChild(duration);
        }

        header.appendChild(dateDiv);
        header.appendChild(companyDiv);
        item.appendChild(header);

        // 포지션 상세
        (company.positions || []).forEach((pos) => {
            const detail = document.createElement('div');
            detail.className = 'experience-detail';

            const period = document.createElement('div');
            period.className = 'experience-period';
            period.textContent = pos.period || '';

            const position = document.createElement('div');
            position.className = 'experience-position';
            position.textContent = pos.title || '';

            const ul = document.createElement('ul');
            ul.className = 'experience-description';
            (pos.description || []).forEach((line) => {
                const li = document.createElement('li');
                li.textContent = line;
                ul.appendChild(li);
            });

            const skills = document.createElement('div');
            skills.className = 'skill-keywords';
            const strong = document.createElement('strong');
            strong.textContent = 'Skill Keywords';
            skills.appendChild(strong);
            skills.appendChild(document.createElement('br'));
            skills.appendChild(document.createTextNode(pos.skills || ''));

            detail.appendChild(period);
            detail.appendChild(position);
            detail.appendChild(ul);
            detail.appendChild(skills);
            item.appendChild(detail);
        });

        section.appendChild(item);
    });
}
