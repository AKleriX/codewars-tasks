const axios = require('axios');
const cheerio = require('cheerio');
const URL = 'https://www.codewars.com/users/leaderboard';

const getLeaderboardHonor = () => {
  return new Promise(function (resolve, reject) {
    let leaderboard = axios
      .get(URL)
      .then((response) => response.data)
      .then((data) => {
        let $ = cheerio.load(data),
          honors = [];
        $('div.leaderboard table tr').each((iterat, element) => {
          if (iterat > 0)
            honors.push(Number(element.children[3].children[0].data.replace(/,/g, '')));
        });
        return honors;
      });
    resolve(leaderboard);
  });
};
