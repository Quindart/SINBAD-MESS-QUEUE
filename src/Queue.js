const EventEmitter = require('events');

class MessageQueue extends EventEmitter {
    constructor() {
        super();
        this.queue = [];
        this.processing = false;
    }

    publish(message) {
        this.queue.push(message);
        this.emit('messageQueued', message);
        this._process();
    }

    subscribe(handler) {
        this.on('messageReceived', handler);
    }

    async _process() {
        if (this.processing || this.queue.length === 0) return;

        this.processing = true;
        const message = this.queue.shift();

        try {
            this.emit('messageReceived', message);
        } catch (err) {
            this.emit('error', err);
        }

        this.processing = false;
        this._process();
    }
}

module.exports = MessageQueue;
