import nodemailer from 'nodemailer';
import type { ContactInquiry, ComfortClubApplication } from '@shared/schema';

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export async function sendContactInquiryEmail(inquiry: ContactInquiry) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('Email credentials not configured, skipping email send');
    return;
  }

  const transporter = createTransporter();

  const subject = `New Contact Inquiry from ${inquiry.firstName} ${inquiry.lastName}`;
  
  const htmlContent = `
    <h2>New Contact Inquiry</h2>
    <p><strong>From:</strong> ${inquiry.firstName} ${inquiry.lastName}</p>
    <p><strong>Email:</strong> ${inquiry.email}</p>
    <p><strong>Phone:</strong> ${inquiry.phone}</p>
    ${inquiry.service ? `<p><strong>Service:</strong> ${inquiry.service}</p>` : ''}
    <p><strong>Submitted:</strong> ${inquiry.createdAt?.toLocaleString()}</p>
    
    ${inquiry.message ? `
      <h3>Message:</h3>
      <p>${inquiry.message.replace(/\n/g, '<br>')}</p>
    ` : ''}
    
    <hr>
    <p><em>This inquiry was submitted through the Hometown Heating website contact form.</em></p>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'tom@hometownheating.ca',
    subject,
    html: htmlContent,
    replyTo: inquiry.email,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact inquiry email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending contact inquiry email:', error);
    throw error;
  }
}

export async function sendComfortClubApplicationEmail(application: ComfortClubApplication) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('Email credentials not configured, skipping email send');
    return;
  }

  const transporter = createTransporter();

  const subject = `New Comfort Club Application from ${application.firstName} ${application.lastName}`;
  
  const htmlContent = `
    <h2>New Comfort Club Application</h2>
    <p><strong>From:</strong> ${application.firstName} ${application.lastName}</p>
    <p><strong>Email:</strong> ${application.email}</p>
    <p><strong>Phone:</strong> ${application.phone}</p>
    ${application.address ? `<p><strong>Address:</strong> ${application.address}</p>` : ''}
    ${application.systemCount ? `<p><strong>Number of Systems:</strong> ${application.systemCount}</p>` : ''}
    ${application.systemTypes ? `<p><strong>System Types:</strong> ${application.systemTypes}</p>` : ''}
    <p><strong>Status:</strong> ${application.status}</p>
    <p><strong>Submitted:</strong> ${application.createdAt?.toLocaleString()}</p>
    
    ${application.message ? `
      <h3>Additional Comments:</h3>
      <p>${application.message.replace(/\n/g, '<br>')}</p>
    ` : ''}
    
    <hr>
    <p><em>This application was submitted through the Hometown Heating website Comfort Club page.</em></p>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'tom@hometownheating.ca',
    subject,
    html: htmlContent,
    replyTo: application.email,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Comfort Club application email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending Comfort Club application email:', error);
    throw error;
  }
}