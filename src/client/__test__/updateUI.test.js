import { updateUI } from '../js/formhandler';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
    test('Checking if UI is updated properly with results of API call', () => {
        const dom = new JSDOM(`<div id="results"></div>`);
        const content = { score_tag: "P", irony: "NONIRONIC" };
        const element = dom.window.document.getElementById('results');
        updateUI(content);
        expect(element.innerHTML).toBe('P <br> NONIRONIC');
    });
});