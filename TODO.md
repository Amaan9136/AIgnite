# TODO: Implement Team ID, Secure Key, and Email Notification in Registration

## Tasks
- [x] Update server/models/Teams.js to add teamId and secureKey fields
- [x] Create server/mail.js utility for sending emails using nodemailer
- [x] Modify pages/api/register.js to generate teamId and secureKey, save to DB, and send email
- [x] Install nodemailer dependency
- [ ] Configure email service credentials in environment variables
- [ ] Test email sending functionality
- [ ] Verify teamId generation and uniqueness
