// netlify-functions/logRequest.js

exports.handler = async (event, context) => {
  const cookies = event.headers.cookie || "No cookies";
  const userAgent = event.queryStringParameters.userAgent || "No user agent";
  const userIP = event.queryStringParameters.userIP || "No IP";
  const time = event.queryStringParameters.time || "No time";
  const language = event.queryStringParameters.language || "No language";

  // Ghi thông tin vào log
  console.log(`Cookies: ${cookies}`);
  console.log(`User Agent: ${userAgent}`);
  console.log(`IP: ${userIP}`);
  console.log(`Time: ${time}`);
  console.log(`Language: ${language}`);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Data received successfully!" }),
  };
};
