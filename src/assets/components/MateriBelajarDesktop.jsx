import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Progress,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
// import PostUpdateIsDone from "../redux/reducer/PostUpdateIsDone";
import getDataDetail from "../../redux/action/getDetail";
import postUpdateIsDone from "../../redux/action/postupdateIsDone";

export const MateriBelajarDesktop = ({ setActiveVideo }) => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [id, setId] = useState(1);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    dispatch(getDataDetail(params.courseId));
  }, [dispatch, params.courseId]);

  useEffect(() => {
    dispatch(postUpdateIsDone(id));
  }, [dispatch, id]);

  const dataDetail = useSelector((state) => state.courseDetail.coursesDetail);
  //   console.log(dataDetail, "Materi");

  //   console.log(params, "params");

  const progres =
    dataDetail &&
    (dataDetail.chapter
      .map((chapter) =>
        chapter.lessons.reduce(
          (total, lesson) => (lesson.is_done ? total + 1 : total),
          0
        )
      )
      .reduce((total, previewCount) => total + previewCount, 0) /
      (dataDetail.total_lesson || 1)) *
      100;

  return (
    <div className=" mobile:hidden desktop:block desktop:ml-4  desktop:w-3/4 mobile:full flex justify-center">
      <div className="bg-white  desktop:w-5/6 mobile:w-full h-fit py-6 rounded-3xl shadow-lg ">
        <div className="flex h-full  justify-center content-center items-center ">
          <div className=" space-y-4 w-full mx-6 ">
            {/* Materi Belajar */}
            <div className="flex justify-between items-center gap-2">
              <p className="text-xl font-bold">Materi Belajar</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#45C440"
                height="32"
                width="32"
                viewBox="0 0 512 512">
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
              </svg>
              <p className="font-medium text-[#116E63]">{progres}%</p>
              <Progress
                aria-label="Loading..."
                value={progres}
                className="max-w-md"
              />
            </div>
            <div className="mx-2">
              {dataDetail &&
                dataDetail.chapter.map((courses, indeks) => (
                  <div key={courses.id}>
                    <div className="flex justify-between items-center text-sm font-semibold ">
                      <p className="text-[#116E63]">{courses.name}</p>
                      <p className=" text-[#F2A227] ">
                        {courses.lessons.reduce(
                          (total, lesson) => total + lesson.duration,
                          0
                        )}{" "}
                        Menit
                      </p>
                    </div>
                    <div className="space-y-2 my-2">
                      {courses.lessons.map((lesson, lessonIndex) => {
                        const cumulativeLessonIndex =
                          dataDetail.chapter
                            .slice(0, indeks)
                            .reduce(
                              (total, ch) => total + ch.lessons.length,
                              0
                            ) +
                          lessonIndex +
                          1;

                        return (
                          <div
                            key={lesson.id}
                            className="flex gap-2 justify-between items-center text-sm font-medium">
                            <p className="bg-[#EBF3FC] px-4 py-2 rounded-full">
                              {cumulativeLessonIndex}
                            </p>
                            <p className="w-full flex justify-start ">
                              {lesson.name}
                            </p>
                            {lesson.is_preview ? (
                              <button
                                className=" flex justify-end pr-3"
                                onClick={() => {
                                  setActiveVideo(lesson.video);
                                  setId(lesson.id);
                                }}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill={lesson.is_done ? "#45C440" : "#116E63"}
                                  height="20"
                                  width="20"
                                  viewBox="0 0 512 512">
                                  <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                                </svg>
                              </button>
                            ) : (
                              <>
                                <div className="mr-4">
                                  <svg
                                    width="16"
                                    height="20"
                                    viewBox="0 0 16 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M8 0C5.243 0 3 2.243 3 5V8H2C1.46957 8 0.960859 8.21071 0.585786 8.58579C0.210714 8.96086 0 9.46957 0 10V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H14C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18V10C16 9.46957 15.7893 8.96086 15.4142 8.58579C15.0391 8.21071 14.5304 8 14 8H13V5C13 2.243 10.757 0 8 0ZM5 5C5 3.346 6.346 2 8 2C9.654 2 11 3.346 11 5V8H5V5ZM9 15.723V18H7V15.723C6.65039 15.5228 6.36966 15.2213 6.19483 14.8584C6.02 14.4954 5.95928 14.0879 6.02068 13.6898C6.08208 13.2916 6.26272 12.9214 6.53876 12.6279C6.81481 12.3345 7.17332 12.1316 7.567 12.046C7.85942 11.9813 8.16262 11.9832 8.45425 12.0513C8.74587 12.1194 9.01849 12.2521 9.25198 12.4397C9.48548 12.6272 9.67391 12.8647 9.80337 13.1348C9.93283 13.4049 10 13.7005 10 14C9.99943 14.3497 9.90669 14.6932 9.73113 14.9956C9.55557 15.2981 9.30339 15.549 9 15.723Z"
                                      fill="#D9D9D9"
                                    />
                                  </svg>
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
            </div>
            {dataDetail.is_buy ? (
              <div></div>
            ) : (
              <div className="flex justify-center ">
                <Button
                  className="bg-[#116E63] text-white w-full font-semibold desktop:w-[23rem] mt-4 h-[2.5rem] rounded-xl hover:opacity-70"
                  onPress={onOpen}>
                  Beli Sekarang
                </Button>
                <Modal
                  className="relative"
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}>
                  <ModalContent className="absolute top-28">
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          <p className="text-center text-2xl font-bold">
                            Selangkah lagi Menuju{" "}
                            <p className="text-[#116E63]">Kelas Premium</p>
                          </p>
                        </ModalHeader>
                        <ModalBody className="flex justify-center">
                          <div className=" shadow-lg rounded-3xl ">
                            <img
                              className="w-full h-[8rem] bg-cover rounded-t-3xl"
                              src={dataDetail.category.image}
                            />
                            <div className="px-2 py-1 space-y-1 ">
                              <div className="flex justify-between text-sm ">
                                <p className="text-[#116E63] font-bold">
                                  {dataDetail.category.name}
                                </p>
                                <div className="flex items-center gap-1">
                                  <svg
                                    fill="#F4CE14"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 576 512">
                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                  </svg>
                                  <p>{dataDetail.rating}</p>
                                </div>
                              </div>
                              <p className="text-sm font-bold">
                                {dataDetail.title}
                              </p>
                              <p className="text-xs">
                                {dataDetail.mentor.name}
                              </p>
                              <div className="flex text-xs font-normal gap-4 ">
                                <div className="flex items-center gap-1">
                                  <svg
                                    fill="#45C440"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 576 512">
                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                  </svg>
                                  <p className="text-[#116E63] font-semibold">
                                    {dataDetail.level}
                                  </p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <svg
                                    fill="#45C440"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 576 512">
                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                  </svg>
                                  <p>{dataDetail.total_lesson}Modul</p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <svg
                                    fill="#45C440"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 576 512">
                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                  </svg>
                                  <p>{dataDetail.total_duration} Menit</p>
                                </div>
                              </div>
                              <button
                                className={`flex text-xs px-4 py-1 rounded-full gap-8 text-white font-semibold ${
                                  dataDetail.type === "isFree"
                                    ? "bg-[#116E63]"
                                    : "bg-[#F2A227]"
                                }`}>
                                <div className="flex items-center gap-2">
                                  <svg
                                    fill="#FFFFFF"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 576 512">
                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                  </svg>
                                  <p>Beli</p>
                                </div>
                                <p>Rp {dataDetail.price}</p>
                              </button>
                            </div>
                          </div>
                        </ModalBody>
                        <ModalFooter className="flex justify-center">
                          <Button
                            className="bg-[#116E63] w-3/4 h-[2.5rem]  flex justify-center items-center rounded-3xl text-white font-semibold text-sm gap-2 "
                            onClick={() => {
                              navigate(
                                `/detailKelasPembayaran/${dataDetail.id}`
                              );
                            }}>
                            <p>Beli Sekarang</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="white"
                              height="16"
                              width="16"
                              viewBox="0 0 512 512">
                              <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
                            </svg>
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
