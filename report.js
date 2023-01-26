const newman = require ('newman');

newman.run({
    // collection: require ('./collection/collection.json'),
    // collection: require ('./collection/collection.json'),
    collection: "https://api.postman.com/collections/25364187-54d8395f-014f-43e2-be8a-75cc380c3658?access_key=PMAT-01GQMCQEY9WP7HZVA29KA2SKKK",
    //environment:require ('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',//if not specified , the file will be written to 'newman/'
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');

});