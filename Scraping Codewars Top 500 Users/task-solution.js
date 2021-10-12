const request = require('request');
const cheerio = require('cheerio');
const URL = 'https://www.codewars.com/users/leaderboard';

function solution() {

    return new Promise(function(resolve, reject) {
        let leaderboard = {
            position: {}
        };

        request(URL, (error, response, html) => {
            let $ = cheerio.load(html);
            $('div.leaderboard table tr').each((iterat, element) => {
                if (iterat > 0) {
                    let data = {
                        name: element.attribs["data-username"],
                        clan: element.children[2].children[0]
                            ? element.children[2].children[0].data
                            : "",
                        honor:  Number(element.children[3].children[0].data.replace(/,/g, ""))
                    };
                    leaderboard.position[iterat] = data;
                }
            });
            resolve(leaderboard);
        })
    });
}