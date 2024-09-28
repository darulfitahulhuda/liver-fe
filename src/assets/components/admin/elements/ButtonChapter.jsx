import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import GetDataChapterPost from "../../../../redux/action/admin/Postchapter";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import GetDataCourse from "../../../../redux/action/admin/Getcourse";
import IcAdd from "../../../img/gala_add.png";

export const ButtonChapter = () => {
  //   const [selectedKeysTipeClass, setSelectedKeysTipeClass] = React.useState(new Set(["course id"]));
  //   const [selectedLvlClass, setSelectedLvlClass] = React.useState(new Set(["Level Class"]));

  //   const selectedValueTipeClass = React.useMemo(() => Array.from(selectedKeysTipeClass).join(", ").replaceAll("_", " "), [selectedKeysTipeClass]);
  //   const selectedValueLvlClass = React.useMemo(() => Array.from(selectedLvlClass).join(", ").replaceAll("_", " "), [selectedLvlClass]);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["course id"]));
  const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(", ").replaceAll("_", " "), [selectedKeys]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [course_id, setcourse_id] = useState("");

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "Name") {
        setName(e.target.value);
      }
      if (e.target.id === "course_id") {
        setcourse_id(e.target.value);
      }
    }
  };

  const postchapter = async () => {
    const success = await dispatch(
      GetDataChapterPost({
        name: Name,
        course_id: course_id,
      })
    );
    if (success) {
      toast.warning("gagal brow");
      
    } else {
      toast.success("secces menambahkan chapter");
    }
  };

  useEffect(() => {
    // Fungsi yang akan dipanggil setiap 3 detik
    const fetchData = () => {
      dispatch(GetDataCourse());
    };

    // Panggil fungsi pertama kali
    fetchData();

    // Set interval untuk memanggil fungsi setiap 3 detik
    const intervalId = setInterval(fetchData, 3000);

    // Membersihkan interval pada saat komponen unmount
    return () => clearInterval(intervalId);
  }, [dispatch]);

  const data = useSelector((state) => state.Course.Course.courses);
  console.log(data, "course");

  return (
    <div>
       <Button onPress={onOpen} className="bg-[#116E63] text-white px-6 font-medium">
        <img width={20} height={20} src={IcAdd} alt="" />
        Chapter
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent className="mb-[15rem]">
          {(onClose) => (
            <div>
              <ModalHeader className="flex flex-col items-center font-bold text-2xl text-[#116E63] gap-1">Tambah chapter</ModalHeader>
              <ModalBody>
                <Input onChange={handleInput} type="text" label="Nama" id="Name" />
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedValue}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                    style={{ maxHeight: "200px", overflowY: "auto" }} // Set max height and make it scrollable
                  >
                    {data &&
                      data.map((courses) => (
                        <DropdownItem onClick={() => setcourse_id(courses.id)} key={courses.id}>
                          {courses.name}
                        </DropdownItem>
                      ))}
                  </DropdownMenu>
                </Dropdown>
              </ModalBody>
              <ModalFooter className="flex flex-row justify-between">
                <Button
                  color="danger"
                  onPress={onClose}
                  onClick={() => {
                    postchapter();
                  }}
                >
                  Simpan
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
