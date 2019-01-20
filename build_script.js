const PolymerProject = require('polymer-build').PolymerProject; 
const project = new PolymerProject(require('./polymer.json'));
const gulp = require('gulp');
const mergeStream = require('merge-stream');
const fs = require('fs').promises;
const rimraf = require('rimraf').sync;

const clientSideRoutes = [
    "/404", "/reflections", "/works"
];

console.log('Cleaning build');
rimraf("build");

console.log("Starting build...");
const ts = Date.now();

mergeStream(project.sources(), project.dependencies())
  .pipe(project.bundler())
  .pipe(gulp.dest('build/'))
  .on('end', () => {
      console.log("Build complete in " + (Date.now() - ts) / 1000 + " seconds");
      
      Promise.all(clientSideRoutes.map(async route => {
          await fs.mkdir(`${__dirname}/build${route}`);
          await fs.symlink('../index.html', `${__dirname}/build${route}/index.html`)
      }))
          .then(() => console.log("Symlinks for client side routes generated"))
          .catch(err => console.error(err));
  });

  