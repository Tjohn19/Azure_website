# Azure Static Web Apps Deployment Guide for Consult Ajent

**Based on:** [Microsoft's Azure Static Web Apps Portal Tutorial](https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript&pivots=github)

This guide walks you through deploying the Consult Ajent website using the Azure Portal, exactly like Microsoft's official tutorial.

---

## Prerequisites

Before starting, ensure you have:

- ✅ Azure Subscription (you mentioned you have one)
- ✅ GitHub Account (create at https://github.com if needed)
- ✅ Git installed on your computer
- ✅ Code in this repository ready to push

---

## Phase 4: Deployment to Azure

### Step 1: Commit and Push Code to GitHub

First, make sure all code changes are committed to your GitHub repository.

```bash
# Open terminal/PowerShell and navigate to your project
cd c:\tj\Azure_website

# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Build: Complete Consult Ajent website for Azure SWA deployment"

# Push to GitHub (main branch)
git push origin main
```

**What to expect:**
- All files are pushed to GitHub
- You should see `.github/` folder with any existing workflows

### Step 2: Open Azure Portal

1. Go to [Azure Portal](https://portal.azure.com/)
2. Sign in with your Azure account
3. You're now in the Azure dashboard

### Step 3: Create a Static Web Apps Resource

1. Click **"Create a resource"** (top-left corner or search bar)
2. Search for **"Static Web Apps"**
3. Click **"Static Web Apps"** from the results
4. Click **"Create"**

### Step 4: Fill in the Basics Section

On the "Create Static Web App" page, fill in:

| Field | Value |
|-------|-------|
| **Subscription** | Select your subscription |
| **Resource Group** | Click "Create new" → Enter `consultajent-rg` |
| **Name** | Enter `consultajent-app` (or your preferred name) |
| **Hosting Plan** | Select **"Free"** ✅ |
| **Region** | Select region closest to you (e.g., "East US") |

**Screenshot reference:** [Review Screenshot](https://learn.microsoft.com/en-us/azure/static-web-apps/media/getting-started/basics.png)

### Step 5: Connect Your GitHub Repository

1. Under **Source**, select **"GitHub"**
2. Click **"Sign in with GitHub"** if needed
3. Authorize Azure Static Web Apps to access your GitHub account
4. Once authorized, fill in:

| Field | Value |
|-------|-------|
| **Organization** | Select your GitHub org/username |
| **Repository** | Select `azure_website` (or your repo name) |
| **Branch** | Select `main` |

**If you don't see your repository:**
- You may need to authorize Azure SWA in GitHub Settings:
  - Go to GitHub Profile → Settings → Applications → Authorized OAuth Apps
  - Find "Azure Static Web Apps"
  - Click "Grant" permissions

### Step 6: Configure Build Details

⚠️ **IMPORTANT** - This tells Azure where to find your files:

1. **Build Presets:** Select **"Custom"** (since we're using vanilla HTML/CSS/JS)
2. **App location:** Enter `public` (where your HTML/CSS/JS files are)
3. **Api location:** Leave **empty** (no API yet)
4. **Output location:** Enter `public` (same as app location)

**Visual Guide:**
```
App location:    public/
Api location:    (leave empty)
Output location: public/
```

This tells Azure:
- Look in the `public` folder for your website files
- No API functions to build
- Serve files directly from `public`

### Step 7: Review and Create

1. Click **"Review + Create"**
2. Review all settings (make sure they're correct)
3. Click **"Create"**
4. **Wait for deployment to complete** (takes 1-3 minutes)

You'll see a progress indicator - **Don't close this window**

### Step 8: Check Your Deployment Status

Once deployment completes, you'll see confirmation. Click **"Go to resource"**.

You'll now see your Static Web App's overview page with:
- Your website URL (e.g., `https://consultajent-app.azurestaticapps.net`)
- GitHub Actions workflow status
- Configuration options

### Step 9: View Your Website

1. On the overview page, find the **"URL"** link (top-right area)
2. Click it to open your website
3. **Congratulations!** Your site is live! 🎉

**Test the site:**
- Homepage: `https://[your-app].azurestaticapps.net/`
- About: `https://[your-app].azurestaticapps.net/pages/about.html`
- Services: `https://[your-app].azurestaticapps.net/pages/services.html`
- Contact: `https://[your-app].azurestaticapps.net/pages/contact.html`

### Step 10: GitHub Actions Workflow (Automatic)

Azure automatically created a GitHub Actions workflow that will:

1. **Trigger on every push** to the `main` branch
2. **Build your site** (copy files from `public/`)
3. **Deploy to Azure** automatically
4. **Update your live site** in minutes

To see the workflow status:
- Go to your GitHub repository
- Click **"Actions"** tab
- See the deployment workflow running
- Green checkmark = deployment successful ✅

---

## Phase 5: Connect Your Custom Domain

Once the site is working, you can connect `consultajent.com`:

### Option A: Update DNS Records (External Domain Provider)

1. In Azure SWA portal, click **"Custom domains"**
2. Click **"Add custom domain"**
3. Enter domain: `consultajent.com`
4. Follow instructions to add DNS records at your domain registrar
5. Azure validates DNS and provisions SSL certificate
6. Your site is now live on `https://consultajent.com`

### Option B: Use Azure DNS

If you want to manage DNS through Azure:
1. Create Azure DNS Zone for `consultajent.com`
2. Update domain registrar to point to Azure nameservers
3. Configure custom domain in SWA
4. SSL certificate auto-provisioned

---

## Phase 6: Making Updates (Continuous Deployment)

**One of the best parts of Azure SWA:**

Whenever you make changes:

```bash
# Make changes to files in public/ folder
# Then commit and push:
git add .
git commit -m "Update: [describe change]"
git push origin main
```

**What happens automatically:**
1. GitHub detects your push
2. GitHub Actions workflow starts
3. Files are built and deployed to Azure
4. Your live site updates in **2-5 minutes**
5. No manual deployment needed! 🚀

---

## Congratulations! 🎓

You've successfully:
- ✅ Built a professional static website with vanilla HTML/CSS/JS
- ✅ Deployed to Azure Static Web Apps using the free tier
- ✅ Set up automatic deployments via GitHub Actions
- ✅ Learned how to use Azure SWA following Microsoft's official tutorial

### What You Learned About Azure

1. **Azure Portal** - How to create resources
2. **Static Web Apps** - Perfect for static sites (no backend needed)
3. **GitHub Integration** - Automatic deployments on code push
4. **Free Tier** - Production-ready hosting at no cost
5. **Custom Domains** - How to connect your domain
6. **Continuous Deployment** - Updates push automatically

---

## Optional Next Steps

### 1. Add Images/Logo

1. Create a folder `public/images/`
2. Add your company logo and images
3. Reference in HTML: `<img src="/images/logo.png" alt="Consult Ajent">`
4. Push to GitHub → automatic deployment

### 2. Add Email to Contact Form

Requires Azure Functions:
1. Create Azure Function to send emails
2. Use SendGrid for email delivery
3. Call API from `public/js/app.js`

### 3. Add Analytics

Option A - Application Insights (Azure):
```javascript
// Add to end of public/js/app.js
const appInsights = new Microsoft.ApplicationInsights.AppInsights({
  config: { instrumentationKey: 'YOUR_KEY' }
});
```

Option B - Google Analytics:
```html
<!-- Add to all HTML files before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## Troubleshooting

### Site shows 404 Error
- Check `staticwebapp.config.json` is in root
- Verify file names match (case-sensitive on Azure)
- Clear browser cache (Ctrl+Shift+Delete)

### Changes not showing after push
- Check GitHub Actions workflow completed (green ✅)
- Empty browser cache and reload
- Check Azure portal deployment logs

### "File not found" for CSS/JS
- Verify `public/css/` and `public/js/` folders exist
- Check file paths in HTML are correct
- Make sure `staticwebapp.config.json` includes the route

### GitHub authorization failed
- Go to [GitHub Settings](https://github.com/settings/applications)
- Find "Azure Static Web Apps" in Authorized OAuth Apps
- Click it and grant permissions

---

## Support & Resources

- **Microsoft Docs**: https://learn.microsoft.com/en-us/azure/static-web-apps/
- **Official Tutorial**: https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-portal
- **Video Learning**: https://aka.ms/azure/beginnervideos/learn/swa
- **Contact**: ContactUs@consultajent.com +01 (614) 551-7993

---

**Happy Learning! You're now an Azure Static Web Apps expert!** 🚀

Remember: This infrastructure is **free forever** for static sites under the free tier. Scale with confidence!