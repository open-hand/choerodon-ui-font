const path = require('path');
const gulp = require('gulp');
const ghPages = require('gh-pages');

function pushToGhPages(basePath, done) {
  const options = {
    remote: 'origin',
    branch: 'gh-pages',
    depth: 1,
    logger: function logger(message) {
      console.log(message);
    },
  };
  ghPages.publish(basePath, options, function (err) {
    done(err);
    if (!err) {
      console.log('Site has been published!');
    }
  });
}
gulp.task('deploy', (done) => {
  pushToGhPages(path.join(process.cwd(), 'fonts'), done);
});
