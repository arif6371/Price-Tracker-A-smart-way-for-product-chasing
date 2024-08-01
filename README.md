![Price Tracker]([https://example.com/price-tracker-image](https://images.app.goo.gl/Vp8Wqpjqvv3nNPr76))
*Image caption for the price tracker feature*


# 🛍️ Ecom PricePulse Tracker

Welcome to the Ecom Price Tracking Application! This project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and enhanced with advanced scraping and notification features.

## 🎉 Introduction

Track prices of your favorite products and receive updates when they drop! This application allows users to monitor prices and availability of products from Amazon and more.

## 🚀 Getting Started

### Development Server

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) for optimal font loading.

---

## 📋 Table of Contents

- 🤖 [Introduction](#-introduction)
- ⚙️ [Tech Stack](#️-tech-stack)
- 🔋 [Features](#-features)
- 🤸 [Quick Start](#-quick-start)
- 🕸️ [Snippets](#️-snippets)
- 🔗 [Links](#-links)
- 🚀 [More](#-more)

---

## ⚙️ Tech Stack

- **Framework**: Next.js
- **Web Scraping**: Bright Data, Cheerio
- **Email**: Nodemailer
- **Database**: MongoDB
- **UI Components**: Headless UI
- **Styling**: Tailwind CSS

## 🔋 Features

### 🌟 Header with Carousel
Visually appealing header showcasing key features and benefits.

### 🔍 Product Scraping
A search bar for users to input Amazon product links and scrape product data.

### 📦 Scraped Projects
Displays details of products scraped so far, offering insights into tracked items.

### 📝 Scraped Product Details
Showcase product images, titles, pricing, details, and other relevant information scraped from the original website.

### 👥 Track Option
Modal for users to provide email addresses and opt-in for tracking.

### 📧 Email Notifications
Send alerts for various scenarios, like back-in-stock alerts or price drops.

### 🕒 Automated Cron Jobs
Automate periodic scraping to ensure data is up-to-date.

... and much more, including well-structured code architecture and reusability.

---

## 🤸 Quick Start

To learn more about Next.js, explore the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

---

## 🕸️ Snippets

### Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```env
#SCRAPER
BRIGHT_DATA_USERNAME=
BRIGHT_DATA_PASSWORD=

#DB
MONGODB_URI=

#OUTLOOK
EMAIL_USER=
EMAIL_PASS=
```

Replace the placeholder values with your actual credentials from BrightData, MongoDB, and Nodemailer.

---

## 🔗 Links

Check out our [GitHub repository](https://github.com/vercel/next.js/) for more details. Your feedback and contributions are welcome!

---

## 🚀 More

### 🌐 Deploy on Vercel

Deploy your Next.js app using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## 📸 Visuals

Here's a sneak peek of the app's UI:

![Price Tracker]([[https://example.com/price-tracker-image](https://images.app.goo.gl/Vp8Wqpjqvv3nNPr76)](https://images.app.goo.gl/fXXoN7um3mbmQMTw5))
*Image caption for the price tracker feature*

![Carousel Feature]([https://example.com/carousel-image](https://images.app.goo.gl/XHEqCtUZ5kuzAP696))
*Image caption for the carousel showcasing products*


