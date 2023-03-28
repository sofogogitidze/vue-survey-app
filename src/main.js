import { createApp } from "vue";

import router from "@/router.js";
import App from "@/App.vue";
import store from "@/store/index.js";
import ForwardButton from "@/components/ui/ForwardButton.vue";
import BackButton from "@/components/ui/BackButton.vue";
import ErrorMessage from "@/components/forms/errors/ErrorMessage.vue";
import "@/index.css";

const app = createApp(App);

app.use(router);

app.use(store);

app.component("forward-button", ForwardButton);
app.component("back-button", BackButton);
app.component("error-message", ErrorMessage);

app.mount("#app");
