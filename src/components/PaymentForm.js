import React, { useState } from 'react';
import { useTheme } from '../contexts';

// Mock Stripe integration - replace with actual Stripe Elements in production
const PaymentForm = ({ selectedPlan, onSuccess, onCancel }) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    agreeToTerms: false
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.cardNumber || formData.cardNumber.length < 16) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }
    
    if (!formData.expiryDate || !/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Please enter expiry date (MM/YY)';
    }
    
    if (!formData.cvv || formData.cvv.length < 3) {
      newErrors.cvv = 'Please enter a valid CVV';
    }
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter cardholder name';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Please agree to terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, this would:
      // 1. Create payment method with Stripe
      // 2. Create subscription on your backend
      // 3. Handle webhooks for subscription status
      
      onSuccess({
        subscriptionId: 'sub_' + Math.random().toString(36).substr(2, 9),
        customerId: 'cus_' + Math.random().toString(36).substr(2, 9),
        plan: selectedPlan
      });
    } catch (error) {
      setErrors({ submit: 'Payment failed. Please try again.' });
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div style={{
      maxWidth: '480px',
      margin: '0 auto',
      background: theme.cardBackground,
      borderRadius: '16px',
      padding: '32px',
      border: `1px solid ${theme.border}`,
      boxShadow: `0 8px 32px ${theme.shadow}`
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '32px'
      }}>
        <h2 style={{
          color: theme.text,
          fontSize: '1.8rem',
          marginBottom: '8px'
        }}>
          Complete Your Subscription
        </h2>
        <p style={{
          color: theme.textSecondary,
          fontSize: '1rem'
        }}>
          {selectedPlan.name} Plan - ${selectedPlan.price}/month
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            color: theme.text,
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: `1px solid ${errors.email ? theme.error : theme.border}`,
              background: theme.background,
              color: theme.text,
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            placeholder="your@email.com"
          />
          {errors.email && (
            <span style={{
              color: theme.error,
              fontSize: '0.8rem',
              marginTop: '4px',
              display: 'block'
            }}>
              {errors.email}
            </span>
          )}
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            color: theme.text,
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            Cardholder Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: `1px solid ${errors.name ? theme.error : theme.border}`,
              background: theme.background,
              color: theme.text,
              fontSize: '1rem',
              outline: 'none'
            }}
            placeholder="John Doe"
          />
          {errors.name && (
            <span style={{ color: theme.error, fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
              {errors.name}
            </span>
          )}
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            color: theme.text,
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            Card Number
          </label>
          <input
            type="text"
            value={formData.cardNumber}
            onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
            maxLength={19}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: `1px solid ${errors.cardNumber ? theme.error : theme.border}`,
              background: theme.background,
              color: theme.text,
              fontSize: '1rem',
              outline: 'none'
            }}
            placeholder="1234 5678 9012 3456"
          />
          {errors.cardNumber && (
            <span style={{ color: theme.error, fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
              {errors.cardNumber}
            </span>
          )}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div>
            <label style={{
              display: 'block',
              color: theme.text,
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Expiry Date
            </label>
            <input
              type="text"
              value={formData.expiryDate}
              onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
              maxLength={5}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: `1px solid ${errors.expiryDate ? theme.error : theme.border}`,
                background: theme.background,
                color: theme.text,
                fontSize: '1rem',
                outline: 'none'
              }}
              placeholder="MM/YY"
            />
            {errors.expiryDate && (
              <span style={{ color: theme.error, fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                {errors.expiryDate}
              </span>
            )}
          </div>
          
          <div>
            <label style={{
              display: 'block',
              color: theme.text,
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              CVV
            </label>
            <input
              type="text"
              value={formData.cvv}
              onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, '').slice(0, 4))}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: `1px solid ${errors.cvv ? theme.error : theme.border}`,
                background: theme.background,
                color: theme.text,
                fontSize: '1rem',
                outline: 'none'
              }}
              placeholder="123"
            />
            {errors.cvv && (
              <span style={{ color: theme.error, fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                {errors.cvv}
              </span>
            )}
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            color: theme.text,
            fontSize: '0.9rem',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
              style={{
                marginRight: '8px',
                accentColor: theme.accent
              }}
            />
            I agree to the <button type="button" style={{ color: theme.accent, background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit' }}>Terms of Service</button> and <button type="button" style={{ color: theme.accent, background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit' }}>Privacy Policy</button>
          </label>
          {errors.agreeToTerms && (
            <span style={{ color: theme.error, fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
              {errors.agreeToTerms}
            </span>
          )}
        </div>

        {errors.submit && (
          <div style={{
            background: `${theme.error}20`,
            color: theme.error,
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '24px',
            fontSize: '0.9rem'
          }}>
            {errors.submit}
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px'
        }}>
          <button
            type="button"
            onClick={onCancel}
            disabled={isProcessing}
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              border: `1px solid ${theme.border}`,
              background: 'transparent',
              color: theme.text,
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Cancel
          </button>
          
          <button
            type="submit"
            disabled={isProcessing}
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
              color: '#fff',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: isProcessing ? 'not-allowed' : 'pointer',
              opacity: isProcessing ? 0.7 : 1,
              transition: 'all 0.3s ease'
            }}
          >
            {isProcessing ? 'Processing...' : `Subscribe for $${selectedPlan.price}/month`}
          </button>
        </div>
      </form>

      <div style={{
        marginTop: '24px',
        padding: '16px',
        background: theme.background,
        borderRadius: '8px',
        fontSize: '0.8rem',
        color: theme.textSecondary,
        textAlign: 'center'
      }}>
        🔒 Your payment information is secure and encrypted. You can cancel anytime.
      </div>
    </div>
  );
};

export default PaymentForm;
