const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const jwt_decode = require('jwt-decode');


const db = require('../config/mysql');
const { deleteRichMenu } = require('../services/delete-richmenu');
const { createRichMenu } = require('../services/create-richmenu');

/* GET home page. */
// localhost:8000/getpromotion
router.get('/getpromotion', async function(req, res, next) {
  const conn = await db.connectMySQL();
  const [rows] = await conn.query("select * from pro_room order by id desc limit 12");
  return res.status(200).json(rows);
});

// localhost:8000/getpromotion/2
// get room promotion by primary key
router.get('/getpromotion/:id', async function(req, res, next) {
  const conn = await db.connectMySQL();
  const [rows] = await conn.query("select * from pro_room where id=?", [req.params.id]);
  return res.status(200).json(rows[0]);
});

// localhost:8000/deleterichmenu
router.get('/deleterichmenu', async function(req, res, next) {
  await deleteRichMenu();
  return res.status(200).json({message:'rich menu delete success'});
});

// localhost:8000/createrichmenu
router.get('/createrichmenu', async function(req, res, next) {
  await createRichMenu();
  return res.status(200).json({message:'rich menu built success'});
});

// localhost:8000/auth/callback
router.get('/auth/callback', async function(req, res, next) {
  // console.log(req.query.code);

  // get access token
  const params = new URLSearchParams({
      grant_type: 'authorization_code',
      code: req.query.code,
      redirect_uri: process.env.BASE_URL + "/auth/callback", // callback url 
      client_id: process.env.LOGIN_CLIENT_ID,
      client_secret: process.env.LOGIN_CLIENT_SECRET
  });
  // console.log(params);

  const response = await axios.post('https://api.line.me/oauth2/v2.1/token', params, {
      headers: { "Content-Type" : "application/x-www-form-urlencoded" }
  });

  // get profile from id_token
  const user = jwt_decode(response.data.id_token);

  return res.status(200).json({
      user: user,
      response: response.data
  });
});

// localhost:8000/suggestion
router.post('/suggestion', async function(req, res, next) {
  console.log(req.body);
  const conn = await db.connectMySQL();
  const [result] = await conn.query("INSERT INTO suggests SET ?", req.body);
  return res.status(200).json({
      bookId: result.insertId, //last insert id
      message: 'Success'
  });
});

module.exports = router;
