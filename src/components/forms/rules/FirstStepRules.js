import { defineRule } from "vee-validate";

defineRule("requiredUserName", (value, [limit]) => {
  if (value && value.length >= limit) {
    return true;
  }
  if (!value) {
    return "სახელის ველი არ უნდა იყოს ცარიელი";
  }
  if (value.length < limit) {
    return `სახელის ველი უნდა შედგებოდეს მინიმუმ ${limit} სიმბოლოსგან`;
  }
});

defineRule("requiredLastName", (value, [limit]) => {
  if (value && value.length >= limit) {
    return true;
  }
  if (!value) {
    return "გვარის ველი არ უნდა იყოს ცარიელი";
  }
  if (value.length < limit) {
    return `გვარის ველი უნდა შედგებოდეს მინიმუმ ${limit} სიმბოლოსგან`;
  }
});

defineRule("email", (value) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!value) {
    return `მეილის ველი არ უნდა იყოს ცარიელი`;
  }
  if (!value || !regex.test(value)) {
    return `შეყვანილი მეილი არასწორია`;
  }
  if (!regex.test(value) || !value.includes("redberry.ge")) {
    return `გთხოვთ დარეგისტრირდით Redberry-ს მეილით (@redberry.ge)`;
  } else {
    return true;
  }
});
