import AbstractView from './AbstractView.js';

// 추상 클래스를 상속 후, 지정
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Player');
    }

    async getHtml() {
        return `
            <span>Player 화면입니다<span>
        `;
    }
}
