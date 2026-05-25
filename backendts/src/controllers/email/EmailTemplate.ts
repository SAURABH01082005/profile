export const Contact_Reply_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
          body {
              font-family: 'Segoe UI', system-ui, Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #0f1219;
              color: #ffffff;
              line-height: 1.6;
          }
          .container {
              max-width: 650px;
              margin: 20px auto;
              background: #161A24;
              border-radius: 16px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
              overflow: hidden;
              border: 1px solid #364153;
          }
          .header {
              background: linear-gradient(135deg, #1E1E1E 0%, #2a2a2a 100%);
              padding: 35px 20px;
              text-align: center;
              border-bottom: 1px solid #364153;
          }
          .logo {
              font-size: 34px;
              font-weight: 800;
              color: #5D84F9;
              margin-bottom: 8px;
          }
          .header h1 {
              margin: 0;
              font-size: 26px;
              color: #ffffff;
          }
          .badge {
              display: inline-block;
              background: #EF4444;
              color: white;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 13px;
              font-weight: 600;
              margin-top: 10px;
          }
          .content {
              padding: 35px 25px;
          }
          .info-box {
              background: #1C2635;
              border: 1px solid #364153;
              border-radius: 12px;
              padding: 22px;
              margin: 25px 0;
          }
          .info-row {
              margin-bottom: 14px;
              display: flex;
              flex-wrap: wrap;           /* Important for mobile */
              align-items: flex-start;
              gap: 8px;
          }
          .info-label {
              color: #5D84F9;
              font-weight: 600;
              min-width: 90px;           /* Reduced */
              width: 90px;               /* Fixed width for alignment */
              flex-shrink: 0;
          }
          .info-value {
              flex: 1;
              word-break: break-all;     /* Prevents email overflow */
          }
          .message-box {
              background: #1C2635;
              border-left: 5px solid #5D84F9;
              padding: 20px;
              margin: 25px 0;
              border-radius: 4px;
              white-space: pre-wrap;
              font-size: 15.5px;
              color: #d1d5db;
              line-height: 1.7;
          }
          .footer {
              background: #1E1E1E;
              padding: 25px;
              text-align: center;
              color: #777;
              font-size: 13px;
              border-top: 1px solid #364153;
          }

          /* Mobile Responsiveness */
          @media screen and (max-width: 480px) {
              .container {
                  margin: 10px auto;
                  border-radius: 12px;
              }
              .content {
                  padding: 25px 20px;
              }
              .info-label {
                  width: 85px;
                  min-width: 85px;
              }
              .info-row {
                  flex-direction: column;   /* Stack on very small screens */
                  gap: 4px;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <div class="logo">SAURABH</div>
              <h1>New Message Received</h1>
              <div class="badge">CONTACT FORM</div>
          </div>

          <div class="content">
              <p style="font-size: 18px; margin-bottom: 25px;">
                  You have received a new message from your website.
              </p>

              <div class="info-box">
                  <h3 style="margin: 0 0 18px 0; color: #ffffff;">Sender Details</h3>
                  
                  <div class="info-row">
                      <span class="info-label">Name:</span>
                      <span class="info-value">{name}</span>
                  </div>
                  <div class="info-row">
                      <span class="info-label">Email:</span>
                      <span class="info-value">{email}</span>
                  </div>
                  <div class="info-row">
                      <span class="info-label">Subject:</span>
                      <span class="info-value">{subject}</span>
                  </div>
                  <div class="info-row">
                      <span class="info-label">Date:</span>
                      <span class="info-value">${new Date().toLocaleString('en-IN')}</span>
                  </div>
              </div>

              <p style="color: #a0a0a0; font-weight: 600; margin: 8px 0 10px 0;">Message:</p>
              <div class="message-box">
                  {message}
              </div>

              <p style="color: #a0a0a0; margin-top: 25px;">
                  You can reply directly to: <strong>{email}</strong>
              </p>
          </div>

          <div class="footer">
              <p><strong>Saurabh Profile Website</strong> • Mumbai, India</p>
              <p>${new Date().getFullYear()}</p>
          </div>
      </div>
  </body>
  </html>
`;

export const Contact_ThankYou_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - by Saurabh</title>
      <style>
          body {
              font-family: 'Segoe UI', system-ui, Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #0f1219;
              color: #ffffff;
              line-height: 1.6;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              background: #161A24;
              border-radius: 16px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
              overflow: hidden;
              border: 1px solid #364153;
          }
          .header {
              background: linear-gradient(135deg, #1E1E1E 0%, #2a2a2a 100%);
              padding: 40px 20px;
              text-align: center;
              border-bottom: 1px solid #364153;
          }
          .logo {
              font-size: 34px;
              font-weight: 800;
              color: #5D84F9;
              margin-bottom: 8px;
          }
          .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 700;
              color: #ffffff;
          }
          .content {
              padding: 35px 25px;
          }
          .welcome-message {
              font-size: 22px;
              font-weight: 600;
              margin: 0 0 20px 0;
              color: #ffffff;
          }
          .subtitle {
              font-size: 16px;
              color: #a0a0a0;
              margin-bottom: 25px;
          }
          .message-box {
              background: #1C2635;
              border-left: 5px solid #5D84F9;
              padding: 20px;
              margin: 25px 0;
              border-radius: 6px;
              white-space: pre-wrap;
              color: #d1d5db;
              font-size: 15.5px;
          }
          .button {
              display: inline-block;
              background: #5D84F9;
              color: #ffffff !important;
              padding: 14px 32px;
              margin: 25px 0;
              text-decoration: none;
              border-radius: 8px;
              font-size: 16px;
              font-weight: 600;
              box-shadow: 0 4px 15px rgba(93, 132, 249, 0.3);
          }
          .footer {
              background: #1E1E1E;
              padding: 25px;
              text-align: center;
              color: #777;
              font-size: 13px;
              border-top: 1px solid #364153;
          }

          /* Mobile Optimization */
          @media screen and (max-width: 480px) {
              .container {
                  margin: 10px auto;
                  border-radius: 12px;
              }
              .content {
                  padding: 25px 20px;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <!-- Header -->
          <div class="header">
              <div class="logo">SAURABH PROFILE</div>
              <h1>Thank You</h1>
          </div>

          <!-- Content -->
          <div class="content">
              <p class="welcome-message">Hello {name},</p>
              <p class="subtitle">Thank you for reaching out to me.</p>
              
              <p style="color: #d1d5db; font-size: 15.5px;">
                  I have received your message and will get back to you as soon as possible (usually within 24 hours).
              </p>

              <!-- User's Message -->
              <p style="color: #a0a0a0; font-weight: 600; margin: 8px 0 10px 0;">Your Message:</p>
              <div class="message-box">
                  {message}
              </div>

              <a href="${process.env.FRONTEND_URL}" class="button">Visit My Profile</a>

              <p style="color: #a0a0a0; margin-top: 30px;">
                  Best regards,<br>
                  <strong>Saurabh</strong><br>
                  Mumbai, India
              </p>
          </div>

          <!-- Footer -->
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Saurabh Profile. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
`;