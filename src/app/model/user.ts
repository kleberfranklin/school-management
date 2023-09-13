export class User {
  id!: string;
  name?: string;
  email: string;
  password: string;
  isAdmin: boolean;
  
  constructor(email: string, password: string, isAdmin: boolean = false) {
    this.id = String(Math.round(Math.random() * 1000));
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
  }

  public static copy(user: User) {
    let u: User = new User(user.email, user.password, user.isAdmin);
    u.name = user.name;
    u.email = user.email;
    return u;
  }

  /**
   * Transforma um objeto pego da API para a versão salva no WebStorage
   * @param user
   * @returns
   */
  public static toWS(user: User) {
    let u: User = new User(user.email, user.password, user.isAdmin);
    u.name = user.name;
    u.email = user.email;
    return u;
  }

  
}