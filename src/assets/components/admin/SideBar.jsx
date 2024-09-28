import React, { useEffect, useState } from "react";
import Logo from "../../img/Logo.png";
import Dashboard from "../../img/ic_dashboard.png";
import ManageClass from "../../img/manage_accounts.png";
import IconLogOut from "../../img/log-out.png";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Table, TableBody, TableCell, TableColumn, TableColumn as TableColumnNext, TableHeader, TableRow } from "@nextui-org/react";
import { ButtonAdd } from "./elements/ButtonAdd";
import { ButtonKategori } from "./elements/ButtonKategori";
import { ButtonMentor } from "./elements/ButtonMentor";
import { ButtonLesson } from "./elements/ButtonLesson";
import { ButtonChapter } from "./elements/ButtonChapter";
import { useDispatch, useSelector } from "react-redux";
import getDeletecourse from "../../../redux/action/admin/Deletecourse";
import { useDataUpdateCourse } from "../../../services/admin/UbahCourse";
import getDataCard from "../../../redux/action/admin/CardAdm";
import { LogOut } from "../../../redux/action/auth/authLoginUser";
import { Input } from "antd";
import GetDataKelola from "../../../redux/action/admin/GetKelolaKelas";

const SideBar = () => {
  const Kelola = useSelector((state) => state.Chapter.KelolaKelas);
  const [intervalId, setIntervalId] = useState(null);
  const getKelola = async () => {
    await dispatch(GetDataKelola());
  };
  useEffect(() => {
    getKelola();

    const id = setInterval(() => {
      getKelola();
    }, 3000);

    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, []);

  const [editedIndex, setEditedIndex] = useState(-1);
  const { mutate: UpdateCourses } = useDataUpdateCourse();
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [level, setlevel] = useState("");
  const [type, settype] = useState("");
  const [intended_for, setintended_for] = useState("");
  const dispatch = useDispatch();

  const [states, setStates] = useState({
    DashBoard: true,
    KelolaKelas: false,
    RiwayatPembayaran: false,
  });

  function handleclick(clickedState) {
    setStates((prevState) => {
      // Mengatur semua state menjadi false
      const newStates = {
        DashBoard: false,
        KelolaKelas: false,
        RiwayatPembayaran: false,
      };

      // Mengatur state yang diklik menjadi true
      newStates[clickedState] = true;

      return newStates;
    });
  }

  const dataUsers = useSelector((state) => state.FilterAdm);
  console.log(dataUsers, "Data Users");

  const CourseUbah = (courseId) => {
    const succes = UpdateCourses({
      id: courseId,
      name: name,
      price: price,
      level: level,
      type: type,
      intended_for: intended_for,
    });
  };

  useEffect(() => {
    dispatch(getDataCard());
  }, []);

  const deletea = (courseId) => {
    dispatch(getDeletecourse(courseId));
  };

  const dataBayar = useSelector((state) => state.Card.card.enrollment);
  console.log(dataBayar, "data bayar");

  // filter kelola kelas
  const [levell, setlevell] = useState("");
  const [typee, settypee] = useState("");
  const [namakelas, setnamakelas] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setOriginalData(Kelola || []);
  }, [Kelola]);

  const PencarianData = () => {
    const filtered = originalData.filter((item) => {
      const levelMatch = item.course.level.toLowerCase().includes(levell.toLowerCase());
      const typeMatch = item.course.type.toLowerCase().includes(typee.toLowerCase());
      const nameMatch = item.course.name.toLowerCase().includes(namakelas.toLowerCase());

      return levelMatch && typeMatch && nameMatch;
    });

    setFilteredData(filtered);
    console.log("filteredData:", filtered);
  };

  // Call PencarianData when originalData changes
  useEffect(() => {
    PencarianData();
  }, [originalData, levell, typee, namakelas]);

  // filter status pembayaran
  const [kelaspremium, setkelaspremium] = useState("");
  const [status, setstatus] = useState("");
  const [originalDatabayar, setOriginalDatabayar] = useState([]);
  const [filteredDatabayar, setFilteredDatabayar] = useState([]);
  useEffect(() => {
    setOriginalDatabayar(dataBayar || []);
  }, [dataBayar]);

  const PencarianDataBayar = () => {
    const filteredbayar = originalDatabayar.filter((item) => item.course.name.toLowerCase().includes(kelaspremium.toLowerCase()) && item.statusPembayaran.toLowerCase().includes(status.toLowerCase()));
    setFilteredDatabayar(filteredbayar);
    console.log("filteredbayarDataBayar:", filteredbayar);
  };
  useEffect(() => {
    PencarianDataBayar();
  }, [originalDatabayar, kelaspremium, status]);

  const handleDropdownChange = (event) => {
    settype(event.target.value);
  };

  const handleDropdownChangeLevel = (event) => {
    setlevel(event.target.value);
  };

  return (
    <div className="static flex flex-row gap-[150px] bg-[#F8F8F8] w-full h-[30.5rem] ">
      <div className="absolute flex flex-col top-0 left-0 h-full w-[17rem] bg-[#F3F3F3] text-black items-center pt-[30px] gap-[30px]">
        <div className="w-[10rem] h-[3rem]">
          <img src={Logo} alt="" />
        </div>
        <div className="flex flex-col gap-5 font-bold p-10">
          <div className="flex flex-row gap-2">
            <img src={Dashboard} alt="" />
            <button onClick={() => handleclick("DashBoard")}>Dashboard</button>
          </div>
          <div className="flex flex-row gap-2">
            <img width={27} height={12} src={ManageClass} alt="" />
            <button onClick={() => handleclick("KelolaKelas")}>Kelola Kelas</button>
          </div>
          <div className="flex flex-row gap-2">
            <img src={IconLogOut} alt="" />
            <button
              onClick={() => {
                dispatch(LogOut());
              }}
              key="logout"
              color="danger"
            >
              Keluar
            </button>
          </div>
        </div>
      </div>
      <div className="">
        {/* Dashboard */}
        {states.DashBoard && (
          <div className="flex flex-col justify-center  ms-[310px]   bg-[#FFFFFF] w-[78%] rounded-[10px] gap-10 ">
            <div className="flex flex-row py-4 items-center w-full h-[100px] justify-between">
              <div className="h-full space-y-4">
                <span className="font-bold ms-5   text-2xl">Status Pembayaran</span>
                <div className="flex ml-[1.2rem]  flex-row gap-2 me-[20px]">
                  <div>
                    <p>Nama Kelas</p>
                    <Input
                      value={kelaspremium}
                      onChange={(e) => {
                        setkelaspremium(e.target.value);
                      }}
                      id="kelaspremium"
                      placeholder="nama kelas premium"
                    ></Input>
                  </div>
                  <div>
                    <p>Status Pembayaran</p>
                    <Input
                      value={status}
                      onChange={(e) => {
                        setstatus(e.target.value);
                      }}
                      id="status"
                      placeholder="sudahBayar, belumBayar"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <Table aria-label="Example static collection table" className="h-[21rem]">
              <TableHeader>
                <TableColumn className="text-black">ID</TableColumn>
                <TableColumn className="text-black">Kategori</TableColumn>
                <TableColumn className="text-black">Kelas Premium</TableColumn>
                <TableColumn className="text-black">Status</TableColumn>
                <TableColumn className="text-black">Metode Pembayaran</TableColumn>
                <TableColumn className="text-black">Tanggal Bayar</TableColumn>
              </TableHeader>
              <TableBody>
                {filteredDatabayar &&
                  filteredDatabayar.map((item, index) => (
                    <TableRow key="1">
                      <TableCell>{item.user.name}</TableCell>
                      <TableCell>{item.course.category[0]?.category.name}</TableCell>
                      <TableCell>{item.course.name}</TableCell>
                      <TableCell>{item.statusPembayaran}</TableCell>
                      <TableCell>{item.metodePembayaran}</TableCell>
                      <TableCell>{item.tanggalBayar ? new Date(item.tanggalBayar).toLocaleString() : "N/A"}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        )}
        {/* Kelola Kelas */}
        {states.KelolaKelas && (
          <div className="flex flex-col ms-[305px]  bg-[#FFFFFF] w-[77%] rounded-[10px] gap-10 ">
            <div className=" items-center mt-2 w-full h-[100px] justify-between">
              <div>
                <span className="font-bold  ms-5 text-2xl">Kelola Kelas</span>
              </div>
              <div className="flex  w-full ml-6  me-[20px] mt-[1rem]  items-center pb-4 ">
                <div className="flex mr-[10rem] gap-[5rem]  items-end justify-between ">
                  <div className="flex gap-4">
                    <div className=" gap-2">
                      <p>Level </p>
                      <Input
                        placeholder="Beginner,Intermediate,Advanced"
                        type="text"
                        label="levell"
                        value={levell}
                        onChange={(e) => {
                          setlevell(e.target.value);
                        }}
                        id="level"
                      />
                    </div>
                    <div className="gap-2">
                      <p>Type </p>
                      <Input placeholder="isFree,isPremium" type="text" label="typee" value={typee} onChange={(e) => settypee(e.target.value)} id="type" />
                    </div>
                    <div className=" ">
                      <p>Nama kelas </p>
                      <Input placeholder="nama kelas" type="text" label="namakelas" value={namakelas} onChange={(e) => setnamakelas(e.target.value)} id="namakelas" />
                    </div>
                  </div>
                  <div className="flex gap-4 justify-end">
                    <ButtonChapter />
                    <ButtonLesson />
                    <ButtonMentor />
                    <ButtonKategori />
                    <ButtonAdd />
                  </div>
                </div>
              </div>
            </div>
            <Table aria-label="Example static collection table" className="h-[21rem] ">
              <TableHeader className="snap-none">
                <TableColumn className="text-black">Kategori</TableColumn>
                <TableColumn className="text-black">Nama Kelas</TableColumn>
                <TableColumn className="text-black">intended_for</TableColumn>
                <TableColumn className="text-black">Tipe Kelas</TableColumn>
                <TableColumn className="text-black">Level</TableColumn>
                <TableColumn className="text-black">Harga Kelas</TableColumn>
                <TableColumn className="text-black">Aksi</TableColumn>
              </TableHeader>
              <TableBody>
                {filteredData &&
                  filteredData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.category.name}</TableCell>
                      <TableCell>
                        {editedIndex === index ? (
                          <input
                            className="w-[5rem]"
                            type="text"
                            value={name} // Gantilah dengan nilai yang sesuai
                            onChange={(e) => setname(e.target.value)}
                            id="name"
                          />
                        ) : (
                          item.course.name
                        )}
                      </TableCell>

                      <TableCell>
                        {editedIndex === index ? (
                          <textarea
                            className=" w-[25rem] "
                            rows={3}
                            type="text"
                            value={intended_for} // Gantilah dengan nilai yang sesuai
                            onChange={(e) => setintended_for(e.target.value)}
                            id="intended_for"
                          />
                        ) : (
                          item.course.intended_for
                        )}
                      </TableCell>
                      <TableCell>
                        {editedIndex === index ? (
                          // <input
                          //   type="text"
                          //   value={type} // Gantilah dengan nilai yang sesuai
                          //   onChange={(e) => settype(e.target.value)}
                          //   id="type"
                          // />
                          <div className="w-[3rem]">
                            <select value={type} onChange={handleDropdownChange}>
                              <option value={item.course.type}>{item.course.type}</option>
                              <option value="isFree">isFree</option>
                              <option value="isPremium">isPremium</option>
                            </select>
                          </div>
                        ) : (
                          item.course.type
                        )}
                      </TableCell>
                      <TableCell>
                        {editedIndex === index ? (
                          // <input
                          //   type="text"
                          //   value={level} // Gantilah dengan nilai yang sesuai
                          //   onChange={(e) => setlevel(e.target.value)}
                          //   id="level"
                          // />
                          <div className="w-[3rem]">
                            <select value={level} onChange={handleDropdownChangeLevel}>
                              <option value={item.course.level}>{item.course.level}</option>
                              <option value="Beginner">Beginner</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Advanced">Advanced</option>
                            </select>
                          </div>
                        ) : (
                          item.course.level
                        )}
                      </TableCell>
                      <TableCell className="text-red-500">
                        {editedIndex === index ? (
                          <input
                            className="w-[3rem] "
                            type="text"
                            value={price} // Gantilah dengan nilai yang sesuai
                            onChange={(e) => setprice(parseFloat(e.target.value))}
                            id="price"
                          />
                        ) : (
                          item.course.price
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-row gap-1 text-white">
                          {editedIndex === index ? (
                            <button
                              onClick={() => {
                                CourseUbah(item.course.id);

                                setEditedIndex(-1);
                              }}
                              className="bg-[#116E63] rounded-[10px] p-1 w-[60px]"
                            >
                              Simpan
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                setEditedIndex(index);
                                setname(item.course.name);
                                setintended_for(item.course.intended_for);
                                settype(item.course.type);
                                setlevel(item.course.level);
                                setprice(item.course.price);
                              }}
                              className="bg-[#116E63] rounded-[10px] p-1 w-[60px]"
                            >
                              Ubah
                            </button>
                          )}
                          <button
                            onClick={() => {
                              deletea(item.course.id);
                            }}
                            className="bg-[#DB1B1B] rounded-[10px] p-1 w-[60px]"
                          >
                            Hapus
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
