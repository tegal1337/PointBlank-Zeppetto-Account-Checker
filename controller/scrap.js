const axios = require("axios").default;
const axiosCookieJarSupport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
const queryString = require("query-string");
const { htmlToText } = require("html-to-text");
const cheerio = require("cheerio");
const { info_match, info_akun } = require("./selector");
axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();

async function ngeskrep(user , pass){
const config = {
    userid: user,
    password: pass,
  };
  let hey = [];
  await axios.post(
    "https://www.pointblank.id/login/process",
    queryString.stringify(config),
    {
      jar: cookieJar,
      withCredentials: true,
    }
  );
  await axios
    .get("https://pointblank.id/ranking/individual/list", {
      jar: cookieJar,
      withCredentials: true,
    })
    .then((result) => {
      hey.push(info_akun(result.data));
    });
  await axios
    .get("https://pointblank.id/mypage/profile", {
      jar: cookieJar,
      withCredentials: true,
    })
    .then((yea) => {
      hey.push(info_match(yea.data));
    });
  return hey;
  //console.log(hey)
}
async function ngeskrep_basic(user , pass){
    const config = {
        userid: user,
        password: pass,
      };
      let hey = [];
      const gud = await axios.post(
        "https://www.pointblank.id/login/process",
        queryString.stringify(config),
        {
          jar: cookieJar,
          withCredentials: true,
        }
      );
      if (gud.data.includes("Data login")) {
        res.json({ pesan: "data yang dimasukan salah , tolong cek lagi" });
      } else if (gud.data.includes("Anda telah")) {
        res.json({ pesan: "melebihi batas waktu salah" });
      }
      await axios
        .get("https://pointblank.id/ranking/individual/list", {
          jar: cookieJar,
          withCredentials: true,
        })
        .then((result) => {
          hey.push(info_akun(result.data));
        });
return hey;    
}
exports.ngeskrep = ngeskrep;
exports.ngeskrep_basic = ngeskrep_basic;
