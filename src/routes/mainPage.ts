import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).send({ data: [
    {
      name: 'JavaScript',
      value: 80
    },
    {
      name: 'TypeScript',
      value: 75
    },
    {
      name: 'React.js',
      value: 60
    },
    {
      name: 'Node.js',
      value: 80
    },
    {
      name: 'HTML',
      value: 60
    },
    {
      name: 'CSS',
      value: 50
    },
    {
      name: 'MongoDB',
      value: 75
    },
    {
      name: 'MySQL',
      value: 75
    },
    
  ] });
});

export default router;
