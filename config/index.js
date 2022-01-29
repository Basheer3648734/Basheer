const dev = process.env.NODE_ENV == "development";
const test = process.env.NODE_ENV == "test";
const prod = process.env.NODE_ENV == "production";

export function server() {
  if (dev) {
    return "http://localhost:3000";
  } else if (test) {
    return "https://test-basheer.vercel.app";
  } else {
    return "https://ma-basheer.vercel.app";
  }
}
