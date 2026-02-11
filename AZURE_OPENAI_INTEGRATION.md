# Microsoft Copilot for Office 365 & Azure OpenAI Integration Guide

## Understanding Your Options

If you have a **Microsoft Copilot for Office 365** subscription, here are your options for integrating AI capabilities into this CCSP Exam application:

### Option 1: Azure OpenAI Service (Recommended)

Microsoft Copilot for Office 365 uses **Azure OpenAI Service** behind the scenes. However, your Copilot subscription doesn't automatically grant you API access to Azure OpenAI Service.

**To use Azure OpenAI Service, you need:**
1. An **Azure subscription** (separate from your M365 Copilot subscription)
2. Access to **Azure OpenAI Service** (requires application and approval from Microsoft)
3. Deploy an OpenAI model in Azure (e.g., GPT-4, GPT-3.5-turbo)

**Benefits:**
- ✅ Compatible with existing OpenAI API code
- ✅ Data stays within your Azure tenant (compliance)
- ✅ Enterprise-grade security and privacy
- ✅ Can use the same GPT models
- ✅ Integrated billing with Azure

**Cost:** Pay-as-you-go based on token usage (similar to OpenAI pricing)

### Option 2: Standard OpenAI API (Current Implementation)

The application is currently configured to use the standard OpenAI API directly.

**To use this option:**
1. Get an API key from [platform.openai.com](https://platform.openai.com)
2. Configure the `OPENAI_API_KEY` environment variable
3. This is already implemented and ready to use

**Benefits:**
- ✅ Easy to set up
- ✅ No additional Azure subscription needed
- ✅ Direct access to latest OpenAI models

**Cost:** Pay-as-you-go based on token usage

### Option 3: Microsoft Graph API with Copilot (Limited)

Microsoft is gradually exposing Copilot capabilities through Microsoft Graph API, but this is:
- 🔴 Still in preview/limited availability
- 🔴 Focused on M365 content (emails, documents, etc.)
- 🔴 Not suitable for general-purpose AI chat like this application needs
- 🔴 Requires complex authentication with Azure AD

**Not recommended for this use case.**

## How to Integrate Azure OpenAI Service

If you have or can get access to Azure OpenAI Service, follow these steps:

### Step 1: Set Up Azure OpenAI Service

1. **Apply for Access:**
   - Go to [Azure OpenAI Service](https://azure.microsoft.com/en-us/products/ai-services/openai-service)
   - Click "Apply for access" and complete the form
   - Wait for approval (can take a few days)

2. **Create Azure OpenAI Resource:**
   ```bash
   # Using Azure CLI
   az cognitiveservices account create \
     --name your-openai-resource \
     --resource-group your-resource-group \
     --kind OpenAI \
     --sku S0 \
     --location eastus
   ```

3. **Deploy a Model:**
   - In Azure Portal, go to your OpenAI resource
   - Navigate to "Model deployments"
   - Deploy a model (e.g., gpt-4, gpt-35-turbo)
   - Note your deployment name

4. **Get Your Credentials:**
   - API Key: Found in "Keys and Endpoint" section
   - Endpoint: `https://your-resource-name.openai.azure.com/`
   - API Version: Use `2024-02-15-preview` or latest

### Step 2: Configure the Application

**Update `functions/.env`:**
```bash
# Choose AI Provider: 'openai' or 'azure'
AI_PROVIDER=azure

# Azure OpenAI Configuration
AZURE_OPENAI_API_KEY=your-azure-api-key
AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com
AZURE_OPENAI_DEPLOYMENT_NAME=your-deployment-name
AZURE_OPENAI_API_VERSION=2024-02-15-preview

# Standard OpenAI (if using 'openai' provider)
# OPENAI_API_KEY=sk-your-openai-key
```

### Step 3: Install Required Dependencies

The application needs to be updated to support Azure OpenAI. The following changes are being implemented:

```bash
cd functions
npm install @azure/openai
```

### Step 4: Deploy Updated Functions

```bash
# Set environment variables in Firebase
firebase functions:config:set \
  ai.provider="azure" \
  azure.openai.key="your-key" \
  azure.openai.endpoint="https://your-resource-name.openai.azure.com" \
  azure.openai.deployment="your-deployment-name" \
  azure.openai.version="2024-02-15-preview"

# Deploy functions
firebase deploy --only functions:ai
```

## API Compatibility

Both OpenAI and Azure OpenAI use similar APIs, but with some differences:

### OpenAI API Request:
```javascript
const response = await openai.chat.completions.create({
  model: "gpt-4-turbo-preview",
  messages: [...],
  max_tokens: 500,
  temperature: 0.7
});
```

### Azure OpenAI API Request:
```javascript
const response = await openai.chat.completions.create({
  model: "your-deployment-name",  // Deployment name, not model ID
  messages: [...],
  max_tokens: 500,
  temperature: 0.7
});
```

## Cost Comparison

### OpenAI Direct:
- GPT-4 Turbo: ~$0.01/1K input tokens, ~$0.03/1K output tokens
- GPT-3.5 Turbo: ~$0.0005/1K input tokens, ~$0.0015/1K output tokens

### Azure OpenAI:
- Similar pricing to OpenAI Direct
- Billed through Azure subscription
- May have enterprise discounts available
- Can set spending limits in Azure

## Security & Compliance

### Azure OpenAI Advantages:
- ✅ Data residency controls (choose your region)
- ✅ VNet integration for private networking
- ✅ Azure AD authentication
- ✅ Compliance certifications (SOC, ISO, HIPAA, etc.)
- ✅ Data not used to train models
- ✅ Enterprise SLA

### OpenAI Direct:
- ⚠️ Data sent to OpenAI's infrastructure
- ⚠️ Limited control over data residency
- ✅ Data not used to train models (with API)
- ✅ Industry-standard security

## Frequently Asked Questions

### Q: Can I use my Microsoft Copilot for Office 365 license directly?
**A:** No, Microsoft Copilot for Office 365 doesn't provide a general-purpose API for external applications. You need either:
- Azure OpenAI Service (separate Azure subscription)
- Standard OpenAI API subscription

### Q: Do I get Azure OpenAI access with my Copilot subscription?
**A:** No, Azure OpenAI Service requires a separate application and approval process, even if you have a Copilot subscription.

### Q: Which option should I choose?
**A:** 
- **For enterprises:** Azure OpenAI Service (better compliance, data control)
- **For personal/quick setup:** Standard OpenAI API (easier to get started)
- **For integration with M365 data:** Neither is perfect for this yet

### Q: Can I switch between OpenAI and Azure OpenAI later?
**A:** Yes! The implementation supports both providers. Just change the `AI_PROVIDER` environment variable.

### Q: What about costs?
**A:** Both options have similar per-token pricing. Estimated cost:
- Average conversation: ~500 tokens = ~$0.02
- 100 conversations/day = ~$2/day = ~$60/month
- Set up rate limiting and budgets to control costs

## Next Steps

1. **Decide which AI provider** you want to use:
   - Azure OpenAI Service (if you have/can get Azure access)
   - Standard OpenAI API (if you want quick setup)

2. **Follow the setup guide** for your chosen provider (see README.md)

3. **Deploy and test** the application with your configuration

4. **Monitor usage and costs** in your provider's dashboard

## Support & Resources

- **Azure OpenAI Documentation:** https://learn.microsoft.com/en-us/azure/ai-services/openai/
- **OpenAI API Documentation:** https://platform.openai.com/docs
- **Azure OpenAI Pricing:** https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/
- **Apply for Azure OpenAI Access:** https://aka.ms/oai/access

## Implementation Status

The application currently supports:
- ✅ Standard OpenAI API (ready to use)
- 🔄 Azure OpenAI Service (being implemented)

Check the main README.md for current setup instructions.
