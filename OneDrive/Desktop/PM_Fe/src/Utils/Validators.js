export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const otpRegex = /^\d{6}$/;

export const isValidEmail = (email) => {
  return emailRegex.test(email);
};

export const isValidOtp = (otp) => {
  return otpRegex.test(otp);
};

export const passwordsMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};
