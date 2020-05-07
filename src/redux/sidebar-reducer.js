export const initialState = [
  { name: "Jack", id: "1", online: true },
  { name: "Lila", id: "2", online: true },
  { name: "Kirill", id: "3", online: false },
  { name: "Ann", id: "4", online: false }
];
export default function sidebarReducer(state = initialState, action) {
  return state;
}
