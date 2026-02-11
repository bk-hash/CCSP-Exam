# Quick Start: Using Azure OpenAI with Your Microsoft Subscription

## TL;DR - What You Need to Know

**Can I use my Microsoft Copilot for Office 365 subscription API in this project?**

**Short Answer:** Not directly, but you can use Azure OpenAI Service (which powers Microsoft Copilot).

**What's the difference?**
- **Microsoft Copilot for Office 365**: A user-facing productivity tool (no API access)
- **Azure OpenAI Service**: The underlying AI platform that you CAN integrate with this project

## Quick Decision Tree

### Do you have an Azure subscription?
- **YES** → Go to Step 1 below
- **NO** → Use standard OpenAI API (already configured in this project)

### Do you already have Azure OpenAI Service access?
- **YES** → Go to Step 2 below
- **NO** → Apply for access (Step 1) or use standard OpenAI API

## Step-by-Step Setup for Azure OpenAI

### Step 1: Get Azure OpenAI Access (If You Don't Have It)

1. **Apply for Access:**
   - Visit: https://aka.ms/oai/access
   - Fill out the application form
   - Wait for approval (typically 1-3 business days)
   - Note: Having Microsoft Copilot doesn't automatically grant Azure OpenAI access

2. **While Waiting:** You can use the standard OpenAI API (see README.md)

### Step 2: Create Your Azure OpenAI Resource

```bash
# Option 1: Using Azure Portal (Easiest)
1. Go to portal.azure.com
2. Click "Create a resource"
3. Search for "Azure OpenAI"
4. Click "Create"
5. Fill in:
   - Subscription: Your Azure subscription
   - Resource group: Create or select existing
   - Region: Choose (e.g., East US)
   - Name: Choose unique name (e.g., ccsp-exam-openai)
   - Pricing tier: Standard S0
6. Click "Review + Create"

# Option 2: Using Azure CLI (Advanced)
az cognitiveservices account create \
  --name ccsp-exam-openai \
  --resource-group your-resource-group \
  --kind OpenAI \
  --sku S0 \
  --location eastus
```

### Step 3: Deploy a Model

1. In Azure Portal, go to your OpenAI resource
2. Click "Model deployments" → "Create"
3. Choose a model:
   - **gpt-4** (recommended for best quality)
   - **gpt-35-turbo** (faster and cheaper)
4. Give it a deployment name (e.g., "gpt4-deployment")
5. Click "Create"

### Step 4: Get Your Credentials

1. In your Azure OpenAI resource, go to "Keys and Endpoint"
2. Copy these values:
   - **Key 1** → Your API key
   - **Endpoint** → Something like `https://ccsp-exam-openai.openai.azure.com`
3. Note your **deployment name** from Step 3

### Step 5: Configure the Application

Create or edit `functions/.env`:

```bash
# Set provider to Azure
AI_PROVIDER=azure

# Azure OpenAI Configuration
AZURE_OPENAI_API_KEY=your-key-from-step-4
AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com
AZURE_OPENAI_DEPLOYMENT_NAME=your-deployment-name-from-step-3
AZURE_OPENAI_API_VERSION=2024-02-15-preview

# You can leave these empty when using Azure
# OPENAI_API_KEY=
```

### Step 6: Install Dependencies and Deploy

```bash
# Navigate to functions directory
cd functions

# Install dependencies (includes Azure OpenAI SDK)
npm install

# Deploy to Firebase
firebase deploy --only functions:ai
```

### Step 7: Test It!

1. Open the application
2. Click the 🤖 button
3. Try asking: "What is the shared responsibility model in cloud computing?"
4. You should get a response powered by Azure OpenAI!

## Troubleshooting

### Error: "Azure OpenAI configuration incomplete"
- **Fix:** Make sure all four Azure environment variables are set in `functions/.env`

### Error: "Azure OpenAI client not initialized"
- **Fix:** Check that `AI_PROVIDER=azure` is set correctly

### Error: "Deployment not found"
- **Fix:** Verify your deployment name matches exactly what's in Azure Portal

### Error: "Access denied"
- **Fix:** Double-check your API key and endpoint URL

### Chat works but responses are slow
- **Solution:** Consider using gpt-35-turbo deployment instead of gpt-4

## Cost Comparison

### Standard OpenAI API
- Setup time: 5 minutes
- Cost: ~$0.02 per conversation
- Best for: Quick start, personal use

### Azure OpenAI Service
- Setup time: 1-3 days (waiting for access) + 30 minutes (setup)
- Cost: ~$0.02 per conversation (similar to OpenAI)
- Best for: Enterprise use, compliance requirements, existing Azure infrastructure

## Still Have Questions?

### "Can I switch back to OpenAI later?"
Yes! Just change `AI_PROVIDER=openai` and set `OPENAI_API_KEY` in `functions/.env`

### "Do I need to pay for Azure AND OpenAI?"
No, choose one:
- Use Azure OpenAI (billed through Azure)
- OR use OpenAI API (billed through OpenAI)

### "Which one should I use?"
- **Azure OpenAI** if you:
  - Already have Azure subscription
  - Need enterprise compliance
  - Want data in your tenant
- **OpenAI API** if you:
  - Want quickest setup
  - Don't need enterprise features
  - Prefer simpler billing

## Next Steps

1. **Decide:** Azure OpenAI or Standard OpenAI?
2. **Setup:** Follow the steps above for your choice
3. **Deploy:** Run `firebase deploy --only functions:ai`
4. **Test:** Try the AI assistant in the app
5. **Monitor:** Watch your usage in Azure Portal or OpenAI dashboard

## Support Resources

- **Full Guide:** See [AZURE_OPENAI_INTEGRATION.md](./AZURE_OPENAI_INTEGRATION.md)
- **Azure OpenAI Docs:** https://learn.microsoft.com/azure/ai-services/openai/
- **Apply for Access:** https://aka.ms/oai/access
- **Pricing:** https://azure.microsoft.com/pricing/details/cognitive-services/openai-service/

---

**Bottom Line:** Your Microsoft Copilot subscription doesn't provide API access, but you can use Azure OpenAI Service (same underlying technology) if you have or get Azure access. Otherwise, use standard OpenAI API (already configured).
