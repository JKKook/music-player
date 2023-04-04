'use strict';

import dashboard from './pages/dashboard';
import player from './pages/player';

const pathToRegex = (path) =>
    new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

// pushState(state : 새로운 세션 기록 항목에 연결할 상태 객체, title : 보통 빈 문자열을 지정, url)
const navigateTo = (url) => {
    history.pushState({}, '', url);
    app();
};

const routes = [
    { path: '/', view: () => dashboard },
    { path: '/player', view: () => player },
    // {path : '/detail/:id', view : () => {}}
];

const app = async () => {
    // test each route for potential match
    const potentialMatches = routes.map((route) => {
        return {
            route,
            // isMatch: window.location.pathname === route.path, // return route[]
            result: location.pathname.match(pathToRegex(route.path)),
        };
    });
    let match = potentialMatches.find(
        (potentialMatch) => potentialMatch.isMatch,
    );
    console.log(match);

    // 경로가 일치하지 않으면, 초기 값으로 돌리기 위해 routes[0] : '/' 을 지정
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true, // undefined 시, true로 하는 이유
        };
    }
    const pages = new match.route.view();
    document.querySelector('#main-page').innerHTML = await pages.getHtml();
};

// 앞, 뒤 이동 history API
window.addEventListener('popstate', app);

// 리디렉션 방지, 새로 고침 시 경로가 풀려서 에러가 발생하는 문제 해결
document.addEventListener('DOMContentLoaded', () => {
    // 이벤트 위임, 앵커 태그에 data-link 속성이 부가 된 것만 이벤트 발생
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            // href 주소값을 통해 경로로 전달
            const targetURL = e.target.href.replace(BASE_URL, '');
            navigateTo(targetURL);
        }
    });
    app();
});
