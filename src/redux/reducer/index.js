import { combineReducers } from "@reduxjs/toolkit";
import KategoriSlice from "./kategoribelajarr";
import authRegisterSlice from "./auth/authregister";
import otp from "./auth/otp";
import authSliceLoginUser from "./auth/authSliceLoginUser";
import forgetPassSlice from "./auth/forgetPassSlice";
import GetCoursePopular from "./GetCoursePopular";
import updatepasslicer from "../reducer/akun/UpdatePass";
import akunnotif from "./akun/NotifikasiRedux";
import GetCoursePopularAll from "./GetCoursePopularAll";
import coursesearch from "./search";
import getfree from "./getfreekelassaya";
import authGetUserSlice from "./akun/getme";
import GetCourseAll from "./GetCourseAll";
import CardAdm from "./admin/CardAdmin";
import GetCourseDetail from "./GetCourseDetail";
import PostUpdateIsDone from "./PostUpdateIsDone";
import MentorAdd from "./admin/addmentor";
import LessonAdd from "./admin/addlesson";
import Chapter from "./admin/getchapter";
import ChapterPost from "./admin/postchapter";
import Course from "./admin/getcourse.jsx";
import CourseAdd from "./admin/addcourse.jsx";
import MentorGet from "./admin/getmentor.jsx";
import GetCategories from "./admin/getcategories.jsx";
import DeleteC from "./admin/deletecourse.jsx";
import UpdateCourses from "./admin/putcourse.jsx";
import PostEnrollment from "./PostEnrollment.jsx";
import getCoursesMe from "./getCoursesMe.jsx";
import filterAdm from "./admin/filterAdm.jsx";
import GetPaymentHistory from "./GetPaymentHistory.jsx";

export default combineReducers({
  kategori: KategoriSlice,
  regis: authRegisterSlice,
  authOtp: otp,
  loginUser: authSliceLoginUser,
  authPass: forgetPassSlice,
  coursePopular: GetCoursePopular,
  coursePopularAll: GetCoursePopularAll,
  courseDetail: GetCourseDetail,
  courseEnrollment: PostEnrollment,
  courseAll: GetCourseAll,
  updatesIsDone: PostUpdateIsDone,
  updatepass: updatepasslicer,
  Notifikasi: akunnotif,
  Search: coursesearch,
  Free: getfree,
  me: authGetUserSlice,
  CourseMe : getCoursesMe,
  Card: CardAdm,
  Mentor: MentorAdd,
  Lesson: LessonAdd,
  Chapter: Chapter,
  PostChapter: ChapterPost,
  Course: Course,
  FilterAdm: filterAdm,
  AddCourse: CourseAdd,
  DataMentor: MentorGet,
  Categories: GetCategories,
  Delete: DeleteC,
  UpdateCourse: UpdateCourses,
  PaymentHistory: GetPaymentHistory
});
