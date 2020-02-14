const initialState = {
  alert: {
    active: false,
    type: "success",
    title: "",
    msg: ""
  },
  loading: false
};

export default function globalReducers(state = initialState, action) {
  switch (action.type) {
    case "ALERT":
      return {
        ...state,
        alert: {
          active: !state.alert.active,
          type: action.payload.type,
          title: action.payload.title,
          msg: action.payload.msg
        }
      };
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
