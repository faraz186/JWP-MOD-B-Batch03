import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../pages/error";
import Teacher from "../pages/teacher";
import Student from "../pages/student";
import Login from "../pages/login";
import Home from "../pages/home";
import Profile from "../pages/profile";
// import Posts from "../pages/post";
// import Addpost from "../pages/addpost";
// import Update from "../pages/update";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="home/*" element={<Home />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="student" element={<Student />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="post" element={<Posts />} /> */}
          {/* <Route path="createpost" element={<Addpost />} />
          <Route path="/update/:id" element={<Update />} /> */}
          <Route path="profile/:id" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
