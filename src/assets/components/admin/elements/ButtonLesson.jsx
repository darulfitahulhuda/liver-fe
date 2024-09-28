import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import IcAdd from "../../../img/gala_add.png";
import { useDispatch, useSelector } from "react-redux";
import GetDataChapter from "../../../../redux/action/admin/Getchapter";
import getLesson from "../../../../redux/action/admin/Addlesson";
import { toast } from "react-toastify";

export const ButtonLesson = () => {
  const [selectedKeysTipeClass, setSelectedKeysTipeClass] = React.useState(new Set(["chapter_id"]));
  const selectedValueTipeClass = Array.from(selectedKeysTipeClass).join(", ").replaceAll("_", " ");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [video, setvideo] = useState("");
  const [desc, setdesc] = useState("");
  const [duration, setduration] = useState("");
  const [chapter_id, setchapter_id] = useState("");

  const addlesson = async () => {
    const success = await dispatch(
      getLesson({
        name: Name,
        video: video,
        duration: duration,
        chapter_id: chapter_id,
      })
    );
    if (success) {
      toast.success("secces menambahkan lesson");
    } else {
      toast.warning("gagal brow");
    }
  };

  useEffect(() => {
    const fetchData = () => {
      dispatch(GetDataChapter());
    };

    const intervalId = setInterval(fetchData, 3000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const data = useSelector((state) => state.Chapter.chapter?.chapters || []);
  console.log(data, "data");

  return (
    <div>
        <Button onPress={onOpen} className="bg-[#116E63] text-white px-6 font-medium">
        <img width={20} height={20} src={IcAdd} alt="" />
        Lesson
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent className="mb-[8rem]">
          {(onClose) => (
            <div>
              <ModalHeader className="flex flex-col items-center font-bold text-2xl text-[#116E63] gap-1">Tambah Lesson</ModalHeader>
              <ModalBody>
                <Input onChange={(e) => setName(e.target.value)} type="text" label="Nama" id="Name" />
                <Input onChange={(e) => setvideo(e.target.value)} type="text" label="video" id="video" />
                <Input onChange={(e) => setduration(parseFloat(e.target.value))} type="text" label="duration" id="duration" />

                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedValueTipeClass}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeysTipeClass}
                    onSelectionChange={setSelectedKeysTipeClass}
                    style={{ maxHeight: "200px", overflowY: "auto" }} // Set max height and make it scrollable
                  >
                    {data &&
                      data.map((courses) => (
                        <DropdownItem onClick={() => setchapter_id(courses.id)} key={courses.id}>
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
                    addlesson();
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
