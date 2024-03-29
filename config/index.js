const dev = process.env.NODE_ENV == "development";
const test = process.env.NODE_ENV == "test";
const prod = process.env.NODE_ENV == "production";

export function server() {
  if (dev) {
    return "http://localhost:3000";
  } else if (prod) {
    return "https://ma-basheer.vercel.app";
  }
}
