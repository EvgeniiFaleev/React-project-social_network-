const ADD_POST = "ADD-POST";
const POST_WATCH = "POST-WATCH";
let initialState = {
  enterPosts: [
    { message: "Привет, как дела?", likeCount: "2 лайка" },
    { message: "Не умри от коронавируса", likeCount: "5 лайков" }
  ],
  current: ""
};
export default function profilePageReducer(state = initialState, action) {
  if (action.type === ADD_POST) {
    let newPost = {
      message: state.current,
      likeCount: "0"
    };
    state.enterPosts.push(newPost);
    state.current = "";
  } else if (action.type === POST_WATCH) {
    state.current = action.value;
    console.log(state.current);
    // console.log(state.ProfilePage.current);
  }
  return state;
}
