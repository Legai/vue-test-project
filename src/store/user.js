import Vue from 'vue';
import Sugar from 'sugar';

const initialState = () => ({
  userData: {
    name: '',
    surname: '',
    patronymic: ''
  }
});

function handleRequest(resolve, reject, state) {
  const isDataValid = Sugar.Object.none(state.userData, (property) => property.length > 1);

  if (isDataValid) {
    resolve({
      response: {
        status: 200,
        message: 'Success'
      }
    });
  }

  const errorResponse = {
    response: {
      status: 422,
      errors: {
        userData: {}
      },
      message: 'Unprocessable entity'
    }
  };

  errorResponse.response.errors.userData = {
    name: (state.userData.name.length > 1) ? 'Length error' : '',
    surname: (state.userData.surname.length > 1) ? 'Length error' : '',
    patronymic: (state.userData.patronymic.length > 1) ? 'Length error' : ''
  };

  reject(errorResponse);
}

const state = initialState();

const mutations = {
  resetState(state) {
    state = initialState();
  },
  setUserValue(state, value) {
    Vue.set(state, 'userData', Object.assign({}, state.userData, value));
  }
};

const actions = {
  saveUserData({ state }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => handleRequest(resolve, reject, state), 1000);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
