const { getAllProjects } = require("../projects");
export default function Handler(req, res) {
  if (req.method == "GET") {
    return res.status(200).json(JSON.stringify(getAllProjects()));
  }
}
