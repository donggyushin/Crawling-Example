import express from "express";
import request from "request";
import cheerio from "cheerio";

const mcdonaldsURL =
  "https://www.mcdonalds.co.kr/www/kor/menu/menu_list.do?cate_cd=100";
const naverURL = "https://www.naver.com/";

const url = naverURL;

const router = express.Router();

router.get("/", (req, res) => {
  console.log("olaaj");

  request(url, (error, response, body) => {
    if (error) throw error;

    let resultArr = [];

    const $ = cheerio.load(body);

    let rank = "";
    let keyword = "";
    let realTime = {};

    // console.log($(".ah_item")[0].children[1].children[1].children[0].data);
    // console.log($(".ah_item")[0].children[1].children[3].children[0].data);
    let colArr = $(".ah_item");
    for (let i = 0; i < colArr.length / 2; i++) {
      rank = colArr[i].children[1].children[1].children[0].data;
      keyword = colArr[i].children[1].children[3].children[0].data;
      realTime = {
        rank,
        keyword
      };
      console.log(colArr[i].children[1].children[1].children[0].data);
      console.log(colArr[i].children[1].children[3].children[0].data);
      resultArr.push(realTime);
    }

    return res.json({
      resultArr
    });
  });
});

//밑에는 무시

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
