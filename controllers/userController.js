export const login = (req,res) =>res.render("Login",{pageTitle: "Login"});
export const logout = (req,res) =>res.render("Logout",{pageTitle: "Logout"});
export const Join = (req,res) =>res.render("Join",{pageTitle: "Join"});

export const users = (req,res) =>res.render("users",{pageTitle: "Users"});
export const usersdetail = (req,res) =>res.render("usersdetail",{pageTitle: "Users Detail"});
export const editprofile = (req,res) =>res.render("editprofile",{pageTitle: "Edit Profile"});
export const changepassword = (req,res) =>res.render("changepassword",{pageTitle: "Change Password"});