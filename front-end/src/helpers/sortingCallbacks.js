function name(a, b) {
  const taskA = a.task.toLowerCase();
  const taskB = b.task.toLowerCase();

  if (taskA < taskB) {
    return -1;
  }
  if (taskA > taskB) {
    return 1;
  }
  return 0;
}

function date(a, b) {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();

  return dateA - dateB;
}

function status(a, b) {
  const statusA = a.status.toLowerCase();
  const statusB = b.status.toLowerCase();

  if (statusA < statusB) {
    return -1;
  }
  if (statusA > statusB) {
    return 1;
  }
  return 0;
}

export default {
  name,
  date,
  status,
};
