import routes from "../routes";

export const getJoin = (req,res) =>{

    res.render("Join",{pageTitle: "Join"});


};

export const postJoin=(req,res)=>{
    const {
        body: {name, email, password, password2}
    }=req;

    if(password!==password2){
        res.status(400);
        res.render("Join",{pageTitle: "Join"});
    } else{
        
        res.redirect(routes.home);
    }
};


export const getlogin = (req,res) =>res.render("Login",{pageTitle: "Login"});

export const postlogin=(req,res)=>{
    res.redirect(routes.home);



};

export const logout = (req,res) =>res.render("Logout",{pageTitle: "Logout"});


export const users = (req,res) =>res.render("users",{pageTitle: "Users"});
export const usersdetail = (req,res) =>res.render("usersdetail",{pageTitle: "Users Detail"});
export const editprofile = (req,res) =>res.render("editprofile",{pageTitle: "Edit Profile"});
export const changepassword = (req,res) =>res.render("changepassword",{pageTitle: "Change Password"});