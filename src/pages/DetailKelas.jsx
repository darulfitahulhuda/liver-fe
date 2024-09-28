import React, { Fragment, useEffect, useState } from "react";
import { BeliMateriPremium } from "../assets/components/BeliMateriPremium";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, Progress, Tab, Tabs } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import getDataDetail from "../redux/action/getDetail";
import ReactPlayer from "react-player";
import PostUpdateIsDone from "../redux/reducer/PostUpdateIsDone";
import { MateriBelajarMobile } from "../assets/components/MateriBelajarMobile";
import { MateriBelajarDesktop } from "../assets/components/MateriBelajarDesktop";
import { DetailBelajar } from "../assets/components/DetailBelajar";

export const DetailKelas = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [id, setId] = useState(1);

  useEffect(() => {
    // Fetch data initially
    dispatch(getDataDetail(params.courseId));

    // Set up interval to fetch data every 3 seconds
    const intervalId = setInterval(() => {
      dispatch(getDataDetail(params.courseId));
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [dispatch, params.courseId]);

  // useEffect(() => {
  //   dispatch(PostUpdateIsDone(id))
  // }, [dispatch, id]);

  const dataDetail = useSelector((state) => state.courseDetail.coursesDetail);
  // console.log(dataDetail, "Materi");

  // console.log(params, "params");



  const [activeVideo, setActiveVideo] = useState('');

  // const changeVideo = (newVideoUrl) => {
  //   setActiveVideo(newVideoUrl);
  // };

  // console.log(dataDetail, "Detail");

  const defaultVideo =
    dataDetail &&
    dataDetail.chapter[0] &&
    dataDetail.chapter[0].lessons[0].video;

  const [showBeli, setShowBeli] = useState(false);

  return (
    <Fragment>
      <div>
        <div className="bg-gradient-to-b from-[#CFE2E0] via-white to-white">
          <div className=" desktop:mx-[8rem] desktop:pt-4 desktop:space-y-8">
            {/* Button Keluar */}
            <div className=" flex gap-2 px-4 pt-4 ">
              <button onClick={() => {
                                                      navigate(
                                                        "/"
                                                      );
                                                    }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              </button>
              <p>Kelas Lainnya</p>
            </div>
            {/* Konten */}
            <div className="desktop:mx-[1rem]">
              <div className="desktop:flex justify-center ">
                <div className="  w-full  ">
                  <DetailBelajar activeVideo={activeVideo} ></DetailBelajar>
                  <MateriBelajarMobile setActiveVideo={setActiveVideo}></MateriBelajarMobile>
                  {/* Desktop Tentang Kelas */}
                  <div className="mobile:hidden desktop:block mt-4">
                    <p className="text-lg font-medium flex justify-start items-start w-full">Tentang Kelas</p>
                    <p className="text-xs indent-6 leading-loose ">{dataDetail.desc}</p>
                  </div>
                  <div className="mobile:hidden desktop:block">
                    <p className="text-lg font-medium">Kelas Ini Ditujukan Untuk</p>
                    <ol className="list-decimal text-xs  leading-loose ">{dataDetail.intended_for}</ol>
                  </div>
                </div>
                <MateriBelajarDesktop setActiveVideo={setActiveVideo}></MateriBelajarDesktop>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BeliMateriPremium isVisible={showBeli} onClose={() => setShowBeli(false)} />
    </Fragment>
  );
};
