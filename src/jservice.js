const http = require("http");

const jServiceTrivia = () => {
    return new Promise((resolve, reject) => {
        http.get("http://jservice.io/api/random", (response) => {
            let body = "";
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error("Failed to load question, status code: " + response.statusCode));
            }
            response.on("data", (chunk) => {
                body += chunk;
            });
            response.on("end", () => {
                resolve(JSON.parse(body));
            });
        });
    });
};

module.exports = {
    randomQuestion: jServiceTrivia
};