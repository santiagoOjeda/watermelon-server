const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('TEST ROOT');
});

router.get('/all', function (req, res) {
  res.json({
    posts: [
      {
        title: 'Enim nisi anim cillum ad fugiat officia excepteur ullamco.',
        paragraph:
          'Incididunt anim ullamco cupidatat occaecat cillum mollit amet enim minim officia ullamco. Fugiat est et ea nulla reprehenderit nostrud adipisicing velit dolore ullamco aute sint excepteur id. Nostrud minim aute ut aute.',
      },
      {
        title: 'Enim nisi anim cillum ad fugiat officia excepteur ullamco.',
        paragraph:
          'Incididunt anim ullamco cupidatat occaecat cillum mollit amet enim minim officia ullamco. Fugiat est et ea nulla reprehenderit nostrud adipisicing velit dolore ullamco aute sint excepteur id. Nostrud minim aute ut aute.',
      },
    ],
  });
});

module.exports = router;
