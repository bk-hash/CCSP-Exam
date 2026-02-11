/**
 * Feature Flag Configuration
 * Controls optional features in the application
 */

const features = {
  AI_ASSISTANT: {
    enabled: process.env.REACT_APP_ENABLE_AI === 'true',
    apiEndpoint: process.env.REACT_APP_AI_API_ENDPOINT || '',
  },
};

/**
 * Check if a feature is enabled
 * @param {string} featureName - Name of the feature to check
 * @returns {boolean} - Whether the feature is enabled
 */
export const isFeatureEnabled = (featureName) => {
  const feature = features[featureName];
  
  if (!feature) {
    console.warn(`Feature "${featureName}" not found in configuration`);
    return false;
  }
  
  if (feature.enabled && !feature.apiEndpoint && featureName === 'AI_ASSISTANT') {
    console.warn('AI Assistant is enabled but REACT_APP_AI_API_ENDPOINT is not configured');
  }
  
  return feature.enabled;
};

/**
 * Get feature configuration
 * @param {string} featureName - Name of the feature
 * @returns {object} - Feature configuration object
 */
export const getFeatureConfig = (featureName) => {
  return features[featureName] || {};
};

export default features;
