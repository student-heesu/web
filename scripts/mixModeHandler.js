/**
 * mixModeHandler.js
 * 감정 믹스 모드 핸들러
 * 여러 감정을 선택하여 음악을 믹스하는 기능
 */

import { getAllEmotions } from './emotionData.js';

let mixModeActive = false;
let selectedEmotions = [];

/**
 * 믹스 모드 토글
 */
export function toggleMixMode() {
    mixModeActive = !mixModeActive;
    selectedEmotions = [];
    
    const mixButton = document.getElementById('mixModeButton');
    const emotionsGrid = document.getElementById('emotionsGrid');
    
    if (mixModeActive) {
        mixButton.textContent = '✅ 믹스 모드 활성화 (완료하기)';
        mixButton.classList.add('active');
        emotionsGrid.classList.add('mix-mode-active');
        
        // 버튼들에 체크박스 표시
        updateEmotionButtonsForMixMode();
    } else {
        // 선택된 감정이 있으면 믹스 페이지로 이동
        if (selectedEmotions.length > 0) {
            navigateToMixPage();
        } else {
            alert('감정을 하나 이상 선택해주세요!');
            mixModeActive = true;
            return;
        }
    }
}

/**
 * 감정 선택/해제 토글 (믹스 모드용)
 */
export function toggleEmotionSelection(emotionId) {
    if (!mixModeActive) return;
    
    const index = selectedEmotions.indexOf(emotionId);
    
    if (index > -1) {
        // 이미 선택된 경우 제거
        selectedEmotions.splice(index, 1);
    } else {
        // 새로 선택
        if (selectedEmotions.length >= 3) {
            alert('최대 3개까지만 선택할 수 있습니다!');
            return;
        }
        selectedEmotions.push(emotionId);
    }
    
    updateEmotionButtonsForMixMode();
}

/**
 * 믹스 모드에 맞게 감정 버튼 업데이트
 */
function updateEmotionButtonsForMixMode() {
    const emotionButtons = document.querySelectorAll('.emotion-btn');
    
    emotionButtons.forEach(button => {
        const emotionId = button.getAttribute('data-emotion-id');
        const isSelected = selectedEmotions.includes(emotionId);
        
        if (isSelected) {
            button.classList.add('selected');
            // 체크 표시 추가
            if (!button.querySelector('.check-mark')) {
                const checkMark = document.createElement('span');
                checkMark.className = 'check-mark';
                checkMark.textContent = '✓';
                button.appendChild(checkMark);
            }
        } else {
            button.classList.remove('selected');
            const checkMark = button.querySelector('.check-mark');
            if (checkMark) {
                checkMark.remove();
            }
        }
    });
}

/**
 * 믹스 페이지로 이동
 */
function navigateToMixPage() {
    const emotionIds = selectedEmotions.join(',');
    window.location.href = `music.html?emotion=mix&emotions=${emotionIds}`;
}

/**
 * 믹스 모드 상태 확인
 */
export function isMixModeActive() {
    return mixModeActive;
}

/**
 * 믹스 모드 초기화
 */
export function initMixMode() {
    const mixButton = document.getElementById('mixModeButton');
    
    if (mixButton) {
        mixButton.addEventListener('click', toggleMixMode);
    }
}
