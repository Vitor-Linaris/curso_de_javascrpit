class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login efetuado com sucesso");
    } else {
      console.log("login error");
    }
  }
}

const user = new User("Vitor", "vit.linaris@gmail.com", 1234);

console.log(user);
user.login("vit.linaris@gmail.com", 1234);
