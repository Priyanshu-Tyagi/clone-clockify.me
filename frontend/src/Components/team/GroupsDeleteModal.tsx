import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import { FiX } from 'react-icons/fi';
type deleteGroupProps={
  handleDelete:Function;
  name:string
}


const GroupsDeleteModal = ({handleDelete, name}:deleteGroupProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const onClick = () => {
      handleDelete();
      onClose();
    }
  return (
    <>
        <Button variant='ghost' onClick={onOpen}><FiX /></Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                Are you sure you want to delete group {name}?
            </ModalBody>
  
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onClick} background={"red"} color="white">Delete</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
  )
}

export default GroupsDeleteModal