<template>
  <Form @submit="submitForm" class="mt-10">
    <section>
      <h2 class="font-bold text-base">
        რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
        სადაც ყველა სურვილისამებრ ჩაერთვება?*
      </h2>
      <div class="mt-3">
        <Field
          name="non_formal_meetings"
          rules="required"
          v-slot="{ field }"
          type="radio"
          value="once_a_week"
          v-model="non_formal_meetings"
        >
          <input
            type="radio"
            v-bind="field"
            name="non_formal_meetings"
            value="once_a_week"
          />
        </Field>
        <label for="non_formal_meetings" class="ml-3">კვირაში ერთხელ</label>
      </div>
      <div class="mt-3">
        <Field
          name="non_formal_meetings"
          rules="required"
          v-slot="{ field }"
          type="radio"
          value="twice_a_week"
          v-model="non_formal_meetings"
        >
          <input
            type="radio"
            v-bind="field"
            name="non_formal_meetings"
            value="twice_a_week"
          />
        </Field>
        <label for="non_formal_meetings" class="ml-3">კვირაში ორჯერ</label>
      </div>
      <div class="mt-3">
        <Field
          name="non_formal_meetings"
          rules="required"
          v-slot="{ field }"
          type="radio"
          value="once_in_a_two_weeks"
          v-model="non_formal_meetings"
        >
          <input
            type="radio"
            v-bind="field"
            name="non_formal_meetings"
            value="once_in_a_two_weeks"
          />
        </Field>
        <label for="non_formal_meetings" class="ml-3">ორ კვირაში ერთხელ</label>
      </div>
      <div class="mt-3">
        <Field
          name="non_formal_meetings"
          rules="required"
          v-slot="{ field }"
          type="radio"
          value="once_in_a_month"
          v-model="non_formal_meetings"
        >
          <input
            type="radio"
            v-bind="field"
            name="non_formal_meetings"
            value="once_in_a_month"
          />
        </Field>
        <label for="non_formal_meetings" class="ml-3">თვეში ერთხელ</label>
      </div>
      <error-message name="non_formal_meetings" />
    </section>
    <section class="mt-5">
      <h2 class="font-bold text-base">
        კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
      </h2>
      <div class="mt-3">
        <Field
          name="number_of_days_from_office"
          rules="required"
          v-slot="{ field }"
          type="radio"
          value="0"
          v-model="number_of_days_from_office"
        >
          <input
            type="radio"
            v-bind="field"
            name="number_of_days_from_office"
            value="0"
          />
        </Field>
        <label for="number_of_days_from_office" class="ml-3">0</label>
      </div>
      <div class="mt-3">
        <Field
          name="number_of_days_from_office"
          rules="required"
          v-slot="{ field }"
          type="radio"
          value="1"
          v-model="number_of_days_from_office"
        >
          <input
            type="radio"
            v-bind="field"
            name="number_of_days_from_office"
            value="1"
          />
        </Field>
        <label for="number_of_days_from_office" class="ml-3">1</label>
      </div>
      <div class="mt-3">
        <Field
          name="number_of_days_from_office"
          rules="required"
          v-slot="{ field }"
          type="radio"
          value="2"
          v-model="number_of_days_from_office"
        >
          <input
            type="radio"
            v-bind="field"
            name="number_of_days_from_office"
            value="2"
          />
        </Field>
        <label for="number_of_days_from_office" class="ml-3">2</label>
      </div>
      <div class="mt-3">
        <Field
          name="number_of_days_from_office"
          rules="required"
          v-slot="{ field }"
          type="radio"
          value="3"
          v-model="number_of_days_from_office"
        >
          <input
            type="radio"
            v-bind="field"
            name="number_of_days_from_office"
            value="3"
          />
        </Field>
        <label for="number_of_days_from_office" class="ml-3">3</label>
      </div>
      <div class="mt-3">
        <Field
          name="number_of_days_from_office"
          rules="required"
          v-slot="{ field }"
          type="radio"
          value="4"
          v-model="number_of_days_from_office"
        >
          <input
            type="radio"
            v-bind="field"
            name="number_of_days_from_office"
            value="4"
          />
        </Field>
        <label for="number_of_days_from_office" class="ml-3">4</label>
      </div>
      <div class="mt-3">
        <Field
          name="number_of_days_from_office"
          rules="required"
          v-slot="{ field }"
          type="radio"
          value="5"
          v-model="number_of_days_from_office"
        >
          <input
            type="radio"
            v-bind="field"
            name="number_of_days_from_office"
            value="5"
          />
        </Field>
        <label for="non_formal_meetings" class="ml-3">5</label>
      </div>
      <error-message name="number_of_days_from_office" />
    </section>
    <section>
      <div class="flex flex-col w-4/5 mb-9 mt-10">
        <label for="what_about_meetings_in_live" class="mb-2 font-bold"
          >რას ფიქრობ ფიზიკურ შეკრებებზე? *</label
        >
        <Field
          class="p-3 bg-transparent border border-black text-start h-[185px]"
          name="what_about_meetings_in_live"
          v-model="what_about_meetings_in_live"
          as="textarea"
        />
        <error-message name="what_about_meetings_in_live" />
      </div>
      <div class="flex flex-col w-4/5 mb-9 mt-10">
        <label for="tell_us_your_opinion_about_us" class="mb-2 font-bold"
          >რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
          შეცვლიდი?</label
        >
        <Field
          class="p-3 bg-transparent border border-black h-[185px]"
          name="tell_us_your_opinion_about_us"
          type="textarea"
          v-model="tell_us_your_opinion_about_us"
          as="textarea"
        />
        <error-message name="tell_us_your_opinion_about_us" />
      </div>
      <button
        type="submit"
        class="ml-[400px] bg-[#208298] pt-3 pl-6 pb-3 pr-6 rounded-3xl"
      >
        <p class="text-white font-bold">დასრულება</p>
      </button>
    </section>
  </Form>
  <back-button @click="previousPage"> </back-button>
</template>

<script>
import { Form, Field } from "vee-validate";
import { mapGetters, mapActions } from "vuex";
import "@/components/forms/rules/SecondStepRules";

export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      non_formal_meetings: "",
      number_of_days_from_office: "",
      what_about_meetings_in_live: "",
      tell_us_your_opinion_about_us: "",
    };
  },
  computed: {
    ...mapGetters({
      userData: "userData",
    }),
  },
  mounted() {
    if (localStorage.non_formal_meetings) {
      this.non_formal_meetings = localStorage.non_formal_meetings;
    }
    if (localStorage.number_of_days_from_office) {
      this.number_of_days_from_office = localStorage.number_of_days_from_office;
    }
    if (localStorage.what_about_meetings_in_live) {
      this.what_about_meetings_in_live =
        localStorage.what_about_meetings_in_live;
    }
    if (localStorage.tell_us_your_opinion_about_us) {
      this.tell_us_your_opinion_about_us =
        localStorage.tell_us_your_opinion_about_us;
    }
  },
  methods: {
    ...mapActions(["submitSuggestionForm", ["values"]]),

    submitForm(values) {
      localStorage.non_formal_meetings = values.non_formal_meetings;
      localStorage.number_of_days_from_office =
        values.number_of_days_from_office;
      localStorage.what_about_meetings_in_live =
        values.what_about_meetings_in_live;
      localStorage.tell_us_your_opinion_about_us =
        values.tell_us_your_opinion_about_us;

      this.submitSuggestionForm(values);
      let cleanedData = Object.fromEntries(
        Object.entries(this.userData).filter(([_, value]) => value != null)
      );
      const body = JSON.stringify(cleanedData);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: body,
      };

      fetch("https://covid19.devtest.ge/api/create", requestOptions)
        .then((response) =>
          response.status === 201
            ? this.$router.push({ name: "finalPage" })
            : alert("Data was not sent, something went wrong!")
        )
        .catch((error) => console.log("error", error));
    },
    previousPage() {
      this.$router.push({ name: "thirdStep" });
    },
  },
};
</script>
