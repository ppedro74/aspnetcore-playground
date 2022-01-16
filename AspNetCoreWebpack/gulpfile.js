/// <binding ProjectOpened='webpack-watch' />
'use strict';
var gulp = require('gulp');
const { exec, spawn } = require('child_process');
const app_data = process.env["appdata"];

gulp.task('webpack-watch', function (cb) {
    //const cmd = spawn(app_data+'\\npm\\yarn', ['run', 'watch']);
    //const cmd = spawn('npm', ['run', 'watch']);
    //cmd.stdout.on('data', (data) => {
    //    console.log(`stdout: ${data}`);
    //});
    //cmd.stderr.on('data', (data) => {
    //    console.error(`stderr: ${data}`);
    //});
    //cmd.on('close', (code) => {
    //    console.log(`child process exited with code ${code}`);
    //    cb(code);
    //});

    if (false) {
        exec('yarn run watch', (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(stdout);
        });

    }

    cb();
});

