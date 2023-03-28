import { defineRule } from "vee-validate";

defineRule("required", (value) => {
  if (!value) {
    return "ველი არ უნდა იყოს ცარიელი";
  } else {
    return true;
  }
});

defineRule("requiredTest", (value) => {
  if (value != undefined) {
    return true;
  } else {
    return "ველი არ უნდა იყოს ცარიელი";
  }
});

defineRule("day", (value) => {
  if (value > 31) {
    return "შეიყვანეთ ვალიდური რიცხვი";
  } else {
    return true;
  }
});
defineRule("requiredDate", (value) => {
  if (!value) {
    return "ველი არ უნდა იყოს ცარიელი, მონიშნეთ დაახლოებითი პერიოდი";
  } else {
    return true;
  }
});
