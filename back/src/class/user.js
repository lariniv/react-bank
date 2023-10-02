class UserClass {
  static #list = []

  constructor(email, password) {
    this.email = email
    this.password = password
    this.isConfirm = false
    this.id = new Date().getTime()
  }

  static addUser = (email, password) => {
    const user = new UserClass(email, password)
    this.#list.push(user)
  }

  static getList = () => {
    return this.#list
  }

  validateUser = () => {
    this.isConfirm = true
  }

  static findUserById = (id) => {
    return (
      this.#list.find((item) => item.id === id) || false
    )
  }

  static findUserByEmail = (email) => {
    return (
      this.#list.find((item) => item.email === email) ||
      false
    )
  }
}

module.exports = {
  UserClass,
}
