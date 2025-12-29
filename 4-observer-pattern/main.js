class Subject {
  constructor() {
    this.observers = []; // This array stores all the subscriber methods that needs to be called/notified when Subject receives the data
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

const logObserver = (data) => console.log("Log:", data);
const emailObserver = (data) => console.log("Email sent:", data);

const userSubject = new Subject();

userSubject.subscribe(logObserver);
userSubject.subscribe(emailObserver);

userSubject.notify({ id: 1, name: "Omer" });
