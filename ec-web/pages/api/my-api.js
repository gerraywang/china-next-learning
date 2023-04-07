// pages/api/my-api.js
//URLは環境変数に入れた方が理想、その書き方要検討、next.config.jsにて実現済みなので、ここは不要
export default async function handler(req, res) {
    const { center_no } = req.query;
    const url = `https://ec-warehouse-et76x6ix4q-an.a.run.app/api/v1/center?center_no=${center_no}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  }
  