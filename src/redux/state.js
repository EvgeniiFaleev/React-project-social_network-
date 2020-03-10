// Imagine  that we have response from server with posts

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

// =============================================================
// One object for each Page
let state = {
  ProfilePage: {
    enterPosts: enterPosts
  },
  MessagesPage: {
    enterDialogs: enterDialogs,
    enterMessages: enterMessages
  }
};
export { state };
