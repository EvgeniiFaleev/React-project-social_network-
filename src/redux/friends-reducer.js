const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   fullName: "Serj",
    //   id: "1",
    //   followed: true,
    //   location: "Russia, Moscow",
    //   status: "Self isolation"
    // },
    // {
    //   fullName: "Corey",
    //   id: "2",
    //   followed: false,
    //   location: "Russia, Moscow",
    //   status: "Self isolation"
    // },
    // {
    //   fullName: "Peter",
    //   id: "3",
    //   followed: false,
    //   location: "Russia, Moscow",
    //   status: "Self isolation"
    // },
    // {
    //   fullName: "Anton",
    //   id: "4",
    //   followed: false,
    //   location: "Russia, Moscow",
    //   status: "Self isolation"
    // },
    // {
    //   fullName: "Johan",
    //   id: "5",
    //   followed: false,
    //   location: "Russia, Moscow",
    //   status: "Self isolation"
    // },
    // {
    //   fullName: "Jack",
    //   id: "6",
    //   followed: false,
    //   location: "Russia, Moscow",
    //   status: "Self isolation"
    // },
    // {
    //   fullName: "Kirill",
    //   id: "7",
    //   followed: false,
    //   location: "Russia, Moscow",
    //   status: "Self isolation"
    // },
    // {
    //   fullName: "Serafim",
    //   id: "8",
    //   followed: false,
    //   location: "Russia, Moscow",
    //   status: "Self isolation"
    // },
    // {
    //   fullName: "Michael",
    //   id: "9",
    //   followed: false,
    //   location: "Russia, Moscow",
    //   status: "Self isolation"
    // },
    // {
    //   fullName: "John",
    //   id: "10",
    //   followed: false,
    //   location: "Russia, Novgorod",
    //   status: "Self isolation"
    // },
    // {
    //   fullName: "Andrew",
    //   id: "11",
    //   followed: false,
    //   location: "USA, Nebraska",
    //   status: "Self isolation"
    // }
  ]
};

const friendsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user, index, arr) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          } else {
            return user;
          }
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          } else {
            return user;
          }
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      };
    default:
      return state;
  }
};
export default friendsPageReducer;

export const followUserAC = (userId) => ({
  type: FOLLOW,
  userId
});

export const unFollowUserAC = (userId) => ({
  type: UNFOLLOW,
  userId
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users
});
