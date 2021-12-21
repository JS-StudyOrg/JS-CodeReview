const http = require("http");

const server = http.createServer((request, response) => {
  let body = []; // body를 배열로 받는 이유/는 Buffer로 한 개씩 데이터가 들어오기 때문
  const { method, url, headers } = request; // request 객체 안에 있는 정보들
  console.log(`request method : ${method}, url : ${url}`);

  console.log(`header object : ${headers["content-typ"]}`);

  // 만약 method가 options이면 preflight 응답을 보낸다
  if (method === "OPTIONS") {
    response.writeHead(200, preflightCorsHeader); // options인 경우 보낼 헤너
    response.end();
  }

  if (method === "POST") {
    request //
      .on("error", (err) => console.error(err))
      .on("data", (chunk) => body.push(chunk))
      .on("end", () => {
        body = Buffer.concat(body).toString(); // 16진수를 string으로 변경

        response.writeHead(201, postHeaders(body));
        console.log(body);

        if (url === "/reverse") response.end(body.split("").reverse().join(""));
        else if (url === "/split") response.end(body.split("").join(":"));
      });
  }
});

server.listen(5000, () => console.log(`id: locallhost:5000`));

const preflightCorsHeader = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Access-Control-Max-Age": 1000, // preflight request에 대한 응답을 캐시할 수 있는 시간(초)
};

const postHeaders = (body) => {
  return {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
};
