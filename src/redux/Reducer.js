const InitialState = {};

function searchReducer(state, action) {
  if (typeof state === "undefined") {
    return InitialState;
  }
  return state;
}

export default searchReducer;
