const initialState = {};

const foo = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'TEST':
      return { ...state, payload };
    default:
      return state;
  }
};

export default foo;
