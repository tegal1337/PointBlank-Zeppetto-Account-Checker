const cheerio = require("cheerio");
const dev = {
  inisiapa: "Tegal 1337",
};

/**
 * Abdul Muttaqin
 * @date 2021-05-17
 * @param {any} html
 * @returns {any}
 */
function info_match(html) {
  let kamu = [];
  let $ = cheerio.load(html);
  const clan = $(
    "#container > div > div.sub_wrap > div > div > div.profile_wrap.tac.pb6 > div > div.ft14.clan"
  ).text();
  const mvp = $(
    "#container > div > div.sub_wrap > div > div > div.pop_rank.mb6 > div > ul > li:nth-child(1) > div > div"
  ).text();
  const match = $(
    "#container > div > div.sub_wrap > div > div > div.voucher_wrap > div:nth-child(2) > ul.rank_match.clr > li:nth-child(1) > div > div"
  ).text();
  const win = $(
    "#container > div > div.sub_wrap > div > div > div.voucher_wrap > div:nth-child(2) > ul.rank_match.clr > li:nth-child(1) > div > div"
  ).text();
  const lose = $(
    "#container > div > div.sub_wrap > div > div > div.voucher_wrap > div:nth-child(2) > ul.rank_match.clr > li:nth-child(3) > div > div"
  ).text();
  const draw = $(
    "#container > div > div.sub_wrap > div > div > div.voucher_wrap > div:nth-child(2) > ul.rank_match.clr > li:nth-child(4) > div > div"
  ).text();
  const kill = $(
    "#container > div > div.sub_wrap > div > div > div.voucher_wrap > div:nth-child(2) > ul.rank_kill.clr.mt3 > li:nth-child(1) > div > div"
  ).text();
  const assist = $(
    "#container > div > div.sub_wrap > div > div > div.voucher_wrap > div:nth-child(2) > ul.rank_kill.clr.mt3 > li:nth-child(2) > div > div"
  ).text();
  const death = $(
    "#container > div > div.sub_wrap > div > div > div.voucher_wrap > div:nth-child(2) > ul.rank_kill.clr.mt3 > li:nth-child(3) > div > div"
  ).text();
  const kd = $(
    "#container > div > div.sub_wrap > div > div > div.voucher_wrap > div:nth-child(2) > ul.rank_kill.clr.mt3 > li:nth-child(4) > div > div"
  ).text();
  const headshot = $(
    "#container > div > div.sub_wrap > div > div > div.voucher_wrap > div:nth-child(2) > ul.rank_kill.clr.mt3 > li:nth-child(5) > div > div"
  ).text();
  kamu.push = {
    clan: clan,
    mvp: mvp,
    match: match,
    win: win,
    lose: lose,
    draw: draw,
    kill: kill,
    assist: assist,
    death: death,
    kd: kd,
    headshot: headshot,
    dev: [dev.inisiapa],
  };
  return kamu.push;
}

/**
 * Abdul Muttaqin
 * @date 2021-05-17
 * @param {any} html
 * @returns {any}
 */
function info_akun(html) {
  let infonya;
  let $ = cheerio.load(html);
  const win = $("#container > div > div.my_rank > div > ul > li.win")
    .text()
    .split("-");
  const nick = $("#container > div > div.my_rank > div > ul > li.nick")
    .text()
    .replace("me", "");
  const rank = $("#container > div > div.my_rank > div > ul > li.rank")
    .text()
    .replace("\n\t\t\t\t\t\t\n\t\t\t\t\t\t", "");
  const xp = $("#container > div > div.my_rank > div > ul > li.exp").text();
  infonya = {
    nickname: nick,
    ranknya: rank,
    expnya: xp,
    ranking_sekarang: win[0],
    ranking_menurun: win[1],
    dev: [dev.inisiapa],
  };
  return infonya;
}
module.exports = {
  info_match,
  info_akun,
};
