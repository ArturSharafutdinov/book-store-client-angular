export class UserSignup {
  Email: string;
  FirstName: string;
  LastName: string;
  Password: string;
  Address: string;
  Mailing: string;


  constructor(Email: string, FirstName: string, LastName: string, Password: string, Address: string, Mailing: string) {
    this.Email = Email;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Password = Password;
    this.Address = Address;
    this.Mailing = Mailing;
  }
}
