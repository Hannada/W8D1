const thunk = function(store) {
  return function(next) {
    return function(action) {
      // debugger
      if (typeof action === "function") {
        // debugger
        // action: dispatch => {
        //   debugger
        //   return FlipAPIUtil.fetchAllFlips().then(flips => {
        //     debugger
        //     return dispatch(receiveAllFlips(flips));
        //   }
        //   );
        // };
        return action(store.dispatch, store.getState);
        // return the action invoked, passing in dispatch and state (by convention - our async actions will only make use of dispatch)
      }
      // debugger
      return next(action);
      // regular pojo action - pass it to the next piece of middleware (if we are at the end of our middleware chain, next is our dispatch)
    };
  };
};

export default thunk;
