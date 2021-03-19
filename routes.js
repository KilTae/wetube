//전역적으로 선언
const Home = "/";
const JOIN="/join";
const LOGIN="/login";
const LOGOUT="/logout";
const SEARCH="/search";

//users

const USERS="/users";
const USERS_DETAIL="/:id"; // 만약에 유저라면 아이디를 부여한다. : <- 이 부호는 값이 변한다는 것을 뜻 한다.

//users/1
const EDIT_PROFILE="/edit-profile";
const CHANGE_PASSWORD="/change-password";

//videos

const VIDEOS="/videos";
const UPLOAD="/upload";
const VIDEO_DETAIL="/:id";
const EDIT_VIDEO="/:id/edit"; 
const DELETE_VIDEO="/:id/delete";
//videos/1/edit

const routes={
    home:Home,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    search:SEARCH,
    users:USERS,
    usersdetail:USERS_DETAIL,
    editprofile:EDIT_PROFILE,
    changepassword:CHANGE_PASSWORD,
    videos:VIDEOS,
    upload:UPLOAD,
    videosdetail:VIDEO_DETAIL,
    editvideo:EDIT_VIDEO,
    deletevideo:DELETE_VIDEO
};

export default routes; // what export ???  파일로 export한다는 뜻이다.