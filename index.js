/**
 * 描述
 * @author Abdul Muttaqin
 * @date 2021-05-17
 */
var express = require("express");
const { ngeskrep , ngeskrep_basic } = require("./controller/scrap");
var app = express();

/**
 * 描述
 * @author Abdul Muttaqin
 * @date 2021-05-17
 * @param {any} "/premium-cek"
 * @param {any} asyncfunction(req
 * @param {any} res
 * @param {any} next
 * @returns {any}
 */
app.get("/premium-cek", async function (req, res, next) {
  if (req.query.user == null) {
    res.send("masukan username");
  } else if (req.query.pass == null) {
    res.send("masukan password");
  }
 const ahah = await ngeskrep(req.query.user , req.query.pass)
  res.json(ahah)
});

/**
 * 描述
 * @author Abdul Muttaqin
 * @date 2021-05-17
 * @param {any} "/cek"
 * @param {any} asyncfunction(req
 * @param {any} res
 * @param {any} next
 * @returns {any}
 */
app.get("/cek", async function (req, res, next) {
  if (req.query.user == "") {
    res.send("masukan username");
  } else if (req.query.pass == "") {
    res.send("masukan password");
  }
  const ahah = await ngeskrep_basic(req.query.user , req.query.pass)
  res.json(ahah)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("%c Server running", "color: green");
});
