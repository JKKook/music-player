// import { sampleAPI } from '../src/utils/sample';

// export default
const $mainPage = document.querySelector('#main-page');

const getMusic = async () => {
    const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=890f6fd91ad6920b242de5e7ba183d87
        &format=json`,
    );
    const chart = await response.json();
    return chart;
};

getMusic().then((musicChart) => {
    console.log(
        musicChart.results.trackmatches.track.sort((a, b) => {
            a = parseInt(a.listeners);
            b = parseInt(b.listeners);

            if (a < b) return 1;
            if (a > b) return -1;

            return 0;
        }),
    );

    // layout
    const chartBox = document.createElement('div');
    chartBox.setAttribute('class', 'chartContainer');

    const chartList = document.createElement('ul');
    chartList.setAttribute('class', 'chart-lists');

    chartBox.appendChild(chartList);
    $mainPage.appendChild(chartBox);

    // api 호출
    const musicChartList = chartBox.querySelector('.chart-lists');
    const apiChart = musicChart.results.trackmatches.track;

    apiChart
        .sort((item) => item.listeners)
        .forEach((item) => {
            const list = document.createElement('li');
            list.setAttribute('class', 'chart-list');

            // music title : h4
            const listTitle = document.createElement('h4');
            listTitle.setAttribute('class', 'chart-title');
            listTitle.innerText = `${item.name}`;

            // music artist : span
            const artist = document.createElement('span');
            artist.setAttribute('class', 'chart-artist');
            artist.innerText = `${item.artist}`;

            // music listener : span
            const listener = document.createElement('span');
            listener.setAttribute('class', 'chart-listener');
            listener.innerText = `${item.listeners}`;

            list.appendChild(listener);
            list.append(listTitle);
            list.append(artist);
            list.appendChild(listener);
            chartList.appendChild(list);
        });

    // console.log(chartList);
    // console.log(list);
});
