const fs = require("fs");
const path = require("path");
const projectsDBFile = path.resolve("src/data/projects.json");
const projects = JSON.parse(fs.readFileSync(projectsDBFile));

export const getAllProjects = () => {
  return projects;
};

export const getProjectFromId = (id) => {
  const project = projects.find((project) => project.id === id);
  return project;
};
