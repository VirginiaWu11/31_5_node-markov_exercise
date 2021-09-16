/** Command-line tool to generate Markov text. */

const { MarkovMachine } = require("./markov");
const fs = require("fs");

function generateText(text) {
    let newText = new MarkovMachine(text);
    console.log(newText.makeText());
}

function makeTextFromFile(path) {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.error(`Cannot read file: ${path}: ${err}`);
            process.exit(1);
        } else {
            generateText(data);
        }
    });
}

async function makeTextFromUrl(url) {
    try {
        let resp = await axios.get(url);
    } catch (err) {
        console.err(`Cannot read URL: ${url}: ${err}`);
        process.exit(1);
    }
    generateText(resp.data);
}

if (process.argv[2] === "file") {
    makeTextFromFile(process.argv[3]);
} else if (process.argv[2] === "url") {
    makeTextFromUrl(process.argv[3]);
} else {
    console.error(`Unknown method: ${process.argv[2]}`);
    process.exit(1);
}
