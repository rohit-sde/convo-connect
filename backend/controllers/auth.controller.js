export const signup = (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
  } catch (e) {}
};

export const login = (req, res) => {
  res.send("login");
};

export const logout = (req, res) => {
  res.send("logout");
};
