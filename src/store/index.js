const state = {
  pendingRequestsCount: 0
};

const mutations = {
  incrementLoader(state) {
    state.pendingRequestsCount++;
  },
  decrementLoader(state) {
    state.pendingRequestsCount--;
  }
};

const actions = {};

export default {
  state,
  mutations,
  actions,
};
