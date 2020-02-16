module.exports = class Response {
  constructor(status, message, body) {
    this.status = status;
    this.message = message;
    this.body = body;
  }
};
