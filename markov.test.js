const { MarkovMachine } = require("./markov");

describe("Markov Class", () => {
    let machine;
    beforeEach(function () {
        machine = new MarkovMachine("the cat in the hat is in the hat");
    });
    test("Markov class words should be an Array", () => {
        expect(machine.words).toEqual(expect.any(Array));
    });
    test("Markov class obj should be an Object", () => {
        expect(machine.obj).toEqual(expect.any(Object));
    });
    test("makeText function to contain characters in the object", () => {
        let sentence = machine.makeText();
        let sentenceArr = sentence.split(" ");
        expect("the cat in the hat is in the hat").toContain(sentenceArr[0]);
        expect("the cat in the hat is in the hat").toContain(sentenceArr[1]);
    });
});
