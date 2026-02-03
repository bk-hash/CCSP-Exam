// Stripe Configuration
// Note: Using safe demo keys that won't process real payments

// Demo Stripe Public Key (safe for testing - no real charges)
export const STRIPE_PUBLIC_KEY = 'pk_test_TYooMQauvdEDq54NiTphI7jx';

// Product Configuration
export const PREMIUM_PRICE_ID = process.env.NODE_ENV === 'production'
  ? 'price_LIVE_PREMIUM_PRICE_ID'
  : 'price_TEST_PREMIUM_PRICE_ID';

// Pricing
export const PRICING = {
  premium: {
    monthly: {
      amount: 999, // $9.99 in cents
      currency: 'usd',
      interval: 'month',
      priceId: 'price_premium_monthly'
    },
    yearly: {
      amount: 9999, // $99.99 in cents (2 months free)
      currency: 'usd', 
      interval: 'year',
      priceId: 'price_premium_yearly'
    }
  }
};

// Features comparison
export const FEATURES = {
  demo: [
    '5 questions per domain',
    '10 flashcards per domain',
    'Basic progress tracking',
    'Limited practice exams'
  ],
  premium: [
    'Unlimited questions',
    'All flashcards',
    'Advanced analytics',
    'Full practice exams',
    'Progress tracking',
    'Study streak rewards',
    'Performance insights',
    'Mobile app access',
    'Priority support',
    'Offline access'
  ]
};

// Bank Account Details for EFT (replace with your actual details)
export const BANK_DETAILS = {
  accountName: 'Malebo Samuel Lethoba',
  bankName: 'Standard Bank',
  accountNumber: '10018569453',
  routingNumber: '8105',
  swiftCode: 'SBZAZAJJ' // For international transfers
};

// Stripe Configuration
export const stripeConfig = {
  publicKey: STRIPE_PUBLIC_KEY,
  options: {
    // Customize Stripe Elements appearance
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#4285f4',
        colorBackground: '#ffffff',
        colorText: '#30313d',
        colorDanger: '#df1b41',
        fontFamily: '"Segoe UI", Arial, sans-serif',
        spacingUnit: '4px',
        borderRadius: '8px'
      }
    }
  }
};
