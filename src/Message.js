class Message {
    constructor(data, options = {}) {
        this.data = data;
        this.createdAt = new Date();
        this.attempts = 0;
        this.maxRetries = options.maxRetries || 3;
    }
}

module.exports = Message;
