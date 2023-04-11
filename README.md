# Testing Sequelize Timeout
I've recently faced frequent timeouts for Sequelize queries running in production against a Postgres DB. Such timeouts were caused by a moderate requests load. I aim to understand

This little project is sort of a test-bench that I'll use to play with load-testing Sequelize using k6.


Useful references:
- https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-setup-an-Nginx-load-balancer-example
- https://richyen.com/postgres/2021/09/03/less-is-more-max-connections.html



## Notes
- Postgres has the configuration option `max_connections`. Refer to this [blog post](https://richyen.com/postgres/2021/09/03/less-is-more-max-connections.html) for a nuanced explanation of how to reason about this variable. In brief, beyond the value of a couple hundred, you should consider using a connection pooler like PgBouncer.

`docker run --rm -i --network="host" grafana/k6 run - <./k6/script.js`
`docker run  -i --rm --network="host" ghcr.io/szkiba/xk6-dashboard:latest run --out=dashboard - <./k6/script.js`