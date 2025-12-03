/**
 * emojiAnimation.js
 * 히어로 섹션에서 50개의 이모지가 떠다니는 애니메이션을 생성하는 모듈
 */

// 사용할 이모지 배열
const emojis = [
    '😊', '😢', '😠', '😌', '🤩', '😰', '🥰', '⚡',
    '🎵', '🎶', '🎸', '🎹', '🎺', '🎻', '🥁', '🎤',
    '💖', '💙', '💚', '💛', '💜', '🧡', '❤️', '💗',
    '⭐', '✨', '🌟', '💫', '🌈', '☀️', '🌙', '🌸',
    '🎉', '🎊', '🎈', '🎀', '🎁', '🔥', '💥', '🌺',
    '🍀', '🌻', '🦋', '🐝', '🌼', '🌷', '🌹', '🎭'
];

// 애니메이션 스타일 배열 (float-1부터 float-6까지)
const animationStyles = ['float-1', 'float-2', 'float-3', 'float-4', 'float-5', 'float-6'];

/**
 * 랜덤 숫자 생성 함수
 * @param {number} min - 최소값
 * @param {number} max - 최대값
 * @returns {number} 랜덤 숫자
 */
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * 배열에서 랜덤 요소 선택
 * @param {Array} array - 배열
 * @returns {*} 랜덤 요소
 */
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * 이모지 엘리먼트 생성
 * @param {string} emoji - 이모지 문자
 * @param {number} left - 왼쪽 위치 (%)
 * @param {number} top - 위쪽 위치 (%)
 * @param {string} animationName - 애니메이션 이름
 * @param {number} duration - 애니메이션 지속시간 (초)
 * @param {number} delay - 애니메이션 지연시간 (초)
 * @returns {HTMLElement} 이모지 엘리먼트
 */
function createEmojiElement(emoji, left, top, animationName, duration, delay) {
    const emojiEl = document.createElement('div');
    emojiEl.className = 'emoji';
    emojiEl.textContent = emoji;
    emojiEl.style.left = `${left}%`;
    emojiEl.style.top = `${top}%`;
    emojiEl.style.animation = `${animationName} ${duration}s ease-in-out ${delay}s infinite`;
    
    return emojiEl;
}

/**
 * 50개의 이모지를 생성하고 컨테이너에 추가
 * @param {HTMLElement} container - 이모지를 추가할 컨테이너
 */
export function initEmojiAnimation(container) {
    if (!container) {
        console.error('이모지 컨테이너를 찾을 수 없습니다.');
        return;
    }
    
    // 기존 이모지 제거
    container.innerHTML = '';
    
    // 50개의 이모지 생성
    for (let i = 0; i < 50; i++) {
        // 랜덤 이모지 선택
        const emoji = getRandomElement(emojis);
        
        // 랜덤 위치 설정 (화면 전체에 분산)
        const left = getRandomNumber(5, 95);
        const top = getRandomNumber(5, 95);
        
        // 랜덤 애니메이션 선택
        const animationName = getRandomElement(animationStyles);
        
        // 랜덤 애니메이션 지속시간 (6초 ~ 12초)
        const duration = getRandomNumber(6, 12);
        
        // 랜덤 애니메이션 지연시간 (0초 ~ 3초)
        const delay = getRandomNumber(0, 3);
        
        // 이모지 엘리먼트 생성 및 추가
        const emojiEl = createEmojiElement(emoji, left, top, animationName, duration, delay);
        container.appendChild(emojiEl);
    }
    
    console.log('50개의 이모지 애니메이션이 초기화되었습니다.');
}

/**
 * 애니메이션 정지
 * @param {HTMLElement} container - 이모지 컨테이너
 */
export function stopEmojiAnimation(container) {
    if (!container) return;
    
    const emojis = container.querySelectorAll('.emoji');
    emojis.forEach(emoji => {
        emoji.style.animationPlayState = 'paused';
    });
}

/**
 * 애니메이션 재생
 * @param {HTMLElement} container - 이모지 컨테이너
 */
export function playEmojiAnimation(container) {
    if (!container) return;
    
    const emojis = container.querySelectorAll('.emoji');
    emojis.forEach(emoji => {
        emoji.style.animationPlayState = 'running';
    });
}

/**
 * 특정 이모지 세트로 변경 (감정에 따라)
 * @param {HTMLElement} container - 이모지 컨테이너
 * @param {Array} emojiSet - 사용할 이모지 배열
 */
export function changeEmojiSet(container, emojiSet) {
    if (!container || !emojiSet || emojiSet.length === 0) return;
    
    const emojiElements = container.querySelectorAll('.emoji');
    emojiElements.forEach(emojiEl => {
        emojiEl.textContent = getRandomElement(emojiSet);
    });
}
