import { connect } from "react-redux";

const msp = (state, ownProps) => {
  return ({
    // user: {[state.session.id]: state.user}
    user: state.entities.users[state.session.id]
  })
}

const mdp = dispatch => {
  return ({

  })
}

export default connect(msp, mdp)();