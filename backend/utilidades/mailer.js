const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID = '193487001592-pf5odk768f04fhug1r4omjqde317jqjv.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04HGYlYFBRCUyCgYIARAAGAQSNwF-L9IrWwglAUQcbphP3itKpP3EoBiheZ-dBkDpHWROsq5OjDj8IA1XcmT2hYAdepgRMPbtDfA';



async function sendMail(datosMensaje) {
  let oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLEINT_SECRET,
    REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'appitsyou@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
        const mailOptions = {
        from: 'appitsyou@gmail.com',
        to: datosMensaje.destinatario,
        subject: datosMensaje.subject,
        text: datosMensaje.text,
        html: `<h1>${datosMensaje.message}</h1>`,
      };
  const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}
module.exports ={sendMail}