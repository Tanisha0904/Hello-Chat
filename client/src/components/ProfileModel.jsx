import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
// import { IoEyeSharp } from "react-icons/io5";

import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
const ProfileModel = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        // IoEyeSharp replaced with ViewIcon
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal onClose={onClose} size="md" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize="1.25rem"
            // fontFamily="Work sans"
            d="flex"
            justifyContent="center"
            textTransform="capitalize"
          >
            {user.name}
          </ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
            bg="whiteAlpha.500"
            p="20px 0"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.image}
              alt={user.name}
            />
            <Text
              mt="2rem"
              fontSize={{ base: "1rem", md: "1.25rem" }}
              // fontFamily="Work sans"
            >
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModel;
