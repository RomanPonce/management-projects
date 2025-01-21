export default class Task {
  constructor(title, endDate, check = false,  startDate = new Date()) {
    this.title = title;
    this.check = check;
    this.endDate = endDate;
    this.startDate = startDate;
  }
}
