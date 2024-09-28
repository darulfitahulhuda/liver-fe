import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, Progress, Tab, Tabs } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
// import PostUpdateIsDone from "../redux/reducer/PostUpdateIsDone";
import getDataDetail from "../../redux/action/getDetail";

export const DetailBelajar = ({ activeVideo }) => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [id, setId] = useState(1);

  useEffect(() => {
    dispatch(getDataDetail(params.courseId));
  }, [dispatch, params.courseId]);

  // useEffect(() => {
  //   dispatch(PostUpdateIsDone(id))
  // }, [dispatch, id]);

  const dataDetail = useSelector((state) => state.courseDetail.coursesDetail);
  console.log(dataDetail, "Materi");

  // console.log(params, "params");

  const defaultVideo = dataDetail && dataDetail.chapter[0] && dataDetail.chapter[0].lessons[0].video;

  // const [activeVideo, setActiveVideo] = useState(null);

  // const changeVideo = (newVideoUrl) => {
  //   setActiveVideo(newVideoUrl);
  // };
  return (
    <div className=" flex desktop:flex-col mobile:flex-col-reverse  ">
      <div className="mobile:p-4 desktop:p-0 ">
        <div className="flex justify-between">
          <p className="text-lg font-medium text-[#116E63]">{dataDetail && dataDetail.category && dataDetail.category && dataDetail.category.name}</p>
          <div className="flex items-center gap-1">
            <svg fill="#F4CE14" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <p> {dataDetail.rating} </p>
          </div>
        </div>
        <p className="text-lg font-medium">
          {dataDetail.title}
          <p className="text-sm font-normal align-top">{dataDetail && dataDetail.category && dataDetail.category[0] && dataDetail.category[0].category.name}</p>
        </p>
        <p className="pb-1 text-xs">By {dataDetail?.mentor?.name}</p>

        <div className="flex text-xs font-normal gap-4">
          <div className="flex items-center gap-1">
            <svg fill="#45C440" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <p className="text-[#116E63] font-semibold">{dataDetail.level}</p>
          </div>
          <div className="flex items-center gap-1">
            <svg fill="#45C440" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <p>{dataDetail.total_lesson} Modul</p>
          </div>
          <div className="flex items-center gap-1">
            <svg fill="#45C440" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <p>{dataDetail.total_duration} Menit</p>
          </div>
        </div>
      </div>
      <a href="https://t.me/+dN88eEKBRfE2Mzc1" className="mt-4 mobile:hidden desktop:block">
        <button className="flex items-center gap-4 rounded-2xl px-10 py-1 text-base font-bold text-white bg-[#45C440]">
          <p>Join Grup Telegram</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="white" viewBox="0 0 512 512">
            <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
          </svg>
        </button>
      </a>
      <div className="">
        <div className="relative mb-[2rem] h-[22rem] rounded-xl  desktop:rounded-3xl desktop:my-6 mobile:mt-2 desktop:mx-2">
          <ReactPlayer className="absolute  " width="100%" height="100%" url={activeVideo || defaultVideo} />
        </div>
      </div>
    </div>
  );
};
