//make directories
var mkdirp = require('mkdirp');

mkdirp('/app/css', function (err) {
    if (err) console.error(err)
    else console.log('CSS directory made')
});

mkdirp('/app/scss', function (err) {
    if (err) console.error(err)
    else console.log('SCSS directory made')
});

mkdirp('/app/JS', function (err) {
    if (err) console.error(err)
    else console.log('JS directory made')
});
mkdirp('/app/fonts', function (err) {
    if (err) console.error(err)
    else console.log('Fonts directory made')
});

mkdirp('/dist', function (err) {
    if (err) console.error(err)
    else console.log('Dist directory made.  Things are getting Snazzie now!');
});