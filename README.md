# Testing Sequelize Timeout
I've recently faced frequent timeouts for Sequelize queries running in production against a Postgres DB. Such timeouts were caused by a moderate requests load. I aim to understand

This little project is sort of a test-bench that I'll use to play with load-testing Sequelize using k6.


Useful references:
- https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-setup-an-Nginx-load-balancer-example