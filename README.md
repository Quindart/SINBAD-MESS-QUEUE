#  Simple Message Queue

A lightweight and efficient **in-memory message queue** built with Node.js, leveraging the **Observer Pattern** and `EventEmitter`. Ideal for microservices, background tasks, or any event-driven architecture.

---

##  Features

-  **Event-driven**: Publish / Subscribe pattern with Node.js `EventEmitter`.
-  **In-memory queue**: No external dependencies or setup required.
-  **Retry-ready**: Supports customizable message structures for retries or delayed execution.
-  **Lightweight**: Minimalistic and easy to integrate into existing applications.

---

##  Installation

Using npm:

```bash
 npm i sinbad-mess-queue
```

## Basic example


```js
import { MessageQueue } from 'simple-message-queue';

const queue = new MessageQueue();

// Subscribe to an event
queue.subscribe('email.send', (data) => {
  console.log('Sending email to:', data.email);
});

// Publish an event
queue.publish('email.send', { email: 'user@example.com' });

```

## Advanced: Retry Mechanism

```js

queue.subscribe('task.run', (data) => {
  try {
    // Execute task
  } catch (err) {
    if (data.retry < 3) {
      queue.publish('task.run', { ...data, retry: data.retry + 1 });
    }
  }
});

```


## 🤝 Contributing
Contributions are welcome! Feel free to:

Submit issues or suggestions

Create pull requests

Improve the documentation

## 🔒 Security Policy

Supported Versions

Version	Supported
5.1.x	✅
5.0.x	❌
4.0.x	✅
< 4.0	❌

Reporting a Vulnerability
We aim to respond within 48 hours. Please do not disclose vulnerabilities publicly until we’ve investigated and released a fix.

## License
This project is licensed under the MIT License.

## Questions or Feedback?
Open an issue or reach out via GitHub Discussions. We'd love to hear from you!
