/**
 * emotionHandler.js
 * 감정 선택 버튼 클릭 이벤트를 처리하는 모듈
 * - 감정 버튼 렌더링
 * - 버튼 클릭 이벤트 처리
 * - 음악 페이지로 이동
 */

import { getAllEmotions, getEmotionById } from './emotionData.js';

// DOM 요소 참조
let emotionsGrid = null;

/**
 * DOM 요소 초기화
 */
function initDOMElements() {
    emotionsGrid = document.getElementById('emotionsGrid');
}

/**
 * 감정 버튼 그리드 렌더링
 */
export function renderEmotionButtons() {
    if (!emotionsGrid) {
        initDOMElements();
    }
    
    if (!emotionsGrid) {
        console.error('감정 버튼 그리드를 찾을 수 없습니다.');
        return;
    }
    
    const emotions = getAllEmotions();
    emotionsGrid.innerHTML = '';
    
    emotions.forEach(emotion => {
        const button = createEmotionButton(emotion);
        emotionsGrid.appendChild(button);
    });
    
    console.log(`${emotions.length}개의 감정 버튼이 렌더링되었습니다.`);
}

/**
 * 감정 버튼 엘리먼트 생성
 * @param {Object} emotion - 감정 데이터 객체
 * @returns {HTMLElement} 버튼 엘리먼트
 */
function createEmotionButton(emotion) {
    const button = document.createElement('button');
    button.className = 'emotion-btn';
    button.setAttribute('data-emotion', emotion.id);
    button.setAttribute('aria-label', `${emotion.name} 감정 선택`);
    
    button.innerHTML = `
        <span class="emotion-emoji">${emotion.emoji}</span>
        <h3 class="emotion-name">${emotion.name}</h3>
        <p class="emotion-description">${emotion.description}</p>
    `;
    
    // 클릭 이벤트 리스너 추가
    button.addEventListener('click', () => handleEmotionClick(emotion.id));
    
    return button;
}

/**
 * 감정 버튼 클릭 이벤트 핸들러
 * @param {string} emotionId - 선택된 감정 ID
 */
function handleEmotionClick(emotionId) {
    console.log(`감정 선택: ${emotionId}`);
    
    // 감정 데이터 확인
    const emotion = getEmotionById(emotionId);
    if (!emotion) {
        console.error(`감정을 찾을 수 없습니다: ${emotionId}`);
        return;
    }
    
    // 음악 페이지로 이동 (URL 파라미터로 감정 ID 전달)
    window.location.href = `music.html?emotion=${emotionId}`;
}

/**
 * 감정 핸들러 초기화
 */
export function initEmotionHandler() {
    initDOMElements();
    renderEmotionButtons();
    console.log('감정 핸들러가 초기화되었습니다.');
}

