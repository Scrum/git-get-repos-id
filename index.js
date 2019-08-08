"use strict";
exports.__esModule = true;
var graphqlGot = require("graphql-got");
exports["default"] = (function (_a) {
    var owner = _a.owner, repo = _a.repo, token = _a.token;
    return graphqlGot('https://api.github.com/graphql', {
        query: "query { repository(owner: \"" + owner + "\", name: \"" + repo + "\") { id } }",
        token: token
    }).then(function (_a) {
        var repository = _a.body.repository;
        return repository && repository.id || null;
    });
});
