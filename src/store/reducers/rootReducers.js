const initState = {
  users: [
    { id: 1, name: "Toàn" },
    { id: 2, name: "Hải" },
  ],
};

const rootReducer = (state = initState, action) => {
  let users = state.users;
  switch (action.type) {
    case "DELETE_USER":
      users = users.filter((item) => {
        return item.id !== action.payload.id;
      });
      return { ...state, users };
    case "ADD_USER":
      let id = Math.floor(Math.random() * 1000);
      let user = { id: id, name: `random - ${id}` };

      return { ...state, users: [...state.users, user] };
    default:
      return state;
  }
};

export default rootReducer;
