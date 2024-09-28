import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import IcAdd from "../../../img/gala_add.png";
import { useDispatch } from "react-redux";
import getMentor from "../../../../redux/action/admin/Addmentor";
import { toast } from "react-toastify";

export const ButtonMentor = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const [Name, setName] = useState("");

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "Name") {
        setName(e.target.value);
      }
    }
  };

  const addmentor = async () => {
    const success = await dispatch(
      getMentor({
        name: Name,
      })
    );
    if (success) {
      toast.success("secces menambahkan mentor");
    } else {
      toast.warning("gagal brow");
    }
  };

  return (
    <div>
      <Button onPress={onOpen} className="bg-[#116E63] text-white px-6 font-medium">
        <img width={20} height={20} src={IcAdd} alt="" />
        Mentor
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent className="mb-[18rem]">
          {(onClose) => (
            <div>
              <ModalHeader className="flex flex-col items-center font-bold text-2xl text-[#116E63] gap-1">Tambah Mentor</ModalHeader>
              <ModalBody>
                <Input onChange={handleInput} type="text" label="Nama Mentor" id="Name" />
              </ModalBody>
              <ModalFooter className="flex flex-row justify-between">
                <Button
                  color="danger"
                  onPress={onClose}
                  onClick={() => {
                    addmentor();
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
