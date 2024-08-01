"use server"

import { EmailContent, EmailProductInfo, NotificationType } from '@/types';
import nodemailer from 'nodemailer';

const Notification = {
  WELCOME: 'WELCOME',
  CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
  LOWEST_PRICE: 'LOWEST_PRICE',
  THRESHOLD_MET: 'THRESHOLD_MET',
}

export async function generateEmailBody(
  product: EmailProductInfo,
  type: NotificationType
  ) {
  const THRESHOLD_PERCENTAGE = 40;
  // Shorten the product title
  const shortenedTitle =
    product.title.length > 20
      ? `${product.title.substring(0, 20)}...`
      : product.title;

  let subject = "";
  let body = "";

  switch (type) {
    case Notification.WELCOME:
      subject = `Welcome to PricePulse Tracking facility for ${shortenedTitle}`;
      body = `
     <div>
  <h2>🎉 Welcome to PricePulse! 🚀</h2>
  <p>Hey there! 👋 I'm Arif from PricePulse, and we're thrilled to have you onboard. You've successfully started tracking <strong>${product.title}</strong>!</p>
  <p>Here's a sneak peek at the kind of updates you'll receive:</p>
  <div style="border: 1px solid #ccc; padding: 15px; background-color: #f0f8ff; border-radius: 8px;">
    <h3>🎈 <strong>${product.title} is Back in Stock! 🎈</strong></h3>
    <p>Great news! Your tracked item, <strong>${product.title}</strong>, is now available again! 🛒</p>
    <p>Don't let it slip away - <a href="${product.url}" target="_blank" rel="noopener noreferrer" style="color: #ff6f61; font-weight: bold;">grab it now!</a> 🎯</p>
    <img src="https://i.ibb.co/pwFBRMC/Screenshot-2023-09-26-at-1-47-50-AM.png" alt="Product Image" style="max-width: 100%; border-radius: 8px;" />
  </div>
  <p>Stay tuned with PricePulse ✨ for more exciting updates on <strong>${product.title}</strong> and other amazing products you're watching! 🛍️💸</p>
  <p>Happy shopping! 💖</p>
</div>

      `;
      break;

    case Notification.CHANGE_OF_STOCK:
      subject = `Welcome to PricePulse Tracking facility for${shortenedTitle} is now back in stock!`;
      body = `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <h2 style="color: #ff6f61;">🎉 Hey there! 👋 I'm Arif from PricePulse! 🎉</h2>
  <h4 style="margin-top: 0;">Your favorite product <strong>${product.title}</strong> is back in stock! 🛍️</h4>
  <p>Don't miss out on this opportunity! Grab yours before they run out again! 🏃‍♂️💨</p>
  <p>Check out the product <a href="${product.url}" target="_blank" rel="noopener noreferrer" style="color: #ff6f61; font-weight: bold;">here</a>.</p>
  <p>Stay tuned with <strong>PricePulse✨</strong> for more exciting updates on <strong>${product.title}</strong> and other amazing products you're tracking! 📦💸</p>
  <p>Happy shopping! 💖</p>
</div>

      `;
      break;

    case Notification.LOWEST_PRICE:
      subject = `Welcome to PricePulse Tracking facility for Lowest Price Alert on ${shortenedTitle}`;
      body = `
       <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <h2 style="color: #ff6f61;">🎉 Great News! 🎉</h2>
  <h4>Hey there! 👋 I'm Arif from PricePulse, and we have fantastic news! Your tracked item <strong>${product.title}</strong> has hit its lowest price ever! 🎉💸</h4>
  <p>This is the perfect time to buy! Don't wait - grab it now before the price goes up! 📈✨</p>
  <p>Get it <a href="${product.url}" target="_blank" rel="noopener noreferrer" style="color: #ff6f61; font-weight: bold;">here</a>!</p>
  <p>Keep an eye on <strong>PricePulse✨</strong> for more updates on <strong>${product.title}</strong> and other products you're interested in! 🛍️🛒</p>
  <p>Happy shopping! 💖</p>
</div>

      `;
      break;

    case Notification.THRESHOLD_MET:
      subject = `Welcome to PricePulse Tracking facility for Discount Alert on ${shortenedTitle}`;
      body = `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <h2 style="color: #ff6f61;">🎉 Big Savings Alert! 🎉</h2>
  <h4>Hey there! 👋 I'm Arif from PricePulse, and guess what? <strong>${product.title}</strong> is now available at an amazing discount of over <strong>${THRESHOLD_PERCENTAGE}%</strong>! 🤑</h4>
  <p>Don't miss out on this fantastic deal! Snag it before it's gone! 🛒💨</p>
  <p>Buy it <a href="${product.url}" target="_blank" rel="noopener noreferrer" style="color: #ff6f61; font-weight: bold;">here</a>!</p>
  <p>Stay tuned with <strong>PricePulse✨</strong> for more deals and updates on <strong>${product.title}</strong> and other products you're tracking! 🛍️💰</p>
  <p>Happy shopping! 💖</p>
</div>

      `;
      break;

    default:
      throw new Error("Invalid notification type.");
  }

  return { subject, body };
}

const transporter = nodemailer.createTransport({
  pool: true,
  service: 'hotmail',
  port: 2525,
  auth: {
    user: 'ak7457751@outlook.com',
    pass: process.env.EMAIL_PASSWORD,
  },
  maxConnections: 1
})

export const sendEmail = async (emailContent: EmailContent, sendTo: string[]) => {
  const mailOptions = {
    from: 'ak7457751@outlook.com',
    to: sendTo,
    html: emailContent.body,
    subject: emailContent.subject,
  }

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if(error) return console.log(error);
    
    console.log('Email sent: ', info);
  })
}