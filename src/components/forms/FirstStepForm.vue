<template>
  <Form @submit="submitForm">
    <div class="flex flex-col w-2/3 mb-9">
      <label for="userName" class="mb-2 font-bold">სახელი*</label>
      <Field
        class="p-3 bg-transparent border border-black"
        name="userName"
        as="input"
        type="text"
        rules="requiredUserName:3"
        placeholder="სახელი"
        v-model="firstName"
      />
      <error-message name="userName" />
    </div>

    <div class="flex flex-col w-2/3 mb-9">
      <label for="lastName" class="mb-2 font-bold">გვარი*</label>
      <Field
        class="p-3 bg-transparent border border-black"
        name="lastName"
        as="input"
        type="text"
        rules="requiredLastName:3"
        placeholder="გვარი"
        v-model="lastName"
      />
      <error-message name="lastName" />
    </div>

    <div class="flex flex-col w-2/3 mb-9">
      <label for="email" class="mb-2 font-bold">მეილი*</label>
      <Field
        class="p-3 bg-transparent border border-black"
        name="email"
        as="input"
        type="email"
        rules="email"
        placeholder="ელექტრონული ფოსტა"
        v-model="email"
      />
      <error-message name="email" />
    </div>
    <forward-button type="submit"> </forward-button>
  </Form>
</template>

<script>
import { Form, Field } from "vee-validate";
import { mapActions } from "vuex";
import "@/components/forms/rules/FirstStepRules";

export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
    };
  },
  mounted() {
    if (localStorage.firstName) {
      this.firstName = localStorage.firstName;
    }
    if (localStorage.lastName) {
      this.lastName = localStorage.lastName;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
  },
  methods: {
    ...mapActions(["submitPersonalDataForm", ["values"]]),
    submitForm(values) {
      this.submitPersonalDataForm(values);
      localStorage.firstName = values.userName;
      localStorage.lastName = values.lastName;
      localStorage.email = values.email;
      this.$router.push({ name: "secondStep" });
    },
  },
};
</script>
