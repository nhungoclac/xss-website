// netlify-functions/logRequest.js

exports.handler = async (event, context) => {
  const userAgent = event.queryStringParameters.userAgent || "No user agent";
  const userIP = event.queryStringParameters.userIP || "No IP (IPv4)";
  const ipv6 = event.queryStringParameters.ipv6 || "No IPv6";

  // Ghi thông tin vào log
  console.log(`User Agent: ${userAgent}`);
  console.log(`IP (IPv4): ${userIP}`);
  console.log(`IPv6: ${ipv6}`);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Data received successfully!" }),
  };
};
