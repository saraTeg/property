import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function useForm(initialValues, validationRules, onSubmit , path) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file' && files) {
      setValues({ ...values, [name]: files[0] });
    } else {
      setValues({ ...values, [name]: value });
    }

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    if (!validationRules || !validationRules[fieldName]) return;

    const rules = validationRules[fieldName];
    let error = '';

    // Required
    if (rules.required?.value && (!value || value === '')) {
      error = rules.required.message;
    }

    // Min length
    if (!error && rules.minLength && typeof value === 'string' && value.length < rules.minLength.value) {
      error = rules.minLength.message;
    }

    // Max length
    if (!error && rules.maxLength && typeof value === 'string' && value.length > rules.maxLength.value) {
      error = rules.maxLength.message;
    }

    // Pattern
    if (!error && rules.pattern && typeof value === 'string' && !rules.pattern.value.test(value)) {
      error = rules.pattern.message;
    }

    // Custom validation
    if (!error && rules.validate) {
      for (const key in rules.validate) {
        const result = rules.validate[key](value, values);
        if (typeof result === 'string') {
          error = result;
          break;
        } else if (result === false) {
          error = `Field ${fieldName} is invalid`;
          break;
        }
      }
    }

    setErrors((prev) => ({
      ...prev,
      [fieldName]: error
    }));

    return error;
  };

  const validateAllFields = () => {
    const newErrors = {};
    let isValid = true;

    if (validationRules) {
      for (const fieldName in validationRules) {
        const fieldValue = values[fieldName];
        const error = validateField(fieldName, fieldValue);

        if (error) {
          newErrors[fieldName] = error;
          isValid = false;
        }
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    const isValid = validateAllFields();

    if (isValid) {
      if (onSubmit) {
        onSubmit(values);
      }
      if (path) {
        history.push(path);
      }
    }

    setIsSubmitting(false);
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues
  };
}
