import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/pages/HomePage.vue";
import FirstStep from "@/components/pages/FirstStep.vue";
import SecondStep from "@/components/pages/SecondStep.vue";
import ThirdStep from "@/components/pages/ThirdStep.vue";
import Suggestions from "@/components/pages/Suggestions.vue";
import FinalPage from "@/components/pages/FinalPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, name: "home" },
    {
      path: "/first-step",
      component: FirstStep,
      name: "firstStep",
      meta: { transition: "route" },
    },
    {
      path: "/second-step",
      component: SecondStep,
      name: "secondStep",
      meta: { transition: "route" },
    },
    {
      path: "/third-step",
      component: ThirdStep,
      name: "thirdStep",
      meta: { transition: "route" },
    },
    {
      path: "/suggestions",
      component: Suggestions,
      name: "suggestions",
      meta: { transition: "route" },
    },
    {
      path: "/thank-you",
      component: FinalPage,
      name: "finalPage",
      meta: { transition: "bg" },
    },
  ],
});

export default router;
