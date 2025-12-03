/**
 * emotionData.js
 * 감정별 데이터를 관리하는 모듈
 * - 감정 목록
 * - 각 감정의 배경색
 * - 추천 음악 리스트
 */

// 감정 데이터 정의
export const emotions = [
    {
        id: 'happy',
        name: '행복',
        emoji: '😊',
        description: '기분이 좋고 즐거워요',
        bgGradient: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 50%, #fde68a 100%)',
        music: [
            {
                title: 'Welcome to the Show',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '새로운 시작을 환영하는 희망찬 에너지'
            },
            {
                title: '한 페이지가 될 수 있게',
                artist: 'DAY6 (데이식스)',
                genre: 'Ballad Rock',
                lyric: '소중한 추억으로 남고 싶은 마음'
            },
            {
                title: 'Happy',
                artist: 'DAY6 (데이식스)',
                genre: 'Pop Rock',
                lyric: '행복한 순간을 기원하는 따뜻한 노래'
            },
            {
                title: 'Best Part',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '함께하는 시간이 가장 소중해'
            }
        ]
    },
    {
        id: 'sad',
        name: '슬픔',
        emoji: '😢',
        description: '마음이 우울하고 슬퍼요',
        bgGradient: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)',
        music: [
            {
                title: 'Maybe Tomorrow',
                artist: 'DAY6 (데이식스)',
                genre: 'Ballad',
                lyric: '희미한 희망을 품는 위로의 발라드'
            },
            {
                title: '아직 거기 살아',
                artist: 'DAY6 (데이식스)',
                genre: 'Ballad Rock',
                lyric: '잊을 수 없는 사람에 대한 그리움'
            },
            {
                title: 'Healer',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock Ballad',
                lyric: '상처받은 마음을 치유하고 싶어'
            },
            {
                title: 'Zombie',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '무기력하고 공허한 일상의 모습'
            },
            {
                title: 'For Me',
                artist: 'DAY6 (데이식스)',
                genre: 'Ballad',
                lyric: '이제는 나 자신을 위한 시간'
            },
            {
                title: '그렇더라고요',
                artist: 'DAY6 (데이식스)',
                genre: 'Ballad',
                lyric: '사랑의 아픔을 담담히 받아들이며'
            }
        ]
    },
    {
        id: 'angry',
        name: '화남',
        emoji: '😠',
        description: '화가 나고 짜증나요',
        bgGradient: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 50%, #fca5a5 100%)',
        music: [
            {
                title: 'Sweet Chaos',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '복잡한 감정 속 달콤한 혼란'
            },
            {
                title: 'Shoot Me',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '감정을 해방시키는 강렬한 외침'
            },
            {
                title: '놓아 놓아 놓아',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '답답함을 풀어내는 절규'
            }
        ]
    },
    {
        id: 'calm',
        name: '평온',
        emoji: '😌',
        description: '차분하고 편안해요',
        bgGradient: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 50%, #6ee7b7 100%)',
        music: [
            {
                title: '예뻤어',
                artist: 'DAY6 (데이식스)',
                genre: 'Ballad Rock',
                lyric: '지나간 아름다운 순간을 회상하며'
            },
            {
                title: '어쩌다 보니',
                artist: 'DAY6 (데이식스)',
                genre: 'Ballad',
                lyric: '자연스럽게 흘러온 인연의 여정'
            },
            {
                title: '원하니까',
                artist: 'DAY6 (데이식스)',
                genre: 'Ballad',
                lyric: '간절한 바람을 담은 고백'
            }
        ]
    },
    {
        id: 'excited',
        name: '신남',
        emoji: '🤩',
        description: '에너지 넘치고 신나요',
        bgGradient: 'linear-gradient(135deg, #fae8ff 0%, #f3e8ff 50%, #f0abfc 100%)',
        music: [
            {
                title: '꿈의 버스',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '꿈을 향해 달려가는 청춘의 여정'
            },
            {
                title: '해야 뜨지 말아줘',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '끝나지 않았으면 하는 순간의 소망'
            },
            {
                title: '행복했던 날들이었다',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '추억 속 행복한 시절에 대한 회상'
            },
            {
                title: '장난 아닌데',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '진심을 담은 설렘과 떨림'
            },
            {
                title: 'Dance Dance',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '신나게 춤추며 즐기는 순간'
            },
            {
                title: 'Free하게',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '자유롭게 살고 싶은 열망'
            }
        ]
    },
    {
        id: 'anxious',
        name: '불안',
        emoji: '😰',
        description: '불안하고 초조해요',
        bgGradient: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 50%, #c4b5fd 100%)',
        music: [
            {
                title: 'Congratulations',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '이별의 아픔을 냉소적으로 표현'
            },
            {
                title: 'Love me or Leave me',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '불확실한 관계에 대한 답답함'
            },
            {
                title: '도와줘요 Rock & Roll',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '음악으로 위안받고 싶은 마음'
            },
            {
                title: '바래',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock Ballad',
                lyric: '너의 행복을 간절히 기원하며'
            },
            {
                title: '마라톤',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '끝없는 사랑의 여정과 인내'
            }
        ]
    },
    {
        id: 'love',
        name: '사랑',
        emoji: '🥰',
        description: '사랑스럽고 따뜻해요',
        bgGradient: 'linear-gradient(135deg, #ffe4e6 0%, #fecdd3 50%, #fda4af 100%)',
        music: [
            {
                title: '녹아내려요',
                artist: 'DAY6 (데이식스)',
                genre: 'Ballad',
                lyric: '사랑 앞에 녹아버리는 달콤한 감정'
            },
            {
                title: 'Loveholic',
                artist: 'DAY6 (데이식스)',
                genre: 'Rock',
                lyric: '사랑에 빠져버린 중독적인 감정'
            },
            {
                title: 'Chocolate',
                artist: 'DAY6 (데이식스)',
                genre: 'Pop Rock',
                lyric: '달콤한 사랑의 순간들'
            },
            {
                title: '좋아합니다',
                artist: 'DAY6 (데이식스)',
                genre: 'Ballad',
                lyric: '진심을 담은 솔직한 고백'
            },
            {
                title: '좋은걸 뭐 어떡해',
                artist: 'DAY6 (데이식스)',
                genre: 'Pop Rock',
                lyric: '어쩔 수 없는 설렘과 좋아하는 마음'
            },
            {
                title: '너 생각에',
                artist: 'DAY6 (데이식스)',
                genre: 'Ballad',
                lyric: '온통 그 사람 생각으로 가득한 마음'
            }
        ]
    }
];

/**
 * ID로 감정 데이터 찾기
 * @param {string} emotionId - 감정 ID
 * @returns {Object|null} 감정 데이터 객체 또는 null
 */
export function getEmotionById(emotionId) {
    return emotions.find(emotion => emotion.id === emotionId) || null;
}

/**
 * 모든 감정 목록 반환
 * @returns {Array} 감정 배열
 */
export function getAllEmotions() {
    return emotions;
}

/**
 * 특정 감정의 음악 목록 반환
 * @param {string} emotionId - 감정 ID
 * @returns {Array} 음악 배열
 */
export function getMusicByEmotion(emotionId) {
    const emotion = getEmotionById(emotionId);
    return emotion ? emotion.music : [];
}
