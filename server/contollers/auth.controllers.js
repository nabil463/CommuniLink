export const signup = async (req, res) => {
    const {fullName, username, password, confirmPassword, gender} = req.body;
}

export const login = (req, res) => {
    console.log("login page");
}

export const logout = (req, res) => {
    console.log("logout page");
}