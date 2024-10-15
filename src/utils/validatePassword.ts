const validatePassword = (password: string): string => {
	// Check for minimum length
	if (password.length < 8) {
		return "Password must be at least 8 characters long.";
	}
  
	// Check for at least one uppercase letter
	if (!/[A-Z]/.test(password)) {
		return "Password must contain at least one uppercase letter.";
	}
  
	// Check for at least one lowercase letter
	if (!/[a-z]/.test(password)) {
		return "Password must contain at least one lowercase letter.";
	}
  
	// Check for at least one number
	if (!/[0-9]/.test(password)) {
		return "Password must contain at least one number.";
	}
  
	// Check for at least one special character
	if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
		return "Password must contain at least one special character.";
	}
  
	return "";
  };	

  export default validatePassword;