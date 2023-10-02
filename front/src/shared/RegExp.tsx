export const REG_EXP = {
  EMAIL: new RegExp(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$/, "g"),
  PASSWORD: new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    "gm"
  ),
};
