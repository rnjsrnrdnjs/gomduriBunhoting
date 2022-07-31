const GETUSER = "user/GETUSER";
const UPDATEUSER = "user/UPDATEUSER";

export const getUser = () => ({ type: GETUSER });
export const updateUser = (input) => ({ type: UPDATEUSER, input });

const initalState = {
  user: {
    id: -1,
    nick: null,
    phone: null,
    MBTI: null,
    introduce: null,
    kakaoid: null,
    gender: null,
  },
};

function user(state = initalState, action) {
  switch (action.type) {
    case GETUSER:
      return state;

    case UPDATEUSER:
      return {
        user: action.input,
      };
    default:
      return state;
  }
}
export default user;
