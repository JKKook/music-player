import items from '../../src/data/music-data.json' assert { type: 'json' };
import { LYRICS } from '../../src/utils/data-lyric.js';

// Variables
const $mainPage = document.querySelector('#main-page');
const $lyricContainer = document.querySelector('#lyric-container');
const $lyric = document.querySelector('#lyric');
const musicChart = {
    soundRankOne: new Audio('/audios/Hot-potato_Something.mp3'),
    soundRankTwo: new Audio('/audios/Seongsigyeong_Solar-system.mp3'),
    soundRankThree: new Audio('/audios/Black-skirt_Antifreeze.mp3'),
    soundRankFour: new Audio(
        '/audios/Thorn-apple_Our-nights-are-more-beautiful-than-your-days.mp3',
    ),
    soundRankFive: new Audio('/audios/Mc-the-Max_Wind-Beneath-your-wings.mp3'),
    soundRankSix: new Audio('/audios/Thorn-apple_Shimmer.mp3'),
    soundRankSeven: new Audio('/audios/Thorn-apple_Blue-spring.mp3'),
    soundRankEight: new Audio('/audios/Jiteun_Disappering-of-things.mp3'),
    soundRankNine: new Audio('/audios/Leeseoungi_Love-of-prohibition.mp3'),
    soundRankTen: new Audio('/audios/Leeseoungi_Emergency-room.mp3'),
    soundRankEleven: new Audio('/audios/Mc-the-Max_Goodbye-for-a-moment.mp3'),
};

// getMusic Method
// Main-page 동적 태그 생성
const getMusic = () => {
    const arrayItems = Array(items);
    const result = arrayItems.map((array) => array.items);
    const resultTwo = result[0];

    const chartBox = document.createElement('div');
    chartBox.setAttribute('class', 'chartContainer');

    const chartList = document.createElement('ul');
    chartList.setAttribute('class', 'chart-lists');

    chartBox.appendChild(chartList);
    $mainPage.appendChild(chartBox);

    resultTwo.forEach((item) => {
        const list = document.createElement('li');
        list.setAttribute('class', 'chart-list');

        const mainInfo = document.createElement('div');
        mainInfo.setAttribute('class', 'main-info');

        const chartRank = document.createElement('h2');
        chartRank.setAttribute('class', 'chart-rank');
        chartRank.innerText = `${item.rank}`;

        const listTitle = document.createElement('h2');
        listTitle.setAttribute('class', 'chart-title');
        listTitle.innerText = `${item.title}`;

        const chartImage = document.createElement('img');
        chartImage.setAttribute('class', 'chart-image');
        chartImage.setAttribute('src', `${item.img}`);

        const artist = document.createElement('h5');
        artist.setAttribute('class', 'chart-artist');
        artist.innerText = `${item.artist}`;

        const lyricIcon = document.createElement('button');
        lyricIcon.setAttribute('class', 'lyric-button');
        lyricIcon.innerHTML = `<i class="fa-solid fa-align-center"></i>`;
        lyricIcon.addEventListener('click', (e) => {
            if (e.target.matches('.fa-align-center')) {
                const selected = LYRICS[item.lyric];
                console.log(selected);
                if (selected) {
                    showUpWithLyric(selected);
                }
            }
        });

        const playButton = document.createElement('button');
        playButton.setAttribute('class', 'chart-play');
        playButton.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
        playButton.addEventListener('click', (e) => {
            if (e.target.matches('.fa-circle-play')) {
                playButton.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
                if (musicChart) {
                    console.log(musicChart);
                    // 객체 key를 변수로 접근
                    const selected = musicChart[item.audio];
                    return selected.play();
                }
            }

            const stopBtn = document.querySelector('.fa-circle-pause');
            stopBtn.addEventListener('click', (e) => {
                if (e.target.matches('.fa-circle-pause')) {
                    stopBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
                    if (musicChart) {
                        console.log(musicChart);
                        const selected = musicChart[item.audio];
                        return selected.pause();
                    }
                }
            });
        });

        mainInfo.appendChild(chartRank);
        mainInfo.appendChild(listTitle);

        list.appendChild(mainInfo);
        list.append(artist);
        list.appendChild(chartImage);
        list.appendChild(lyricIcon);
        list.appendChild(playButton);

        chartList.appendChild(list);
    });
};
getMusic();

const showUpWithLyric = (lyrics) => {
    $lyricContainer.classList.remove('lyric-hide');
    $lyric.innerText = lyrics;
};

//
const hideLyric = document.createElement('button');
hideLyric.setAttribute('class', 'lyric-hide-button');
hideLyric.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
$lyricContainer.appendChild(hideLyric);

const hideWithLyric = () => {
    $lyricContainer.classList.add('lyric-hide');
};

hideLyric.addEventListener('click', () => {
    hideWithLyric();
});
