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
    let stateCopy = { ...state };
    stateCopy.enterPosts = [...state.enterPosts];
    stateCopy.enterPosts.push(newPost);
    stateCopy.current = "";
    return stateCopy;
  } else if (action.type === POST_WATCH) {
    let stateCopy = { ...state };
    stateCopy.current = action.value;
    console.log(state.current);
    return stateCopy;
  } else {
    return state;
  }
}
