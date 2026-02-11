import { isFeatureEnabled, getFeatureConfig } from '../features';

describe('Feature Flags', () => {
  test('isFeatureEnabled returns boolean', () => {
    const result = isFeatureEnabled('AI_ASSISTANT');
    expect(typeof result).toBe('boolean');
  });

  test('isFeatureEnabled handles non-existent feature', () => {
    const result = isFeatureEnabled('NON_EXISTENT_FEATURE');
    expect(result).toBe(false);
  });

  test('getFeatureConfig returns object', () => {
    const config = getFeatureConfig('AI_ASSISTANT');
    expect(typeof config).toBe('object');
    expect(config).toHaveProperty('enabled');
    expect(config).toHaveProperty('apiEndpoint');
  });
});
