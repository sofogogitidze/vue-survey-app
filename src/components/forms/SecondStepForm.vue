<template>
  <Form @submit="submitRadio" class="w-4/5">
    <section>
      <h2 class="font-bold">გაქვს გადატანილი Covid-19?*</h2>
      <div class="mt-3">
        <Field
          name="had_covid"
          rules="required"
          v-slot="{ field }"
          type="radio"
          value="yes"
        >
          <input
            type="radio"
            v-bind="field"
            name="had_covid"
            value="yes"
            v-model="had_covid"
          />
        </Field>
        <label for="had_covid" class="ml-3">კი</label>
      </div>
      <div>
        <Field
          name="had_covid"
          v-slot="{ field }"
          type="radio"
          value="no"
          rules="required"
        >
          <input type="radio" v-bind="field" name="had_covid" value="no" />
        </Field>
        <label for="had_covid" class="ml-3">არა</label>
      </div>
      <div>
        <Field
          name="had_covid"
          v-slot="{ field }"
          type="checkbox"
          value="have_right_now"
          v-model="had_covid"
        >
          <input
            type="radio"
            v-bind="field"
            name="had_covid"
            value="have_right_now"
          />
        </Field>
        <label for="had_covid" class="ml-3">ახლა მაქვს</label>
      </div>
      <error-message name="had_covid" />
    </section>
    <section class="mt-7" v-if="had_covid === 'yes' && had_covid">
      <h2 class="font-bold">ანტისხეულების ტესტი გაქვს გაკეთებული?*</h2>
      <div class="mt-3">
        <Field
          name="had_antibody_test"
          v-slot="{ field }"
          type="radio"
          :value="true"
          rules="requiredTest"
          v-model="had_antibody_test"
        >
          <input
            type="radio"
            v-bind="field"
            name="had_antibody_test"
            :value="true"
          />
        </Field>
        <label for="had_antibody_test" class="ml-3">კი</label>
      </div>
      <div>
        <Field
          name="had_antibody_test"
          v-slot="{ field }"
          type="radio"
          :value="false"
          v-model="had_antibody_test"
          rules="requiredTest"
        >
          <input
            type="radio"
            v-bind="field"
            name="had_antibody_test"
            :value="false"
          />
        </Field>
        <label for="had_antibody_test" class="ml-3">არა</label>
      </div>
      <error-message name="had_antibody_test" />
    </section>
    <section class="mt-7" v-if="had_antibody_test && had_covid === 'yes'">
      <h2 class="font-bold">
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
        რაოდენობა
      </h2>
      <Field
        class="mt-4 mb-3 p-2 bg-transparent border border-black w-full"
        name="test_date"
        as="input"
        type="date"
        v-model="test_date"
      />
      <error-message name="test_date" />
      <Field
        class="mt-4 mb-3 p-2 bg-transparent border border-black w-full"
        name="number"
        as="input"
        type="number"
        placeholder="ანტისხეულების რაოდენობა"
        v-model="antibody_number"
      />
      <error-message name="number" />
    </section>
    <section
      class="mt-7"
      v-if="had_antibody_test === false && had_covid === 'yes'"
    >
      <h2 class="font-bold">
        მიუთითე დაახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
      </h2>
      <Field
        class="mt-4 mb-3 p-2 bg-transparent border border-black w-full"
        name="covid_sickness_date"
        as="input"
        type="date"
        rules="requiredDate"
        v-model="covid_sickness_date"
      />
      <error-message name="covid_sickness_date" />
    </section>
    <forward-button type="submit"></forward-button>
  </Form>
  <back-button @click="previousPage"> </back-button>
</template>

<script>
import { Form, Field } from "vee-validate";
import { mapActions } from "vuex";
import "@/components/forms/rules/SecondStepRules";

export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      had_covid: null,
      had_antibody_test: null,
      test_date: null,
      antibody_number: null,
      covid_sickness_date: null,
    };
  },
  mounted() {
    if (localStorage.had_covid) {
      this.had_covid = localStorage.had_covid;
    }
    if (localStorage.had_antibody_test == "false") {
      this.had_antibody_test = false;
    }
    if (localStorage.had_antibody_test == "true") {
      this.had_antibody_test = true;
    }
    if (localStorage.test_date) {
      this.test_date = localStorage.test_date;
    }
    if (localStorage.antibody_number) {
      this.antibody_number = localStorage.antibody_number;
    }
    if (localStorage.covid_sickness_date) {
      this.covid_sickness_date = localStorage.covid_sickness_date;
    }
  },
  methods: {
    ...mapActions(["submitCovidForm", ["values"]]),
    submitRadio(values) {
      this.submitCovidForm(values);
      localStorage.had_covid = values.had_covid;
      localStorage.had_antibody_test = values.had_antibody_test;
      localStorage.test_date = values.test_date;
      localStorage.antibody_number = values.number;
      localStorage.covid_sickness_date = values.covid_sickness_date;
      this.$router.push({ name: "thirdStep" });
    },
    previousPage() {
      this.$router.push({ name: "firstStep" });
    },
  },
};
</script>
