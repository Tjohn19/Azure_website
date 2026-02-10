# Consult Ajent - Azure Static Web App

A modern, professional website for Consult Ajent consulting services, built with vanilla HTML/CSS/JavaScript and deployed to Azure Static Web Apps.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Modern UI**: Professional styling with smooth transitions and animations
- **Fast Performance**: Optimized for deployment on Azure Static Web Apps free tier
- **Contact Form**: Client-side form validation with success/error messaging
- **SEO Friendly**: Semantic HTML structure and meta tags
- **Accessibility**: Standards-compliant HTML with proper heading hierarchy

## 📁 Project Structure

```
azure_website/
├── public/                          # Static files served by Azure SWA
│   ├── index.html                   # Homepage
│   ├── pages/                       # Additional pages
│   │   ├── about.html              # About Us page
│   │   ├── services.html           # Services page
│   │   ├── contact.html            # Contact Us page
│   │   ├── privacy.html            # Privacy Policy
│   │   └── terms.html              # Terms and Conditions
│   ├── css/
│   │   └── main.css                # Main stylesheet (responsive)
│   ├── js/
│   │   └── app.js                  # JavaScript interactivity
│   └── images/                     # Image assets folder
├── staticwebapp.config.json         # Azure SWA configuration
├── .gitignore                       # Git ignore rules
├── IMPLEMENTATION.md                # Implementation progress tracker
└── README.md                        # This file
```

## 🚀 Getting Started in Azure

### Prerequisites

- Azure Subscription (free tier works for this project)
- GitHub Account
- Git installed locally

### Step-by-Step Deployment

**See IMPLEMENTATION.md for detailed progress tracking**

### Option 1: Deploy via Azure Portal (Recommended - Follows Microsoft Tutorial)

1. **Fork/Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Create Static Web App in Azure Portal**
   - Go to [Azure Portal](https://portal.azure.com/)
   - Click "Create a Resource"
   - Search for "Static Web Apps"
   - Click "Create"

3. **Configure Static Web App**
   - **Subscription**: Select your subscription
   - **Resource Group**: Create new or select existing
   - **Name**: Enter app name (e.g., `consultajent-app`)
   - **Plan type**: Select "Free"
   - **Source**: Select "GitHub"

4. **GitHub Authorization**
   - Follow prompts to authorize Azure with GitHub
   - Select your repository
   - Select branch: `main`

5. **Build Configuration**
   - **Build Presets**: Select "Custom"
   - **App location**: `public`
   - **Output location**: `public` (leave as is)
   - **Api location**: Leave empty

6. **Review and Create**
   - Click "Review + Create"
   - Click "Create"
   - Wait for deployment to complete

7. **Your Site is Live!**
   - Azure creates a GitHub Actions workflow automatically
   - Site deployed at: `https://<your-app-name>.azurestaticapps.net`

### Option 2: Deploy via Azure CLI

```bash
# Install Azure CLI if needed
# https://learn.microsoft.com/en-us/cli/azure/install-azure-cli

# Login to Azure
az login

# Create resource group
az group create \
  --name consultajent-rg \
  --location eastus

# Create Static Web App
az staticwebapp create \
  --resource-group consultajent-rg \
  --name consultajent-app \
  --source https://github.com/YOUR-USERNAME/azure_website \
  --branch main \
  --app-location "public" \
  --output-location "public" \
  --sku Free
```

## 📋 Project Pages

### Home Page (`/`)
- Hero section with CTA
- Services overview (IT, Business, E-commerce)
- Statistics (500+ customers, 10+ years, 40+ projects)
- Why Choose Us section
- Featured call-to-action

### About Us (`/pages/about.html`)
- Company story and mission
- Consulting services overview
- FAQ section
- Consultation CTA

### Services (`/pages/services.html`)
- Comprehensive service offerings:
  - Website Design
  - Cloud Migration
  - Cyber Security
  - Cloud Services
  - Software & Application Development
  - IT Infrastructure
  - Business Automation
tristan was here 
### Contact Us (`/pages/contact.html`)
- Contact information (phone, email)
- Contact form with validation
- Schedule call CTA
- Optional: Integrate with Calendly or similar booking tool

### Legal Pages
- **Privacy Policy** (`/pages/privacy.html`)
- **Terms and Conditions** (`/pages/terms.html`)

## 🎨 Customization

### Update Company Content
Edit the HTML files in the `public/` folder to customize:
- Company name and tagline
- Service descriptions
- Contact information
- Social media links
- Business hours
- Addresses

### Update Styling
- Main stylesheet: `public/css/main.css`
- Color scheme defined in CSS variables at the top
- Fully responsive with mobile-first approach
- Breakpoints at 768px and 480px

### Update Navigation
Edit the navigation menu in each HTML file's `<nav>` section to add more pages or update links

## 📧 Form Integration

The contact form validates locally but doesn't send emails yet. To add email functionality:

### Option 1: Azure Functions + SendGrid
1. Create an Azure Function to handle form submissions
2. Integrate SendGrid for email delivery
3. Update `app.js` to call the API endpoint

Example API endpoint call:
```javascript
fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

### Option 2: Third-Party Service
- Use Formspree, Netlify Forms, or similar service
- Add hidden form fields for service integration

## 🔒 Security Headers

Security headers are configured in `staticwebapp.config.json`:
- X-Content-Type-Options: Prevents MIME type sniffing
- X-Frame-Options: Prevents clickjacking
- X-XSS-Protection: Protects against XSS attacks
- Cache-Control: Optimizes caching strategy

## ⚡ Performance

Free tier limitations to be aware of:
- **Bandwidth**: 100 GB/month per subscription
- **Storage**: 0.5 GB total deployment
- **Deployment Size**: Max 0.25 GB per deployment

**Optimization Tips:**
- Compress images before uploading
- Minimize CSS/JS files for production
- Use lazy loading for images
- Monitor bandwidth usage in Azure portal

## 📊 Analytics & Monitoring

To add analytics:

1. **Azure Application Insights** (Integration in progress)
2. **Google Analytics** (Add to HTML)
3. **Cloudflare Analytics** (Optional)

## 🔧 Maintenance

### Update Dependencies
This project uses only vanilla HTML/CSS/JS - no npm dependencies!

### Git Workflow
```bash
# Clone the repo
git clone https://github.com/YOUR-USERNAME/azure_website.git
cd azure_website

# Make changes to public/ folder
# Commit changes
git add .
git commit -m "Description of changes"
git push origin main

# Azure automatically deploys on push!
```

### Monitoring Deployments
- Azure Portal: Check deployment status
- GitHub Actions: View workflow runs
- Site Uptime: Check health check endpoint

## 🐛 Troubleshooting

### Site Shows 404 Error
- Check `staticwebapp.config.json` routing rules
- Verify file paths match exactly
- Check file names (case-sensitive on Azure)

### Changes Not Showing After Push
- Check GitHub Actions workflow completed
- Clear browser cache (Ctrl+Shift+Delete)
- Check build logs in Azure portal

### Performance Issues
- Check total deployment size (must be < 250MB)
- Compress images and assets
- Review browser DevTools Network tab

## 📚 Learning Resources

- [Azure Static Web Apps Documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/)
- [Microsoft Tutorial (Our Model)](https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-portal)
- [Web Performance Best Practices](https://web.dev/performance/)
- [Web Accessibility Standards](https://www.w3.org/WAI/)

## 📝 License

Built for Consult Ajent. All rights reserved.

## 🤝 Support

For questions or issues:
- **Email**: ContactUs@consultajent.com
- **Phone**: +01 (614) 551-7993

---

**Happy Learning Azure! 🎓**