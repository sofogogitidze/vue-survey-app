export default {
  submitPersonalDataForm(context, payload) {
    context.commit("submitPersonalDataForm", {
      first_name: payload.userName,
      last_name: payload.lastName,
      email: payload.email,
    });
  },
  submitCovidForm(context, payload) {
    if (payload.had_covid !== "yes") {
      payload = { had_covid: payload.had_covid };
      context.commit("submitCovidForm", payload);
    } else if (payload.had_antibody_test) {
      let antibodies = {
        test_date: payload.test_date,
        number: payload.number ? payload.number * 1 : null,
      };
      let cleanedAntibodies = Object.fromEntries(
        Object.entries(antibodies).filter(([_, value]) => value != null)
      );
      payload = {
        had_covid: payload.had_covid,
        had_antibody_test: payload.had_antibody_test,
        antibodies: cleanedAntibodies,
      };
      context.commit("submitCovidForm", payload);
    } else if (!payload.had_antibody_test) {
      payload = {
        had_covid: payload.had_covid,
        had_antibody_test: payload.had_antibody_test,
        covid_sickness_date: new Date(
          payload.covid_sickness_date
        ).toLocaleDateString("en-GB"),
      };
      context.commit("submitCovidForm", payload);
    }
  },
  submitVaccineForm(context, payload) {
    if (payload.hadVaccine === true) {
      payload = {
        had_vaccine: payload.hadVaccine,
        vaccination_stage: payload.vaccinationStage,
      };
      context.commit("submitVaccineForm", payload);
    } else if (payload.hadVaccine === false) {
      payload = {
        had_vaccine: payload.hadVaccine,
        i_am_waiting: payload.i_am_waiting,
      };
      context.commit("submitVaccineForm", payload);
    }
  },
  submitSuggestionForm(context, payload) {
    payload = {
      non_formal_meetings: payload.non_formal_meetings,
      number_of_days_from_office: payload.number_of_days_from_office * 1,
      what_about_meetings_in_live: payload.what_about_meetings_in_live
        ? payload.what_about_meetings_in_live
        : null,
      tell_us_your_opinion_about_us: payload.tell_us_your_opinion_about_us
        ? payload.tell_us_your_opinion_about_us
        : null,
    };
    context.commit("submitSuggestionForm", payload);
  },
};
