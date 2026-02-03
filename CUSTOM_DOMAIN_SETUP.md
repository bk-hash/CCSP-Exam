# Custom Domain Setup for CCSP Mastery

Your CCSP quiz app is now configured to use a custom domain: **ccsp-mastery.com**

## Domain Setup Instructions

### Step 1: Purchase Domain
1. Go to a domain registrar (like Namecheap, GoDaddy, or Cloudflare)
2. Purchase the domain: `ccsp-mastery.com`
3. Access your domain's DNS management panel

### Step 2: Configure DNS Records
Add the following DNS records in your domain registrar:

**A Records** (point to GitHub Pages IPs):
```
Type: A
Name: @
Value: 185.199.108.153

Type: A  
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**CNAME Record** (for www subdomain):
```
Type: CNAME
Name: www
Value: bk-hash.github.io
```

### Step 3: GitHub Pages Configuration
1. Go to your GitHub repository: https://github.com/bk-hash/CCSP-Exam
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. In "Custom domain" field, enter: `ccsp-mastery.com`
5. Check "Enforce HTTPS" (after DNS propagation)

### Step 4: Deploy with Custom Domain
Run the deployment command:
```bash
npm run build
npx gh-pages -d build
```

### Step 5: Wait for Propagation
- DNS changes can take 4-48 hours to propagate globally
- Test with: `nslookup ccsp-mastery.com`

## Alternative Catchy Domain Options
If `ccsp-mastery.com` is unavailable, consider:

1. **ccsppro.academy** - Professional academic feel
2. **cloudcertify.pro** - Emphasizes cloud certification  
3. **ccspmasterhub.com** - Hub for CCSP mastery
4. **certifyccsp.app** - Action-oriented
5. **ccspstudy.pro** - Study-focused
6. **ccspmasterclass.com** - Premium education feel
7. **ccspass.academy** - Success-oriented
8. **cloudexamace.com** - Exam success focus

## Features Added with Custom Domain
✅ Professional branded URL
✅ Better SEO potential  
✅ Improved credibility
✅ Easier to remember and share
✅ Custom email possibilities (admin@ccsp-mastery.com)

## Next Steps After Domain Setup
1. Update Google OAuth credentials with new domain
2. Update any hardcoded URLs in the application
3. Set up Google Analytics with new domain
4. Configure custom email addresses
5. Add SSL certificate (automatic with GitHub Pages)

Your app will be accessible at: **https://ccsp-mastery.com**
