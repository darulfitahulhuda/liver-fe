import { Card, CardBody } from "@nextui-org/react";
import React, { useEffect } from "react";
import icon from "../../img/icon.png";
import { useDispatch, useSelector } from "react-redux";
import getDataCard from "../../../redux/action/admin/CardAdm";
export const CardAdm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataCard());
  }, []);

  const data = useSelector((state) => state.Card.card);
  console.log(data, "data card ");

  return (
    <div className=" bg-[#F8F8F8] my-[2rem] ">
      <div className="flex justify-center items-center ml-[17rem] gap-14    ">
        <Card className="bg-[#F2A227] w-[350px] h-[108px] text-white rounded-[15px]">
          <CardBody className="flex flex-row p-6 gap-3">
            <div>
              <img src={icon} alt="" />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="font-semibold">{data.activeUsers}</h3>
              <p className="font-bold">Active Users</p>
            </div>
          </CardBody>
        </Card>
        <Card className="bg-[#45C440] w-[350px] h-[108px] text-white rounded-[15px]">
          <CardBody className="flex flex-row p-6 gap-3">
            <div>
              <img src={icon} alt="" />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="font-semibold">{data.activeClass}</h3>
              <p className="font-bold">Active Class</p>
            </div>
          </CardBody>
        </Card>
        <Card className="bg-[#116E63] w-[350px] h-[108px] text-white rounded-[15px]">
          <CardBody className="flex flex-row p-6 gap-3">
            <div>
              <img src={icon} alt="" />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="font-semibold">{data.premiumClass}</h3>
              <p className="font-bold">Premium Class</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CardAdm;
