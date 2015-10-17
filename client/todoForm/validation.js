import validate from "validate.js";

let validationSpec = {
  description: {
    presence: true,
    length: {
      maximum: 50
    }
  },
  priority: {
    presence: true,
    numericality: {
      onlyInteger: true,
      greaterThan: 0,
      lessThanOrEqualTo: 10
    }
  }
};

export default function(model) {
  return validate(model, validationSpec);
};

