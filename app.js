const fs = require('fs');

const url = process.argv[2];
const cssSelector = process.argv[3];


const prepareCSSSelector = (cs) => {
    let cs1 = cs.toLowerCase();
    cs1 = cs1.replace(/\./g,'');
    cs1 = cs1.replace(/^(\d+)/g,'');
    return cs1;
}

const prepareResult = (rsTag) => {
    let rsTag1 = rsTag.replace(/<\w*>/,'');
    rsTag1 = rsTag1.replace(/<\/\w*>/,'');
    return rsTag1;
}
const cssSelectorPrepared = prepareCSSSelector(cssSelector)

async function fetchHTML(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error. Status: ${response.status}`);
        }
        const html = await response.text();
        console.log(`The web page was successfully captured.`);
        return html
    } catch (error) {
        console.log(`Error fetching HTML: ${error}`);
    }
}

async function captureSelectorContent(url,selector) {
    const webPage = await fetchHTML(url);
    const regex = new RegExp(`(<${selector}>)(.?)+(<\/${selector}>)`,"gm")
    let matchedTags;
    matchedTags = webPage.match(regex);
    if (matchedTags === null) {
        console.log(`No match found for ${selector}`)
    } else {
        console.log(`I 've found the following contents between the css selector ${selector}`)
        let i = 0;
        for (const item of matchedTags) {
            i += 1;
            console.log(i,prepareResult(item))
        }
    }
    
}
captureSelectorContent(url,cssSelectorPrepared)
//const webPage = fs.readFileSync(url).toString();