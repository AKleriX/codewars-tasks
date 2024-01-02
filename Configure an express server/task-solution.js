const solution = () => {
  const express = require('express'),
    app = express();
  return app.listen(process.env.PORT, process.env.HOST, () => true);
};
