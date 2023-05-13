const createJob = (req, res) => {
  res.send("createJob user");
};
const deleteJob = (req, res) => {
  res.send("deleteJob user");
};
const getAllJobs = (req, res) => {
  res.send("getAllJobs user");
};
const updateJob = (req, res) => {
  res.send("updateJob user");
};
const showStats = (req, res) => {
  res.send("showStats user");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
