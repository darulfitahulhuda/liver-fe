import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal'
import React from 'react'
import { FilterBerandaSaya } from './FilterBerandaSaya'
import { Button } from '@nextui-org/button'

export const ModalFilterKelasSaya = ({isOpen,onOpenChange,scrollBehavior,setFilteredCourses}) => {
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior} className="block desktop:hidden">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Filter</ModalHeader>
              <ModalBody>
                <FilterBerandaSaya setFilteredCourses={setFilteredCourses} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
