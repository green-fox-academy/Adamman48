'use strict';

const generatePosts = (data): string => {
  let assemblyArray: string[] = [];

  data.forEach(value => {
    assemblyArray.push(`\n<div id='${value.post_id}'>
      <div class='voting-preview'>
        <img class='upvote-btn' src='./assets/views/images/upvote.png'>
        <p class='score-preview'>${value.post_score}</p>
        <img class='downvote-btn' src='./assets/views/images/downvote.png'>
      </div>
      <div class='post-contents'>
        <h2>${value.post_title}</h2>
        <p>${value.post_content}</p>
        <footer>
        <p>submitted ${value.post_created} by ${value.user_name}</p>
        <p>last edited: ${value.post_lastEdit}</p>
        </footer>
      </div>
    </div>`)
  });
  return assemblyArray.join('')
};

export { generatePosts };