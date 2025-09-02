// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 현재 날짜로 업데이트 날짜 설정
    updateLastUpdatedDate();
    
    // 스크롤 애니메이션 효과
    initScrollAnimations();
    
    // 인쇄 기능
    initPrintFunctionality();
    
    // 다크모드 토글 (선택사항)
    initDarkModeToggle();
});

// 마지막 업데이트 날짜를 현재 날짜로 설정
function updateLastUpdatedDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    const lastUpdatedElement = document.getElementById('last-updated-date');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = `${year}. ${month}. ${day} (D+0)`;
    }
}

// 스크롤 애니메이션 초기화
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 애니메이션할 요소들 선택
    const animatedElements = document.querySelectorAll('.experience-item, .education-item, .etc-item, .skill-category');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// 인쇄 기능 초기화
function initPrintFunctionality() {
    // Ctrl+P 또는 Cmd+P 키 이벤트 리스너
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });
}

// 다크모드 토글 기능 (선택사항)
function initDarkModeToggle() {
    // 다크모드 토글 버튼 생성
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '🌙';
    toggleButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background-color: #3498db;
        color: white;
        font-size: 20px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(toggleButton);
    
    // 다크모드 상태 확인
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        toggleButton.innerHTML = '☀️';
    }
    
    // 토글 버튼 클릭 이벤트
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        toggleButton.innerHTML = isDark ? '☀️' : '🌙';
        localStorage.setItem('darkMode', isDark);
    });
    
    // 다크모드 CSS 추가
    const darkModeCSS = `
        .dark-mode {
            background-color: #1a1a1a !important;
            color: #e0e0e0 !important;
        }
        
        .dark-mode .container {
            background-color: #1a1a1a;
        }
        
        .dark-mode .profile-info h1,
        .dark-mode h2,
        .dark-mode .experience-company,
        .dark-mode .education-school,
        .dark-mode .etc-title {
            color: #e0e0e0 !important;
        }
        
        .dark-mode .experience-item,
        .dark-mode .education-item,
        .dark-mode .etc-item {
            background-color: #2d2d2d !important;
            border-left-color: #3498db !important;
        }
        
        .dark-mode .skill-items span {
            background-color: #2d2d2d !important;
            color: #e0e0e0 !important;
            border-color: #555 !important;
        }
        
        .dark-mode .social-links a {
            border-color: #3498db !important;
            color: #3498db !important;
        }
        
        .dark-mode .social-links a:hover {
            background-color: #3498db !important;
            color: white !important;
        }
        
        .dark-mode .skill-keywords {
            background-color: #2d2d2d !important;
            color: #e0e0e0 !important;
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = darkModeCSS;
    document.head.appendChild(style);
}

// 텍스트 복사 기능 (선택사항)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // 복사 성공 알림
        showNotification('클립보드에 복사되었습니다!');
    }).catch(function(err) {
        console.error('복사 실패:', err);
    });
}

// 알림 표시 함수
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #27ae60;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1001;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// 이메일 클릭 시 복사 기능 추가
document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.getElementById('email');
    if (emailElement) {
        emailElement.style.cursor = 'pointer';
        emailElement.title = '클릭하여 이메일 복사';
        
        emailElement.addEventListener('click', function() {
            copyToClipboard(this.textContent);
        });
    }
});

// 스킬 아이템에 호버 효과 추가
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-items span');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// 경험 항목에 클릭 시 확장/축소 기능 (선택사항)
document.addEventListener('DOMContentLoaded', function() {
    const experienceDetails = document.querySelectorAll('.experience-detail');
    
    experienceDetails.forEach(detail => {
        const description = detail.querySelector('.experience-description');
        const skillKeywords = detail.querySelector('.skill-keywords');
        
        if (description && skillKeywords) {
            // 초기에는 설명만 보이도록 설정
            skillKeywords.style.display = 'none';
            
            // 제목 클릭 시 스킬 키워드 토글
            const position = detail.querySelector('.experience-position');
            if (position) {
                position.style.cursor = 'pointer';
                position.title = '클릭하여 스킬 키워드 보기/숨기기';
                
                position.addEventListener('click', function() {
                    if (skillKeywords.style.display === 'none') {
                        skillKeywords.style.display = 'block';
                        skillKeywords.style.animation = 'fadeIn 0.3s ease';
                    } else {
                        skillKeywords.style.display = 'none';
                    }
                });
            }
        }
    });
    
    // 페이드인 애니메이션 CSS 추가
    const fadeInCSS = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = fadeInCSS;
    document.head.appendChild(style);
});

// 반응형 네비게이션 (모바일용)
function initMobileNavigation() {
    if (window.innerWidth <= 768) {
        // 모바일에서 섹션 네비게이션 추가
        const sections = document.querySelectorAll('section');
        const nav = document.createElement('nav');
        nav.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(52, 73, 94, 0.9);
            padding: 10px;
            border-radius: 25px;
            z-index: 1000;
            display: flex;
            gap: 10px;
        `;
        
        sections.forEach((section, index) => {
            const button = document.createElement('button');
            button.textContent = section.querySelector('h2')?.textContent || `섹션 ${index + 1}`;
            button.style.cssText = `
                background: none;
                border: none;
                color: white;
                padding: 5px 10px;
                border-radius: 15px;
                font-size: 10px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            `;
            
            button.addEventListener('click', () => {
                section.scrollIntoView({ behavior: 'smooth' });
            });
            
            button.addEventListener('mouseenter', () => {
                button.style.backgroundColor = 'rgba(255,255,255,0.2)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.backgroundColor = 'transparent';
            });
            
            nav.appendChild(button);
        });
        
        document.body.appendChild(nav);
    }
}

// 윈도우 리사이즈 이벤트
window.addEventListener('resize', function() {
    // 모바일 네비게이션 다시 초기화
    const existingNav = document.querySelector('nav[style*="position: fixed"]');
    if (existingNav) {
        existingNav.remove();
    }
    initMobileNavigation();
});

// 초기 모바일 네비게이션 설정
document.addEventListener('DOMContentLoaded', function() {
    initMobileNavigation();
});
