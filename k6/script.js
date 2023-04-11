import http from "k6/http";
import { check } from "k6";

export const options = {
  scenarios: {
    pushSequelizePool: {
      executor: "ramping-arrival-rate",
      startRate: 2,
      timeUnit: "1s",
      preAllocatedVUs: 5,
      maxVUs: 200,
      stages: [
        { duration: "10s", target: 10 },
        {
          duration: "40s",
          target: 120,
        },
      ],
    },
  },
};

export default function () {
  const res = http.get("http://localhost:8080");
 check(res, {
   "is connection acquistion error": (res) =>
     res.status === 500 && res.body.includes("ConnectionAcquireTimeoutError"),
 });
}
