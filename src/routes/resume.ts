import express from 'express';
import db from '../db/conn';
const router = express.Router();

/* GET users listing. */
router.get('/competencies', async function(req, res, next) {
  const collection = await db().collection("competencies");
  const result = await collection.find({})
    .limit(50)
    .toArray();
  res.status(200).send({ data: result });  
});

export default router;
