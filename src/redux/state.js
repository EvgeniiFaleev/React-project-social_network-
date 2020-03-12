// Imagine  that we have response from server with posts

import renderEntireTree from "../render";

let enterPosts = [
  { message: "Привет, как дела?", likeCount: "2 лайка" },
  { message: "Не умри от коронавируса", likeCount: "5 лайков" }
];

// Imagine  that we have response from server with dialogs and messages

let enterDialogs = [
  { name: "Jack", id: "1" },
  { name: "Lila", id: "2" },
  { name: "Kirill", id: "3" }
];

let enterMessages = [
  { message: "Hello!", id: "1" },
  { message: "Hello Man!", id: "2" },
  { message: "We gonna Die!", id: "3" }
];
let friends = [
  { name: "Jack", id: "1", online: true },
  { name: "Lila", id: "2", online: true },
  { name: "Kirill", id: "3", online: false },
  { name: "Ann", id: "4", online: false }
];

function addPost(post) {
  let newPost = {
    message: state.ProfilePage.current,
    likeCount: "0"
  };
  enterPosts.push(newPost);
  renderEntireTree(state, addPost, watch);
}

function watch(value) {
  state.ProfilePage.current = value;
  // console.log(state.ProfilePage.current);
  renderEntireTree(state, addPost, watch);
}
// =============================================================
// One object for each Page
let state = {
  ProfilePage: {
    enterPosts: enterPosts,
    current: "Что у вас нового?"
  },
  MessagesPage: {
    enterDialogs: enterDialogs,
    enterMessages: enterMessages
  },
  friends: friends
};
export { state, addPost, watch };
