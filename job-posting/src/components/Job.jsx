/* eslint-disable react/prop-types */

const Job = ({ title }) => {
  console.log("Inside job");
  console.log(title);
  return <div>{title}</div>;
};

export default Job;
