// import { sampleAPI } from '../src/utils/sample';
import items from '../../src/data/music-data.json' assert { type: 'json' };
// export default
const $mainPage = document.querySelector('#main-page');

const soundRankOne = new Audio('/audios/Hot-potato_Something.mp3');
const soundRankTwo = new Audio('/audios/Seongsigyeong_Solar-system.mp3');
const soundRanKThree = new Audio('/audios/Black-skirt_Antifreeze.mp3');
const soundRankFour = new Audio(
    '/audios/Thorn-apple_Our-nights-are-more-beautiful-than-your-days.mp3',
);
const soundRankFive = new Audio(
    '/audios/Mc-the-Max_Wind-Beneath-your-wings.mp3',
);
const soundRankSix = new Audio('/audios/Thorn-apple_Shimmer.mp3');
const soundRankSeven = new Audio('/audios/Thorn-apple_Blue-spring.mp3');
const soundRankEight = new Audio('/audios/Jiteun_Disappering-of-things.mp3');
const soundRankNine = new Audio('/audios/Leeseoungi_Love-of-prohibition.mp3');
const soundRankTen = new Audio('/audios/Leeseoungi_Emergency-room.mp3');
const soundRankEleven = new Audio(
    '/audios/Mc-the-Max_Goodbye-for-a-moment.mp3',
);

const musicChart = [
    soundRankOne,
    soundRankTwo,
    soundRanKThree,
    soundRankFour,
    soundRankFive,
    soundRankSix,
    soundRankSeven,
    soundRankEight,
    soundRankNine,
    soundRankTen,
    soundRankEleven,
];

const getMusic = () => {
    // sound.play();
    const arrayItems = Array(items);
    console.log(arrayItems);
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
                console.log(item.audio); // soundRank
                // musicChart.forEach((el) => el.play());
                musicChart.forEach((selectMusic) => {
                    console.log(selectMusic[0]);
                    // while (musicChart.length > 0) {
                    //     if (selectMusic) {
                    //         const select = selectMusic === musicChart[0];
                    //         select.play();
                    //         musicChart.shift();
                    //     }
                    // }
                    // console.log(selectMusic);
                });
            }
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
// getMusic().then((musicChart) => {
//     console.log(musicChart);
//     // console.log(
//     //     musicChart.results.trackmatches.track.sort((a, b) => {
//     //         a = parseInt(a.listeners);
//     //         b = parseInt(b.listeners);

//     //         if (a < b) return 1;
//     //         if (a > b) return -1;

//     //         return 0;
//     //     }),
//     // );

// });
