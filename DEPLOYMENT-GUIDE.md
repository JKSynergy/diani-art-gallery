# 🚀 Diani Art Gallery - Deployment Guide

## Quick Setup for Client Preview

Your code is now on GitHub: https://github.com/JKSynergy/diani-art-gallery

### Step 1: Create PostgreSQL Database on Railway (5 minutes)

1. Go to [railway.app](https://railway.app)
2. Click **"New Project"** → Select **"PostgreSQL"**
3. Wait for the database to deploy
4. Click on the PostgreSQL service
5. Go to **"Connect"** tab → Copy the **"Database URL"**
6. Save this URL (you'll need it in a moment)

---

### Step 2: Deploy to Vercel (5 minutes)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Paste: `https://github.com/JKSynergy/diani-art-gallery`
4. Click **"Import"**
5. **Configure Environment Variables** (this is important!):
   - Click **"Environment Variables"**
   - Add these from your Railway database:
     ```
     DATABASE_URL = [paste from Railway]
     NEXTAUTH_SECRET = [generate one: openssl rand -base64 32]
     NEXTAUTH_URL = https://your-deployment-url.vercel.app
     ```
   - Add optional payment keys if you have them:
     ```
     STRIPE_PUBLIC_KEY
     STRIPE_SECRET_KEY
     MPESA_API_KEY
     PESAPAL_API_KEY
     ```
6. Click **"Deploy"**

---

### Step 3: Run Database Migrations

After deployment succeeds:

1. Go to Vercel deployment settings
2. Click on the **"Deployments"** tab
3. For the latest deployment, go to **"Logs"** 
4. After the build completes, run this command in your local terminal:

```bash
cd "e:\SYSTEMS AND WEBSITES\Diani Art Gallery Website"
DATABASE_URL=postgresql://... npx prisma migrate deploy
```

(Replace the DATABASE_URL with your actual URL from Railway)

---

## Your Live Preview Link

Once deployed, Vercel will give you a URL like:
```
https://diani-art-gallery-jksynergy.vercel.app
```

This is your **CLIENT PREVIEW LINK** ✅

---

## Troubleshooting

### Database Connection Error
- Verify `DATABASE_URL` is correct in Vercel Environment Variables
- Check Railway database is running (green status)

### Build Fails
- Check Vercel logs for errors
- Ensure all required environment variables are set
- Run `npm run build` locally to test

### Authentication Issues
- Generate new `NEXTAUTH_SECRET`: `openssl rand -base64 32`
- Update `NEXTAUTH_URL` to match your actual domain

---

## Next Steps

1. **After first deployment**, test these pages:
   - `/` (Home)
   - `/artworks` (Artworks catalog)
   - `/artists` (Artists)
   - `/exhibitions` (Exhibitions)
   - `/contact` (Contact form)

2. **Add your domain** (optional):
   - In Vercel Project Settings → Domains
   - Add custom domain: `dianiartgallery.com`

3. **Enable Analytics** (optional):
   - Vercel automatically tracks performance
   - View in Analytics tab

---

## Environment Variables Reference

| Variable | Required | Source |
|----------|----------|--------|
| `DATABASE_URL` | ✅ Yes | Railway PostgreSQL |
| `NEXTAUTH_SECRET` | ✅ Yes | Generate: `openssl rand -base64 32` |
| `NEXTAUTH_URL` | ✅ Yes | Your Vercel URL |
| `STRIPE_PUBLIC_KEY` | ❌ Optional | Stripe Dashboard |
| `STRIPE_SECRET_KEY` | ❌ Optional | Stripe Dashboard |
| `MPESA_API_KEY` | ❌ Optional | MPESA Developer |
| `PESAPAL_API_KEY` | ❌ Optional | PESAPAL Developer |

---

**Need help? Check the logs:**
```
Vercel Logs: https://vercel.com/dashboard
Railway Logs: https://railway.app
```
