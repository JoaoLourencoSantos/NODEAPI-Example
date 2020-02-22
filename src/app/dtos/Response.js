module.exports = class Response {
  constructor(status, message, body = null, sucess = false) {
    this.status = status;
    this.message = message;
    this.body = body;
    this.sucess = sucess;
  }

  build() {
    return {
      message: this.message,
      body: this.body,
      sucess: this.sucess
    };
  }
};
