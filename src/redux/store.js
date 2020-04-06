// Imagine  that we have response from server with posts

import dialogsPageReducer from "./dialogs-reducer";
import profilePageReducer from "./profile-reducer";
const ADD_POST = "ADD-POST";
const POST_WATCH = "POST-WATCH";
const SUBSCRIBE = "SUBSCRIBE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const SEND_MESSAGE = "SEND_NEW_MESSAGE";

const store = {
  oldStore: true,
  _state: {
    ProfilePage: {
      enterPosts: [
        { message: "Привет, как дела?", likeCount: "2 лайка" },
        { message: "Не умри от коронавируса", likeCount: "5 лайков" }
      ],
      current: ""
    },
    MessagesPage: {
      enterDialogs: [
        { name: "Jack", id: "1" },
        { name: "Lila", id: "2" },
        { name: "Kirill", id: "3" }
      ],
      enterMessages: [
        { message: "Hello!", id: "1" },
        { message: "Hello Man!", id: "2" },
        { message: "We gonna Die!", id: "3" }
      ],
      current: "Напишите друзьям!"
    },
    friends: [
      { name: "Jack", id: "1", online: true },
      { name: "Lila", id: "2", online: true },
      { name: "Kirill", id: "3", online: false },
      { name: "Ann", id: "4", online: false }
    ]
  },
  _callSubscriber() {
    console.log(1);
  },
  get state() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  // Make one function for all
  dispatch(action) {
    this._state.MessagesPage = dialogsPageReducer(
      this._state.MessagesPage,
      action
    );
    this._state.ProfilePage = profilePageReducer(
      this._state.ProfilePage,
      action
    );

    this._callSubscriber(this);
  }
};

window.store=store;
export default store;