// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  res.status(200).json(data);
  // fs.readdir("blogdata", (err, data) => {
  //   console.log(data);
  //   res.status(200).json(data);
  // });
}
