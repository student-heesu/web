/**
 * app.js
 * 메인 애플리케이션 초기화 및 통합 모듈
 * 모든 모듈을 import하고 초기화하는 역할
 */

import { initEmojiAnimation } from './emojiAnimation.js';
import { initEmotionHandler } from './emotionHandler.js';

/**
 * 앱 초기화 함수
 */
function initApp() {
    console.log('=================================');
    console.log('감정 음악 추천 앱 초기화 시작...');
    console.log('=================================');
    
    // 1. 이모지 애니메이션 초기화
    const emojiContainer = document.getElementById('emojiContainer');
    if (emojiContainer) {
        initEmojiAnimation(emojiContainer);
    } else {
        console.warn('이모지 컨테이너를 찾을 수 없습니다.');
    }
    
    // 2. 감정 핸들러 초기화 (감정 버튼 생성 및 이벤트 바인딩)
    initEmotionHandler();
    
    // 3. 추가 이벤트 리스너 설정
    setupAdditionalEventListeners();
    
    console.log('=================================');
    console.log('앱 초기화 완료! 🎉');
    console.log('=================================');
}

/**
 * 추가 이벤트 리스너 설정
 */
function setupAdditionalEventListeners() {
    // 스크롤 인디케이터 클릭 시 감정 섹션으로 이동
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const emotionsSection = document.querySelector('.emotions-section');
            if (emotionsSection) {
                emotionsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // 페이지 로드 완료 후 페이드인 애니메이션
    document.body.classList.add('loaded');
    
    // 윈도우 리사이즈 이벤트 (필요시 이모지 위치 재조정)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            console.log('화면 크기 변경됨');
            // 필요시 레이아웃 재조정 로직 추가
        }, 250);
    });
    
    console.log('추가 이벤트 리스너 설정 완료');
}

/**
 * 페이지 로드 완료 시 앱 초기화
 */
if (document.readyState === 'loading') {
    // DOM이 아직 로드 중이면 이벤트 리스너 등록
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    // DOM이 이미 로드되었으면 바로 초기화
    initApp();
}

/**
 * 에러 핸들링
 */
window.addEventListener('error', (event) => {
    console.error('앱 에러 발생:', event.error);
});

/**
 * Promise rejection 에러 핸들링
 */
window.addEventListener('unhandledrejection', (event) => {
    console.error('처리되지 않은 Promise rejection:', event.reason);
});

// 개발 모드 정보 출력
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('%c개발 모드로 실행 중입니다 🛠️', 'color: #6366f1; font-size: 14px; font-weight: bold;');
    console.log('%c디버깅 정보:', 'color: #8b5cf6; font-weight: bold;');
    console.log('- User Agent:', navigator.userAgent);
    console.log('- 화면 크기:', `${window.innerWidth}x${window.innerHeight}`);
    console.log('- 언어:', navigator.language);
}
