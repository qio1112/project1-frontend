/**
 * data mapping class for user (user info)
 */
export class User {
  username: string;
  password: string;
  name: string;
  memberDate: Date;

  constructor(username: string, password: string, name: string, memberDate: Date) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.memberDate = memberDate;
  }
}
