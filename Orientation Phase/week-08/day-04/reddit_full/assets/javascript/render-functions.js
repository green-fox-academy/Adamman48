'use strict';
exports.__esModule = true;
var generatePosts = function (data) {
    var assemblyArray = [];
    data.forEach(function (value) {
        assemblyArray.push("\n<div id='" + value.post_id + "'>\n      <div class='voting-preview'>\n        <img class='upvote-btn' src='./assets/views/images/upvote.png'>\n        <p class='score-preview'>" + value.post_score + "</p>\n        <img class='downvote-btn' src='./assets/views/images/downvote.png'>\n      </div>\n      <div class='post-contents'>\n        <h2>" + value.post_title + "</h2>\n        <p>" + value.post_content + "</p>\n        <footer>\n        <p>submitted " + value.post_created + " by " + value.user_name + "</p>\n        <p>last edited: " + value.post_lastEdit + "</p>\n        </footer>\n      </div>\n    </div>");
    });
    return assemblyArray.join('');
};
exports.generatePosts = generatePosts;
