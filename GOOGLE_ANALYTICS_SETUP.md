# Google Analytics Setup

This document explains how to set up Google Analytics for the Resilient Privacy website.

## Prerequisites

1. A Google Analytics account
2. A Google Analytics 4 (GA4) property created

## Setup Steps

### 1. Create a Google Analytics Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Note down your Measurement ID (format: G-XXXXXXXXXX)

### 2. Configure Environment Variables

1. Copy the `env.example` file to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Update the `.env.local` file with your actual Google Analytics Measurement ID:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
   ```

### 3. Deploy to Production

For production deployment (Vercel, Netlify, etc.), add the environment variable to your deployment platform:

- **Vercel**: Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` in your project settings
- **Netlify**: Add the variable in Site settings > Environment variables
- **Other platforms**: Add the environment variable in your platform's configuration

## Features

The Google Analytics implementation includes:

- **Automatic page tracking**: Tracks page views automatically
- **Performance optimized**: Uses Next.js Script component with `afterInteractive` strategy
- **Privacy compliant**: Respects user cookie preferences
- **Real-time tracking**: Provides real-time visitor data

## Verification

To verify that Google Analytics is working:

1. Visit your website
2. Check the Google Analytics Real-time reports
3. Look for active users in the Real-time section
4. Verify that page views are being tracked

## Privacy Considerations

- The implementation respects the cookie consent banner
- Users can opt-out through browser settings
- No personally identifiable information is collected by default
- Complies with GDPR and other privacy regulations

## Troubleshooting

If Google Analytics is not working:

1. Check that the Measurement ID is correct
2. Verify the environment variable is set properly
3. Check browser console for any JavaScript errors
4. Ensure the domain is verified in Google Analytics
5. Check that ad blockers are not interfering

## Support

For issues with Google Analytics setup, contact the development team or refer to the [Google Analytics documentation](https://developers.google.com/analytics).
