export default {
  submitPersonalDataForm(state, payload) {
    state.userData = payload;
  },
  submitCovidForm(state, payload) {
    state.userData = {
      ...state.userData,
      ...payload,
    };
  },
  submitVaccineForm(state, payload) {
    state.userData = {
      ...state.userData,
      ...payload,
    };
  },
  submitSuggestionForm(state, payload) {
    state.userData = {
      ...state.userData,
      ...payload,
    };
  },
};
