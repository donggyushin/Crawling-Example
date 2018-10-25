import express from "express";
import request from "request";

const url = "http://www.mcdonalds.co.kr/www/kor/menu/menu_list.do?cate_cd=100";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("olaaj");

  request(url, (error, response, body) => {
    if (error) throw error;

    console.log(body);
    return res.json({
      body
    });
  });
});

router.post("/", (req, res) => {
  console.log(req.body.contents);
  return res.json({
    success: true
  });
});

router.get("/:id", (req, res) => {
  console.log("reading post ", req.params.id);
  return json({
    index: req.params.id
  });
});

export default router;
