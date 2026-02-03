import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './SignUpForm.css';

const SignUpForm = ({ onClose }) => {
  const { signIn } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // For now, we'll simulate account creation
      // In a real app, this would call your backend API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create user with demo tier
      const newUser = {
        id: 'user_' + Date.now(),
        email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
        given_name: formData.firstName,
        family_name: formData.lastName,
        picture: `https://ui-avatars.com/api/?name=${formData.firstName}+${formData.lastName}&background=4285f4&color=fff`,
        tier: 'demo',
        subscriptionStatus: 'demo',
        subscriptionEnd: null,
        createdAt: new Date().toISOString()
      };

      // Store user (in real app, this would be in your database)
      localStorage.setItem('ccsp_quiz_user', JSON.stringify(newUser));
      
      console.log('✅ Account created successfully:', newUser);
      
      // Close the sign-up form
      if (onClose) onClose();
      
      // Refresh the page to load the new user
      window.location.reload();
      
    } catch (error) {
      console.error('❌ Sign-up error:', error);
      setErrors({ general: 'Failed to create account. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    // Use existing Google OAuth but set new users to demo tier
    signIn();
  };

  return (
    <div className="signup-overlay">
      <div className="signup-form">
        <div className="signup-header">
          <h2>Create Your CCSP Quiz Account</h2>
          <p>Start with demo access, upgrade anytime to premium!</p>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="signup-options">
          <button 
            className="google-signup-btn"
            onClick={handleGoogleSignUp}
          >
            <img 
              src="https://developers.google.com/identity/images/g-logo.png" 
              alt="Google"
              className="google-icon"
            />
            Continue with Google
          </button>
          
          <div className="divider">
            <span>or sign up with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="signup-form-fields">
          {errors.general && (
            <div className="error-message general-error">
              {errors.general}
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={errors.firstName ? 'error' : ''}
                placeholder="Enter your first name"
              />
              {errors.firstName && <span className="error-text">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={errors.lastName ? 'error' : ''}
                placeholder="Enter your last name"
              />
              {errors.lastName && <span className="error-text">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
              placeholder="Enter your email address"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={errors.password ? 'error' : ''}
              placeholder="Create a strong password (8+ characters)"
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={errors.confirmPassword ? 'error' : ''}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className={errors.agreeToTerms ? 'error' : ''}
              />
              <span className="checkmark"></span>
              I agree to the <a href="#terms" target="_blank">Terms of Service</a> and <a href="#privacy" target="_blank">Privacy Policy</a>
            </label>
            {errors.agreeToTerms && <span className="error-text">{errors.agreeToTerms}</span>}
          </div>

          <button 
            type="submit" 
            className="signup-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Creating Account...
              </>
            ) : (
              'Create Demo Account'
            )}
          </button>
        </form>

        <div className="signup-footer">
          <p>Already have an account? <button className="link-btn" onClick={signIn}>Sign In</button></p>
          <div className="tier-info">
            <h4>🎯 Demo Account Includes:</h4>
            <ul>
              <li>✅ 5 questions per domain</li>
              <li>✅ Basic flashcards</li>
              <li>✅ Progress tracking</li>
              <li>🔒 Upgrade to Premium for unlimited access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
