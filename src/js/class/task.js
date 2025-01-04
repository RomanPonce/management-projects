export default class Task {
  constructor(taskName, description, check = false, endDate,  startDate = new Date()) {
    this.taskName = taskName;
    this.description = description;
    this.check = check;
    this.endDate = endDate;
    this.startDate = startDate;
  }
}
