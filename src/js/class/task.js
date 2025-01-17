export default class Task {
  constructor(title, description, endDate, check = false,  startDate = new Date()) {
    this.title = title;
    this.description = description;
    this.check = check;
    this.endDate = endDate;
    this.startDate = startDate;
  }
}
