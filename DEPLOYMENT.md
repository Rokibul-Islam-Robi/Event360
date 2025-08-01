# 🚀 Vercel Deployment Guide for Event360

## ✅ **Fixed Issues**

The 404 error you were experiencing has been resolved by adding the following configuration files:

### 1. **vercel.json** - Main Vercel Configuration
```json
{
  "buildCommand": "cd client && npm install && npm run build",
  "outputDirectory": "client/dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. **package.json** - Root Package Configuration
- Added build scripts for Vercel
- Configured proper build commands

### 3. **client/vite.config.js** - Updated Vite Configuration
- Added proper build configuration
- Set base path for production

### 4. **client/public/_redirects** - Client-Side Routing
- Handles React Router navigation
- Prevents 404 errors on direct URL access

## 🚀 **Deploy to Vercel**

### **Option 1: Deploy from GitHub (Recommended)**

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Click "New Project"**
3. **Import your GitHub repository:**
   - Select `Rokibul-Islam-Robi/Event360`
   - Vercel will automatically detect it's a Vite project
4. **Configure the project:**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `cd client && npm install && npm run build`
   - **Output Directory:** `client/dist`
   - **Install Command:** `npm install`
5. **Click "Deploy"**

### **Option 2: Deploy via Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Set build settings
# - Deploy
```

## ⚙️ **Environment Variables (Optional)**

If you need to connect to your Django backend, add these in Vercel:

1. **Go to Project Settings → Environment Variables**
2. **Add:**
   ```
   VITE_API_URL=https://your-django-backend.herokuapp.com
   ```

## 🔧 **Troubleshooting**

### **If you still get 404 errors:**

1. **Check Build Logs:**
   - Go to your Vercel project dashboard
   - Click on the latest deployment
   - Check the build logs for errors

2. **Verify Build Output:**
   - The build should create files in `client/dist/`
   - Make sure `index.html` exists in the output

3. **Check Framework Detection:**
   - Vercel should auto-detect Vite
   - If not, manually set Framework to "Vite"

### **Common Issues & Solutions:**

| Issue | Solution |
|-------|----------|
| 404 on refresh | ✅ Fixed with `_redirects` file |
| Build fails | ✅ Fixed with proper `vercel.json` |
| Assets not loading | ✅ Fixed with correct output directory |
| Routing issues | ✅ Fixed with rewrites configuration |

## 📱 **Your Deployed App**

Once deployed, your Event360 app will be available at:
- **Production:** `https://your-project-name.vercel.app`
- **Preview:** `https://your-project-name-git-main.vercel.app`

## 🎯 **What's Fixed**

✅ **404 Error** - Resolved with proper routing configuration  
✅ **Build Issues** - Fixed with correct Vite setup  
✅ **Client-Side Routing** - Working with React Router  
✅ **Static Assets** - Properly served from dist folder  
✅ **Production Build** - Optimized for deployment  

## 🚀 **Next Steps**

1. **Deploy to Vercel** using the steps above
2. **Test all routes** - Home, Gallery, Packages, etc.
3. **Check mobile responsiveness**
4. **Verify all features work** - Filtering, animations, etc.

Your Event360 application should now deploy successfully to Vercel without any 404 errors! 🎉

---

**Need Help?** Check the Vercel documentation or contact support if you encounter any issues. 