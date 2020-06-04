const AWS = require("aws-sdk")
//import { config, CodeCommit } from "aws-sdk"

if (!AWS.config.region) {
    AWS.config.update({
        region: 'ap-southeast-2'
    })
}
let codecommit = new AWS.CodeCommit({apiVersion: '2015-04-13'});

var params = {}

codecommit.listRepositories(params, function(err, data) {
    if (err) console.log(err, err.stack)
    else console.log(data)
})
