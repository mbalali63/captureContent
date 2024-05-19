# Capture Content

This code is implemented using Node-js. I 've done this during node-js learning process.
That was a suggested exercise in roadmap.sh website.
the code could be used as a CLI tool. The command should be run like this:

``` node app.js url cssSelector```
<br><br>

here url is the webpage address to be checked, and cssSelector 
is the css selector which the code will check for.


the code includes some prepration steps for the css selector. in the other words, if the user enter a wrong css selector with the following properties, the code will correct it:
1. css selectors with initiating digits will be corrected. (the initiating digits will be removed.)
2. css selectors with captial letter will be corrected. (the css selectors will be converted to lower case.)
3. any dot in the css selector will be removed.


<br><br>
the final result is an ordered list of the contents of the specified tag.