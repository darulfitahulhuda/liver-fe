import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import IcAdd from "../../../img/gala_add.png";
import { useAddKategori } from "../../../../services/admin/AddKategori";

export const ButtonKategori = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setname] = useState("");
  const { mutate: DataKategori } = useAddKategori();
  const [image, setimage] = useState("");

  const Kategori = (e) => {
    e && e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    DataKategori(formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setimage(file);
    console.log(file, "file");
  };

  return (
    <div>
        <Button onPress={onOpen} className="bg-[#116E63] text-white px-6 font-medium">
        <img width={20} height={20} src={IcAdd} alt="" />
        Kategori
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
              <ModalHeader className="flex flex-col items-center font-bold text-2xl text-[#116E63] gap-1">Tambah Kategori</ModalHeader>
              <ModalBody>
                <Input onChange={(e) => setname(e.target.value)} id="name" type="text" label="Nama Kategori" />
                <input onChange={handleImageChange} type="file" id="image" accept="image/*" label="Image" />
              </ModalBody>
              <ModalFooter className="flex flex-row justify-between">
                <Button
                  color="danger"
                  onPress={onClose}
                  onClick={() => {
                    Kategori();
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
