export const login = (req,res) =>res.send("Login",{pageTitle: "Login"});
export const logout = (req,res) =>res.send("Logout",{pageTitle: "Logout"});
export const Join = (req,res) =>res.send("Join",{pageTitle: "Join"});

export const users = (req,res) =>res.send("users",{pageTitle: "Users"});
export const usersdetail = (req,res) =>res.send("usersdetail",{pageTitle: "Users Detail"});
export const editprofile = (req,res) =>res.send("editprofile",{pageTitle: "Edit Profile"});
export const changepassword = (req,res) =>res.send("changepassword",{pageTitle: "Change Password"});