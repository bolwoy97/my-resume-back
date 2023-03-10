import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  throw new Error("my error");
  
  res.send('respond with a resource');
});

export default router;
