# 🛠️ User Management & Testing Guide

## 🎯 **Testing with billycannine@gmail.com**

### **Quick Test Setup**

1. **Access Admin Panel**: Navigate to `/Admin` section in your app
2. **Add Test User**: 
   - Click "Test billycannine@gmail.com ($0.00)" button
   - This automatically adds and upgrades the user

### **Manual Testing Steps**

1. **Login as Test User**:
   - Open incognito browser
   - Go to your app
   - Login with Google using billycannine@gmail.com

2. **Test Demo Experience**:
   - Try quiz (should be limited to 5 questions)
   - Try flashcards (should be limited to 10 cards)
   - See upgrade prompts

3. **Test Payment Flow**:
   - Click upgrade button
   - Choose "Bank Transfer"
   - See your bank details displayed
   - Reference format: `CCSP-Premium-billycannine@gmail.com`

4. **Simulate Payment**:
   - Go back to Admin Panel (as yourself)
   - Find billycannine@gmail.com in test users
   - Click "Upgrade" to simulate payment received

## 🔧 **Admin Panel Features**

### **Current User Management**
- ✅ **View your status** (Demo/Premium)
- ✅ **Instant upgrade/downgrade** for testing
- ✅ **Reset statistics** to test fresh user experience
- ✅ **Real-time tier switching**

### **Test User Management**
- ✅ **Add any email** as test user
- ✅ **Simulate $0.00 payments** for testing
- ✅ **Upgrade/downgrade users** instantly
- ✅ **Track payment history** and amounts
- ✅ **Remove test users** when done

### **Quick Actions**
- 💳 **One-click test** with billycannine@gmail.com
- 💰 **Simulate full payment** ($9.99) for real testing
- 🔄 **Reset user data** for fresh tests
- 📊 **View user statistics** and progress

## 💰 **Payment Processing Workflow**

### **Real Payment Flow**
1. **User hits content limit** → sees upgrade prompt
2. **User clicks upgrade** → payment modal opens
3. **User chooses payment method**:
   - **Credit Card**: Stripe processing (future)
   - **Bank Transfer**: Shows your bank details

### **Bank Transfer Details Shown**
```
Send $9.99 to:
Account Name: Malebo Samuel Lethoba
Bank: Standard Bank
Account: 10018569453
Branch Code: 8105
Swift: SBZAZAJJ
Reference: CCSP-Premium-[user-email]
```

### **Manual Payment Processing**
1. **Monitor your Standard Bank account** for incoming transfers
2. **Match reference number** to user email
3. **Use Admin Panel** to upgrade the user
4. **Send confirmation** (optional)

## 🧪 **Testing Scenarios**

### **Scenario 1: Demo User Experience**
```bash
1. Login as demo user
2. Answer 5 questions → hit limit
3. See upgrade prompt
4. Click upgrade → see payment options
5. Choose bank transfer → see your details
```

### **Scenario 2: Payment Simulation**
```bash
1. Use Admin Panel
2. Add test user email
3. Simulate $0.00 payment
4. Verify user gets Premium access
5. Test unlimited questions/flashcards
```

### **Scenario 3: Real Payment Test**
```bash
1. Transfer small amount to your account
2. Use exact reference format
3. Use Admin Panel to upgrade user
4. Verify Premium features work
```

## 📊 **Monitoring & Analytics**

### **Track in Admin Panel**
- 👥 **Total test users** created
- 💰 **Payment amounts** simulated
- 📈 **Upgrade/downgrade** history
- 🎯 **Current user tiers**

### **Real Payment Monitoring**
- 🏦 **Check Standard Bank** for transfers
- 📧 **Match reference numbers** to emails
- ✅ **Upgrade users** within 24 hours
- 📨 **Send confirmations** to customers

## 🚀 **Production Workflow**

### **Daily Tasks**
1. **Check bank account** for new transfers
2. **Match references** to user emails
3. **Upgrade users** via Admin Panel
4. **Send welcome email** (future feature)

### **Weekly Tasks**
1. **Review conversion rates** in Admin Panel
2. **Analyze user statistics** and engagement
3. **Monitor demo limits** effectiveness
4. **Optimize pricing** if needed

## 🔧 **Admin Access**

### **Who Has Admin Access**
- Your email (auto-detected)
- billycannine@gmail.com (test admin)

### **Add More Admins**
Edit `AdminPanel.js` and add emails to the `adminEmails` array:
```javascript
const adminEmails = [
  user?.email,
  'billycannine@gmail.com',
  'your-partner@gmail.com', // Add here
];
```

## 💡 **Testing Tips**

### **Best Practices**
- ✅ **Use incognito** for different user testing
- ✅ **Test on mobile** for responsive design
- ✅ **Clear localStorage** for fresh tests
- ✅ **Document payment amounts** for tracking

### **Common Issues**
- 🔄 **Page refresh needed** after tier changes
- 📱 **Mobile payment flow** testing
- 🔐 **Admin access** from different devices
- 💾 **LocalStorage persistence** across sessions

Your user management system is ready for comprehensive testing! 🎉
