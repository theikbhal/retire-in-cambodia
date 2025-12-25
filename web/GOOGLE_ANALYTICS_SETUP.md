# Google Analytics Configuration

Get your GA4 Measurement ID from https://analytics.google.com/

## Setup Instructions:

1. **Create a Google Analytics 4 Property:**
   - Go to https://analytics.google.com/
   - Create a new GA4 property for your website
   - Get your Measurement ID (format: G-XXXXXXXXXX)

2. **Add to Environment Variables:**
   - Create a `.env.local` file in the `web` directory
   - Add: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
   - Replace `G-XXXXXXXXXX` with your actual Measurement ID

3. **For Production (Vercel):**
   - Go to your Vercel project settings
   - Navigate to Environment Variables
   - Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` with your GA4 ID
   - Redeploy your application

## Example .env.local file:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123XYZ
```

## Testing:

After adding your Measurement ID:
1. Restart your development server (`bun dev`)
2. Visit your site
3. Check Google Analytics Real-Time reports to see traffic

## What's Tracked:

- Page views
- User sessions
- Traffic sources
- User demographics (if enabled)
- Custom events (can be added later)
