<template>
  <Form @submit="submitForm">
    <section>
      <h2 class="font-bold">უკვე აცრილი ხარ?*</h2>
      <div class="mt-4">
        <Field
          name="hadVaccine"
          v-slot="{ field }"
          type="radio"
          :value="true"
          v-model="hadVaccine"
          rules="requiredTest"
        >
          <input type="radio" v-bind="field" name="hadVaccine" :value="true" />
        </Field>
        <label for="hadVaccine" class="ml-3">კი</label>
      </div>
      <div class="mt-2">
        <Field
          name="hadVaccine"
          v-slot="{ field }"
          type="radio"
          :value="false"
          v-model="hadVaccine"
          rules="requiredTest"
        >
          <input type="radio" v-bind="field" name="hadVaccine" :value="false" />
        </Field>
        <label for="hadVaccine" class="ml-3">არა</label>
      </div>
      <error-message name="hadVaccine" />
    </section>
    <section class="mt-10" v-if="hadVaccine">
      <h2 class="font-bold">აირჩიე რა ეტაპზე ხარ*</h2>
      <div class="mt-4">
        <Field
          name="vaccinationStage"
          v-slot="{ field }"
          type="radio"
          value="first_dosage_and_registered_on_the_second"
          v-model="vaccinationStage"
          rules="required"
        >
          <input
            type="radio"
            v-bind="field"
            name="vaccinationStage"
            value="first_dosage_and_registered_on_the_second"
          />
        </Field>
        <label for="vaccinationStage" class="ml-3"
          >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label
        >
      </div>
      <div class="mt-2">
        <Field
          name="vaccinationStage"
          v-slot="{ field }"
          type="radio"
          value="fully_vaccinated"
          v-model="vaccinationStage"
          rules="required"
        >
          <input
            type="radio"
            v-bind="field"
            name="vaccinationStage"
            value="fully_vaccinated"
          />
        </Field>
        <label for="vaccinationStage" class="ml-3">სრულიად აცრილი ვარ</label>
      </div>
      <div class="mt-2">
        <Field
          name="vaccinationStage"
          v-slot="{ field }"
          type="radio"
          value="first_dosage_and_not_registered_yet"
          v-model="vaccinationStage"
          rules="required"
        >
          <input
            type="radio"
            v-bind="field"
            name="vaccinationStage"
            value="first_dosage_and_not_registered_yet"
          />
        </Field>
        <label for="vaccinationStage" class="ml-3"
          >პირველი დზოა და არ დავრეგისტრირებულვარ მეორეზე</label
        >
      </div>
      <error-message name="vaccinationStage" />
    </section>
    <section class="mt-5" v-if="hadVaccine === false">
      <h2 class="font-bold">რას ელოდები?*</h2>
      <div class="mt-4">
        <Field
          name="i_am_waiting"
          v-slot="{ field }"
          type="radio"
          value="registered_and_waiting"
          v-model="i_am_waiting"
          rules="requiredTest"
        >
          <input
            type="radio"
            v-bind="field"
            name="i_am_waiting"
            value="registered_and_waiting"
          />
        </Field>
        <label for="i_am_waiting" class="ml-3"
          >დარეგისტრირებული ვარ და ველოდები რიცხვს</label
        >
      </div>
      <div class="mt-2">
        <Field
          name="i_am_waiting"
          v-slot="{ field }"
          type="radio"
          value="not_planning"
          v-model="i_am_waiting"
          rules="requiredTest"
        >
          <input
            type="radio"
            v-bind="field"
            name="i_am_waiting"
            value="not_planning"
          />
        </Field>
        <label for="i_am_waiting" class="ml-3">არ ვგეგმავ</label>
      </div>
      <div class="mt-2">
        <Field
          name="i_am_waiting"
          v-slot="{ field }"
          type="radio"
          value="had_covid_and_planning_to_be_vaccinated"
          v-model="i_am_waiting"
          rules="requiredTest"
        >
          <input
            type="radio"
            v-bind="field"
            name="i_am_waiting"
            value="had_covid_and_planning_to_be_vaccinated"
          />
        </Field>
        <label for="i_am_waiting" class="ml-3"
          >გადატანილი მაქვს და ვგეგმავ აცრას</label
        >
      </div>
      <error-message name="i_am_waiting" />
    </section>
    <forward-button type="submit"></forward-button>
    <dont-postpone v-if="dontPostpone"></dont-postpone>
    <not-planning v-if="notPlanning"></not-planning>
    <new-protocol v-if="newProtocol"></new-protocol>
  </Form>
  <back-button @click="previousPage"></back-button>
</template>

<script>
import { Form, Field } from "vee-validate";
import DontPostpone from "@/components/modals/DontPostpone.vue";
import NotPlanning from "@/components/modals/NotPlanning.vue";
import NewProtocol from "@/components/modals/NewProtocol.vue";
import { mapActions } from "vuex";
import "@/components/forms/rules/SecondStepRules";

export default {
  components: {
    Form,
    Field,
    DontPostpone,
    NotPlanning,
    NewProtocol,
  },
  data() {
    return {
      hadVaccine: null,
      vaccinationStage: null,
      i_am_waiting: null,
    };
  },
  mounted() {
    if (localStorage.hadVaccine == "false") {
      this.hadVaccine = false;
    }
    if (localStorage.hadVaccine == "true") {
      this.hadVaccine = true;
    }
    if (localStorage.vaccinationStage) {
      this.vaccinationStage = localStorage.vaccinationStage;
    }
    if (localStorage.i_am_waiting) {
      this.i_am_waiting = localStorage.i_am_waiting;
    }
  },
  computed: {
    dontPostpone(values) {
      if (
        values.vaccinationStage === "first_dosage_and_not_registered_yet" &&
        values.hadVaccine === true
      )
        return true;
    },
    notPlanning(values) {
      if (values.i_am_waiting === "not_planning" && values.hadVaccine === false)
        return true;
    },
    newProtocol(values) {
      if (
        values.hadVaccine === false &&
        values.i_am_waiting === "had_covid_and_planning_to_be_vaccinated"
      )
        return true;
    },
  },
  methods: {
    ...mapActions(["submitVaccineForm", ["values"]]),
    previousPage() {
      this.$router.push({ name: "secondStep" });
    },
    submitForm(values) {
      this.submitVaccineForm(values);
      localStorage.hadVaccine = values.hadVaccine;
      localStorage.vaccinationStage = values.vaccinationStage;
      localStorage.i_am_waiting = values.i_am_waiting;
      this.$router.push({ name: "suggestions" });
    },
  },
};
</script>
