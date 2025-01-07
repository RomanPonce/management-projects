export default class Task {
  constructor(name, description, endDate, check = false,  startDate = new Date()) {
    this.name = name;
    this.description = description;
    this.check = check;
    this.endDate = endDate;
    this.startDate = startDate;
  }
}
