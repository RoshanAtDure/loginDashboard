

const initialState = JSON.parse(localStorage.getItem('userloginObj')) != null ? true : false;

const isLogin = (state = initialState, action) => {
  switch (action.type) {
    case "loggedIn": return true;
    case "loggedOut": return false;
    default: return state
  }
}

export default isLogin;