import AbstractView from './AbstractView.js';

// 추상 클래스를 상속 후, 지정
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Dashboard');
    }

    async getHtml() {
        return `
            <span>DashBoard 화면입니다<span>
        `;
    }
}
