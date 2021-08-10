
export class Friend {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  language: string;

  constructor(
              _id: string,
              firstname: string,
              lastname: string,
              email: string,
              phonenumber: string,
              language: string)
  {
    this._id = _id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phonenumber = phonenumber;
    this.language = language;
  }
}
