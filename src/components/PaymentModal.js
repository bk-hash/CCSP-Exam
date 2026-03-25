import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts';
import { STRIPE_PUBLIC_KEY, PRICING, FEATURES, BANK_DETAILS } from '../config/stripe';

// Initialize Stripe with error handling
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY).catch((error) => {
  console.warn('Stripe failed to initialize:', error);
  return null; // Return null if Stripe fails to load
});

const PaymentForm = ({ onClose, selectedPlan = 'monthly' }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user, upgradeUserToPremium } = useAuth();
  const { theme } = useTheme();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' or 'eft'
  const [showBankDetails, setShowBankDetails] = useState(false);

  const plan = PRICING.premium[selectedPlan];

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (paymentMethod === 'eft') {
      setShowBankDetails(true);
      return;
    }

    if (!stripe || !elements) {
      // If Stripe is not available, offer demo upgrade
      const demoUpgrade = window.confirm(
        '⚠️ Payment system is temporarily unavailable.\n\n' +
        'Would you like to proceed with a demo upgrade to Premium?\n' +
        '(This is for testing purposes only)'
      );
      
      if (demoUpgrade) {
        console.log('Demo upgrade - bypassing Stripe');
        upgradeUserToPremium({ method: 'demo_fallback' });
        alert('🎉 Demo upgrade successful! Welcome to Premium!');
        onClose();
      }
      
      setIsProcessing(false);
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    try {
      // Create payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: user.name,
          email: user.email,
        },
      });

      if (error) {
        console.error('Payment failed:', error);
        
        // Handle specific Stripe errors
        if (error.code === 'invalid_request_error' && error.message.includes('Invalid API Key')) {
          alert('⚠️ Payment system is in demo mode. Proceeding with demo upgrade...');
          
          // Demo upgrade for development
          console.log('Demo payment - upgrading user to Premium');
          upgradeUserToPremium({ method: 'demo_stripe_error' });
          alert('🎉 Demo upgrade successful! Welcome to Premium!');
          onClose();
          return;
        }
        
        alert(`Payment failed: ${error.message}`);
        setIsProcessing(false);
        return;
      }

      // In a real app, you'd send this to your backend to create the subscription
      console.log('Payment method created:', paymentMethod);
      
      // For demo purposes, we'll simulate successful payment
      alert('🎉 Payment successful! Welcome to Premium!');
      
      // Upgrade the user
      upgradeUserToPremium({ 
        method: 'demo_payment',
        paymentMethod: paymentMethod.id,
        amount: plan.amount 
      });
      
      // Close the payment modal
      onClose();
      
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: theme.text,
        '::placeholder': {
          color: theme.textSecondary,
        },
        backgroundColor: theme.cardBackground,
      },
    },
  };

  if (showBankDetails) {
    return (
      <div style={{
        background: theme.cardBackground,
        padding: '30px',
        borderRadius: '16px',
        maxWidth: '500px',
        margin: '0 auto',
        boxShadow: `0 8px 32px ${theme.shadow}`,
        border: `1px solid ${theme.border}`
      }}>
        <h3 style={{ 
          color: theme.text, 
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          💳 EFT Payment Details
        </h3>
        
        <div style={{
          background: theme.background,
          padding: '20px',
          borderRadius: '12px',
          marginBottom: '20px',
          border: `1px solid ${theme.border}`
        }}>
          <h4 style={{ color: theme.text, marginBottom: '16px' }}>
            Send ${plan.amount / 100} to:
          </h4>
          
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: theme.text }}>Account Name:</strong>
            <div style={{ color: theme.textSecondary }}>{BANK_DETAILS.accountName}</div>
          </div>
          
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: theme.text }}>Bank:</strong>
            <div style={{ color: theme.textSecondary }}>{BANK_DETAILS.bankName}</div>
          </div>
          
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: theme.text }}>Account Number:</strong>
            <div style={{ color: theme.textSecondary }}>{BANK_DETAILS.accountNumber}</div>
          </div>
          
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: theme.text }}>Routing Number:</strong>
            <div style={{ color: theme.textSecondary }}>{BANK_DETAILS.routingNumber}</div>
          </div>
          
          <div>
            <strong style={{ color: theme.text }}>Reference:</strong>
            <div style={{ color: theme.textSecondary }}>CCSP-Premium-{user.email}</div>
          </div>
        </div>

        <div style={{
          background: '#fff3cd',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #ffeaa7'
        }}>
          <p style={{ 
            color: '#856404', 
            margin: 0, 
            fontSize: '0.9rem',
            lineHeight: '1.4'
          }}>
            <strong>⚠️ Important:</strong> Please include the reference number in your transfer. 
            Your account will be upgraded within 24 hours of payment confirmation.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => setShowBankDetails(false)}
            style={{
              flex: 1,
              padding: '12px',
              background: 'transparent',
              color: theme.textSecondary,
              border: `1px solid ${theme.border}`,
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Back
          </button>
          
          <button
            onClick={() => {
              alert('Payment instructions copied! Please complete the EFT transfer.');
              onClose();
            }}
            style={{
              flex: 1,
              padding: '12px',
              background: 'linear-gradient(135deg, #4285f4, #34a853)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Got It!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: theme.cardBackground,
      padding: '30px',
      borderRadius: '16px',
      maxWidth: '500px',
      margin: '0 auto',
      boxShadow: `0 8px 32px ${theme.shadow}`,
      border: `1px solid ${theme.border}`
    }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h3 style={{ color: theme.text, marginBottom: '8px' }}>
          🚀 Upgrade to Premium
        </h3>
        <p style={{ color: theme.textSecondary, margin: 0 }}>
          ${plan.amount / 100}/{selectedPlan}
        </p>
      </div>

      {/* Payment Method Selection */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '12px', 
          color: theme.text,
          fontWeight: '500'
        }}>
          Payment Method:
        </label>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => setPaymentMethod('card')}
            style={{
              flex: 1,
              padding: '12px',
              background: paymentMethod === 'card' ? '#4285f4' : 'transparent',
              color: paymentMethod === 'card' ? 'white' : theme.text,
              border: `1px solid ${paymentMethod === 'card' ? '#4285f4' : theme.border}`,
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            💳 Credit Card
          </button>
          
          <button
            onClick={() => setPaymentMethod('eft')}
            style={{
              flex: 1,
              padding: '12px',
              background: paymentMethod === 'eft' ? '#4285f4' : 'transparent',
              color: paymentMethod === 'eft' ? 'white' : theme.text,
              border: `1px solid ${paymentMethod === 'eft' ? '#4285f4' : theme.border}`,
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            🏦 Bank Transfer
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {paymentMethod === 'card' && (
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: theme.text,
              fontWeight: '500'
            }}>
              Card Details:
            </label>
            <div style={{
              padding: '16px',
              border: `1px solid ${theme.border}`,
              borderRadius: '8px',
              background: theme.background
            }}>
              <CardElement options={cardElementOptions} />
            </div>
          </div>
        )}

        <div style={{
          background: theme.background,
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: `1px solid ${theme.border}`
        }}>
          <h4 style={{ color: theme.text, marginBottom: '12px' }}>
            What you get:
          </h4>
          <ul style={{ 
            margin: 0, 
            paddingLeft: '20px',
            color: theme.textSecondary 
          }}>
            {FEATURES.premium.slice(0, 5).map((feature, index) => (
              <li key={index} style={{ marginBottom: '4px' }}>
                ✅ {feature}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              flex: 1,
              padding: '12px',
              background: 'transparent',
              color: theme.textSecondary,
              border: `1px solid ${theme.border}`,
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          
          <button
            type="submit"
            disabled={isProcessing || (paymentMethod === 'card' && !stripe)}
            style={{
              flex: 1,
              padding: '12px',
              background: isProcessing ? '#ccc' : 'linear-gradient(135deg, #4285f4, #34a853)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: isProcessing ? 'not-allowed' : 'pointer',
              fontWeight: '500'
            }}
          >
            {isProcessing ? 'Processing...' : 
             paymentMethod === 'eft' ? 'Get Bank Details' : 
             `Pay $${plan.amount / 100}`}
          </button>
        </div>
        
        {/* Demo Mode Button */}
        <div style={{ 
          marginTop: '16px', 
          padding: '12px', 
          background: '#fff3cd', 
          border: '1px solid #ffeaa7', 
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{ 
            margin: '0 0 8px 0', 
            fontSize: '14px', 
            color: '#856404'
          }}>
            💡 Testing the app? Try demo mode:
          </p>
          <button
            type="button"
            onClick={() => {
              upgradeUserToPremium({ method: 'demo_button' });
              alert('🎉 Demo upgrade successful! Welcome to Premium!');
              onClose();
            }}
            style={{
              padding: '8px 16px',
              background: '#ffc107',
              color: '#856404',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            🚀 Demo Upgrade (Free)
          </button>
        </div>
      </form>
    </div>
  );
};

const PaymentModal = ({ isOpen, onClose, selectedPlan }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '20px'
    }}>
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <Elements stripe={stripePromise}>
          <PaymentForm onClose={onClose} selectedPlan={selectedPlan} />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentModal;
