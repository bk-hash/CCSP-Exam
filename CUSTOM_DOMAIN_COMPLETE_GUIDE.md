# 🌐 Custom Domain Setup for CCSP Quiz App

## Overview
Set up a professional custom domain for your CCSP Quiz app on Firebase hosting with automatic SSL and global CDN.

## 🎯 Recommended Domain Names
Based on your app, here are some professional options:

### Premium Options (.com domains - $10-15/year)
- `ccsquiz.com` - Short and memorable
- `ccsp-exam.com` - Descriptive and SEO-friendly
- `ccspstudy.com` - Study-focused branding
- `ccsptest.com` - Test/quiz focused
- `ccspflashcards.com` - Specific to your app features

### Budget Options (.app, .online, .site - $1-5/year)
- `ccsquiz.app` - Modern and tech-focused
- `ccsp-study.app` - Professional app extension
- `ccspexam.online` - Online study platform
- `ccspstudy.site` - Simple and affordable

## 🛒 Step 1: Domain Registration

### Recommended Registrars (Cheapest Options)
1. **Namecheap** - Often has $1 first-year deals
2. **Porkbun** - Consistently low prices
3. **Google Domains** - Easy Firebase integration
4. **Cloudflare** - At-cost pricing (no markup)

### Registration Process
1. Go to your chosen registrar
2. Search for your preferred domain
3. Add to cart and checkout
4. **Important**: Choose minimal privacy protection initially (we'll configure DNS)

## 🔧 Step 2: Firebase Custom Domain Setup

### In Firebase Console
1. Go to: https://console.firebase.google.com/project/seraphic-vertex-450208-p8/hosting
2. Click **Add custom domain**
3. Enter your domain name (e.g., `ccsquiz.com`)
4. Firebase will provide DNS records to configure

### DNS Configuration
Firebase will give you records like:
```
Type: A
Name: @ (or your domain)
Value: 151.101.1.195

Type: A  
Name: @ (or your domain)
Value: 151.101.65.195

Type: AAAA
Name: @ (or your domain)  
Value: 2a04:4e42::735

Type: AAAA
Name: @ (or your domain)
Value: 2a04:4e42:200::735
```

### In Your Domain Registrar
1. Go to DNS management for your domain
2. Delete any existing A/AAAA records for @ or www
3. Add the A and AAAA records provided by Firebase
4. Save DNS settings

## ⏰ Step 3: Wait for Propagation
- DNS changes take 24-48 hours to fully propagate
- Firebase will automatically issue SSL certificate
- You'll get email confirmation when ready

## 🔐 Step 4: Update OAuth Settings
Once your custom domain is active, update Google Cloud Console:

### Add to Authorized JavaScript Origins:
```
https://yourdomain.com
https://www.yourdomain.com
```

### Add to Authorized Redirect URIs:
```
https://yourdomain.com
https://yourdomain.com/
https://www.yourdomain.com
https://www.yourdomain.com/
```

## 🚀 Step 5: Update App Configuration

### Update .env file:
```bash
# Add your custom domain for production
REACT_APP_PRODUCTION_URL=https://yourdomain.com
```

### Update package.json (optional):
```json
{
  "homepage": "https://yourdomain.com"
}
```

## 💰 Cost Breakdown

### Annual Costs:
- **Domain**: $1-15/year (depending on TLD)
- **Firebase Hosting**: FREE (your usage is minimal)
- **SSL Certificate**: FREE (auto-issued by Firebase)
- **CDN**: FREE (included with Firebase)

### Total Cost: $1-15/year for domain only!

## 🎯 Recommended Quick Setup

For fastest setup, I recommend:

1. **Domain**: `ccsquiz.app` from Porkbun (~$2/year)
2. **Setup Time**: 2-3 hours (mostly waiting for DNS)
3. **Professional Result**: Custom branded URL with SSL

## 🛠️ Alternative: Subdomain Solution

If you want to test first, we can also set up a subdomain of an existing domain you own:
- `ccsp.yourdomain.com`
- `quiz.yourdomain.com`

## 🔄 Migration Steps

1. Register domain
2. Configure DNS with Firebase records
3. Wait for SSL certificate (24-48 hours)
4. Update OAuth settings
5. Test authentication
6. Update any hardcoded URLs in app
7. Announce new domain!

---

## 🎉 Benefits Summary

✅ **Professional branding** - No more random Firebase subdomain  
✅ **Better SEO** - Custom domain ranks better  
✅ **User trust** - Professional appearance builds confidence  
✅ **Easy to remember** - Simple domain for word-of-mouth marketing  
✅ **SSL included** - Automatic HTTPS with green lock  
✅ **Global CDN** - Fast loading worldwide  
✅ **Cost effective** - Only domain cost, hosting stays free  

Would you like me to help you choose and register a domain, or shall we start with the OAuth fix first?
