/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.obj = {};
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let temp;
    for (let i = 0; i < this.words.length; i++) {
      temp = this.words[i + 1] === undefined ? null : this.words[i + 1];
      if (this.obj.hasOwnProperty(this.words[i])) {
        this.obj[this.words[i]].push(temp);
      } else {
        this.obj[this.words[i]] = [temp];
      }
    }
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let word = Object.keys(this.obj)[
      Math.floor(Math.random() * Object.keys(this.obj).length)
    ];
    let sentence = word;
    while (word !== null) {
      word = this.obj[word][Math.floor(Math.random() * this.obj[word].length)];
      if (word !== null) {
        sentence += " " + word;
      }
    }
    return sentence;
  }
}

module.exports = { MarkovMachine };
