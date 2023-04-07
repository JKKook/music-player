// import { sampleAPI } from '../src/utils/sample';
import items from '../../src/data/music-data.json' assert { type: 'json' };
// export default
const $mainPage = document.querySelector('#main-page');
const playBtn = document.querySelector('.fa-soild');

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

const getMusic = () => {
    // sound.play();
    const arrayItems = Array(items);
    // console.log(arrayItems);
    // layout

    const chartBox = document.createElement('div');
    chartBox.setAttribute('class', 'chartContainer');

    const chartList = document.createElement('ul');
    chartList.setAttribute('class', 'chart-lists');

    chartBox.appendChild(chartList);
    $mainPage.appendChild(chartBox);

    // api 호출
    // const musicChartList = chartBox.querySelector('.chart-lists');
    // const apiChart = musicChart.results.trackmatches.track;

    const result = arrayItems.map((array) => array.items);
    const resultTwo = result[0];

    resultTwo.forEach((item) => {
        // console.log('item', item);
        const list = document.createElement('li');
        list.setAttribute('class', 'chart-list');

        const mainInfo = document.createElement('div');
        mainInfo.setAttribute('class', 'main-info');
        // music listener : span
        const chartRank = document.createElement('h2');
        chartRank.setAttribute('class', 'chart-rank');
        chartRank.innerText = `${item.rank}`;

        // music title : h4
        const listTitle = document.createElement('h2');
        listTitle.setAttribute('class', 'chart-title');
        listTitle.innerText = `${item.title}`;

        const chartImage = document.createElement('img');
        chartImage.setAttribute('class', 'chart-image');
        chartImage.setAttribute('src', `${item.img}`);

        // music artist : span
        const artist = document.createElement('h5');
        artist.setAttribute('class', 'chart-artist');
        artist.innerText = `${item.artist}`;

        const playButton = document.createElement('button');
        playButton.setAttribute('class', 'chart-play');
        playButton.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
        playButton.addEventListener('click', (e) => {
            // console.log(e.target.matches('.fa-circle-play'));

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
                        // 객체 key를 변수로 접근
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
        list.appendChild(playButton);
        chartList.appendChild(list);
    });
};
getMusic();
