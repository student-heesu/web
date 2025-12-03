/**
 * music-page.js
 * 음악 추천 페이지 전용 스크립트
 * URL 파라미터로 전달된 감정 ID를 기반으로 음악 표시
 */

import { getEmotionById } from './emotionData.js';

/**
 * URL 파라미터에서 감정 ID 가져오기
 * @returns {string|null} 감정 ID 또는 null
 */
function getEmotionFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('emotion');
}

/**
 * URL에서 믹스 감정들 가져오기
 * @returns {Array|null} 감정 ID 배열 또는 null
 */
function getMixEmotionsFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const emotionsParam = urlParams.get('emotions');
    return emotionsParam ? emotionsParam.split(',') : null;
}

/**
 * 음악 카드 엘리먼트 생성
 * @param {Object} music - 음악 데이터 객체
 * @param {number} index - 음악 순번
 * @returns {HTMLElement} 음악 카드 엘리먼트
 */
function createMusicCard(music, index) {
    const card = document.createElement('div');
    card.className = 'music-card';
    
    // 유튜브 검색 URL 생성
    const searchQuery = encodeURIComponent(`DAY6 ${music.title}`);
    const youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;
    
    card.innerHTML = `
        <div class="music-number">${index}</div>
        <span class="music-icon">🎵</span>
        <div class="music-info">
            <a href="${youtubeUrl}" target="_blank" class="music-title-link">
                <h3 class="music-title">${music.title}</h3>
            </a>
            <p class="music-lyric">"${music.lyric}"</p>
        </div>
        <p class="music-genre">${music.genre}</p>
    `;
    
    return card;
}

/**
 * 음악 그리드 렌더링
 * @param {Array} musicList - 음악 배열
 */
function renderMusicGrid(musicList) {
    const musicGrid = document.getElementById('musicGrid');
    if (!musicGrid) return;
    
    musicGrid.innerHTML = '';
    
    if (musicList && musicList.length > 0) {
        musicList.forEach((music, index) => {
            const musicCard = createMusicCard(music, index + 1);
            musicGrid.appendChild(musicCard);
        });
        
        musicGrid.classList.add('show');
    } else {
        musicGrid.innerHTML = `
            <div class="music-empty">
                <div class="music-empty-icon">🎵</div>
                <p class="music-empty-text">추천 음악이 없습니다</p>
                <p class="music-empty-hint">다른 감정을 선택해보세요</p>
            </div>
        `;
    }
}

/**
 * 페이지 헤더 업데이트
 * @param {Object} emotion - 감정 데이터 객체
 */
function updatePageHeader(emotion) {
    const emotionEmoji = document.getElementById('emotionEmoji');
    const emotionName = document.getElementById('emotionName');
    const emotionDescription = document.getElementById('emotionDescription');
    
    if (emotionEmoji) emotionEmoji.textContent = emotion.emoji;
    if (emotionName) emotionName.textContent = emotion.name;
    if (emotionDescription) emotionDescription.textContent = emotion.description;
}

/**
 * 페이지 배경 변경
 * @param {Object} emotion - 감정 데이터 객체
 */
function updatePageBackground(emotion) {
    const musicPage = document.getElementById('musicPage');
    if (!musicPage) return;
    
    musicPage.setAttribute('data-theme', emotion.id);
    musicPage.style.background = emotion.bgGradient;
}

/**
 * 페이지 타이틀 업데이트
 * @param {Object} emotion - 감정 데이터 객체
 */
function updatePageTitle(emotion) {
    document.title = `${emotion.emoji} ${emotion.name} 음악 추천 - Emotion Music`;
}

/**
 * 페이지 초기화
 */
function initMusicPage() {
    console.log('=================================');
    console.log('음악 추천 페이지 초기화 시작...');
    console.log('=================================');
    
    // URL에서 감정 ID 가져오기
    const emotionId = getEmotionFromURL();
    
    if (!emotionId) {
        console.error('감정 ID가 URL에 없습니다. 메인 페이지로 이동합니다.');
        window.location.href = 'index.html';
        return;
    }
    
    console.log(`선택된 감정 ID: ${emotionId}`);
    
    // 감정 데이터 가져오기
    const emotion = getEmotionById(emotionId);
    
    if (!emotion) {
        console.error(`감정을 찾을 수 없습니다: ${emotionId}`);
        window.location.href = 'index.html';
        return;
    }
    
    console.log(`감정 데이터 로드 완료: ${emotion.name}`);
    
    // 페이지 업데이트
    updatePageTitle(emotion);
    updatePageHeader(emotion);
    updatePageBackground(emotion);
    renderMusicGrid(emotion.music);
    
    console.log('=================================');
    console.log('음악 페이지 초기화 완료! 🎉');
    console.log(`총 ${emotion.music.length}곡의 음악 추천`);
    console.log('=================================');
}

/**
 * 믹스 모드 처리
 */
function handleMixMode(emotionIds) {
    const emotions = emotionIds.map(id => getEmotionById(id)).filter(e => e !== null);
    
    if (emotions.length === 0) {
        window.location.href = 'index.html';
        return;
    }
    
    // 모든 감정의 음악 합치기
    let allMusic = [];
    emotions.forEach(emotion => {
        allMusic = allMusic.concat(emotion.music);
    });
    
    // 랜덤 셔플
    allMusic = shuffleArray(allMusic);
    
    // 믹스 모드용 헤더 업데이트
    const emotionEmoji = document.getElementById('emotionEmoji');
    const emotionName = document.getElementById('emotionName');
    const emotionDescription = document.getElementById('emotionDescription');
    
    if (emotionEmoji) emotionEmoji.textContent = '🎭';
    if (emotionName) emotionName.textContent = '믹스 모드';
    if (emotionDescription) emotionDescription.textContent = 
        `${emotions.map(e => e.name).join(' + ')} 감정이 섞인 음악`;
    
    // 그라데이션 믹스
    const musicPage = document.getElementById('musicPage');
    if (musicPage) {
        musicPage.style.background = 'linear-gradient(135deg, #fef3c7 0%, #dbeafe 25%, #ffe4e6 50%, #d1fae5 75%, #fae8ff 100%)';
    }
    
    document.title = `🎭 믹스 모드 - Emotion Music`;
    
    renderMusicGrid(allMusic);
    
    console.log('=================================');
    console.log('믹스 모드 초기화 완료! 🎉');
    console.log(`총 ${allMusic.length}곡의 음악 추천`);
    console.log('=================================');
}

/**
 * 배열 셔플
 */
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

/**
 * 페이지 로드 완료 시 초기화
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusicPage);
} else {
    initMusicPage();
}

/**
 * 에러 핸들링
 */
window.addEventListener('error', (event) => {
    console.error('페이지 에러 발생:', event.error);
});
