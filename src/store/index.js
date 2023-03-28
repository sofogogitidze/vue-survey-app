import { createStore } from "vuex";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

const store = createStore({
  state() {
    return {
      state: {
        userData: [],
      },
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
