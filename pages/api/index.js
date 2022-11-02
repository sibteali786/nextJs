// pages/api/data.js
// route => /api/data
import nc from "next-connect";

const handler = nc()
  .get((req, res) => {
    res.json({ message: "Hello World from GET" });
  })
  .post((req, res) => {
    res.json({ message: "Hello World from POST" });
  })
  .put((req, res) => {
    res.json({ message: "Hello World from PUT" });
  })
  .delete((req, res) => {
    res.json({ message: "Hello World from DELETE" });
  });

export default handler;
