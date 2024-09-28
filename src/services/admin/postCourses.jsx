// import { useMutation } from "@tanstack/react-query";
// import http from "../../utils/Http";
// import { endpoint } from "../../utils/endpoint";


// const postDataCourses = async (input) => {
//     return await http.post(endpoint.POST_COURSE, input).then((result) => {
//     console.log(result, "post Courses")
//     alert("Berhasil Menambahkan")
//     }).catch((err) => {
//      console.log(err, "ini eror")
//     alert("Gagal Cuy")
//     });
// }

// const UsepostDataCourses = () =>{
//     return useMutation(postDataCourses)
// }

// export {postDataCourses, UsepostDataCourses}


// const updateCourse = async (input, id) => {
//     return await http.put(`${endpoint.UPDATE_COURSES}${id}`, input).then((result) => {
//       console.log(result, "dataUpdate");
//       alert("berhasil");
//     }).catch((err) => {
//       console.log(err, "ini eror update");
//       alert("Gagal Cuy");
//     });
//   };
  
//   const useUpdateCourse = () => {
//     return useMutation(updateCourse);
//   };
//   export { useUpdateCourse };