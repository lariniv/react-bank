class Code {
  static #list = []

  constructor(email) {
    this.code = Code.generateCode()
    this.email = email
  }

  static validate = (email, code) => {
    const newCode = Code.getCode(email)
    if (!newCode) {
      return false
    }
    if (newCode.code === code) {
      return true
    } else {
      return false
    }
  }

  static getList = () => {
    return this.#list
  }

  static createCode = (email) => {
    const code = new Code(email)
    this.#list.push(code)
  }

  static generateCode = () => {
    return Math.floor(Math.random() * 899999 + 100000)
  }

  static getCode = (email) => {
    return (
      this.#list.find((item) => item.email === email) ||
      false
    )
  }
}

module.exports = {
  Code,
}
