// Imagine  that we have response from server with posts

const ADD_POST = "ADD-POST";
const POST_WATCH = "POST-WATCH";
const SUBSCRIBE = "SUBSCRIBE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const SEND_MESSAGE = "SEND_NEW_MESSAGE";

const store = {
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

  _watch(value) {
    this._state.ProfilePage.current = value;
    console.log(this._state.ProfilePage.current);
    // console.log(state.ProfilePage.current);
    this._callSubscriber(this);
  },
  _addPost() {
    let newPost = {
      message: this._state.ProfilePage.current,
      likeCount: "0"
    };
    this._state.ProfilePage.enterPosts.push(newPost);
    this._callSubscriber(this);
    this._watch(""); //обнуляем текстареа
  },

  _subscribe(observer) {
    this._callSubscriber = observer;
  },
  // Make one function for all
  dispatch({ type, value }) {
    if (type === ADD_POST) {
      this._addPost();
    } else if (type === POST_WATCH) {
      this._watch(value);
    } else if (type === SUBSCRIBE) {
      this._subscribe(value);
    } else if (type === UPDATE_NEW_MESSAGE) {
      this._state.MessagesPage.current = value;
      this._callSubscriber(this);
    } else if (type === SEND_MESSAGE) {
      let newMessage = {
        message: this._state.MessagesPage.current,
        id: 0
      };
      this._state.MessagesPage.enterMessages.push(newMessage);
      this._callSubscriber(this);
    }
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (value) => ({
  type: POST_WATCH,
  value: value
});
export const updateNewMessageActionCreator = (value) => ({
  type: UPDATE_NEW_MESSAGE,
  value: value
});
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
// export { state, addPost, watch, subscribe };
export default store;
