import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  useMediaQuery,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiEdit2, FiMoreVertical, FiX } from "react-icons/fi";
import GroupsEditModal from "./GroupsEditModal";
import GroupsDeleteModal from "./GroupsDeleteModal";
import { useSelector, useDispatch } from "react-redux";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import {
  getGroups,
  addGroups,
  deleteGroup,
} from "../../features/groups/groupsSlice";

const Groups = () => {
  const [item, setItem] = useState(false);
  const dispatch = useAppDispatch();
  const groups = useAppSelector((store) => store.groupsSlice);
  const auth = useAppSelector((store) => store.authSlice);
  const [group, setGroup] = useState<string>("");
  const [userId, email, password] = auth.token.split(":");

  const [
    isLargerThan1365,
    isSmallerThan1365,
    isLargerThan195,
    isSmallerThan195,
  ] = useMediaQuery([
    "(min-width: 1365px)",
    "(max-width: 1365px)",
    "(min-width: 195px)",
    "(max-width: 195px)",
  ]);

  useEffect(() => {
    dispatch(getGroups({ token: auth.token }));

    console.log(groups.groups);
    console.log(email);
    console.log(group);
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGroup(e.target.value);
  };

  const onClick = () => {
    let data = { name: group, userId: userId };
    dispatch(addGroups({ token: auth.token, data: data }));
  };

  const handleDelete: Function = (c: string) => {
    dispatch(deleteGroup({ token: auth.token, id: c }));
    console.log("Connected");
  };

  if (isLargerThan1365) {
    return (
      <Box>
        <Flex justifyContent={"right"} marginBottom={"20px"}>
          <Box marginRight={"20px"}>
            <Input
              value={group}
              onChange={onChange}
              placeholder="Add new user group"
            />
          </Box>
          <Box>
            <Button onClick={onClick} backgroundColor={"#038fce"} color="white">
              ADD
            </Button>
          </Box>
        </Flex>
        <Box bg={"#e4eaee"} padding="10px 20px">
          Groups
        </Box>
        <Flex border={"1px solid"} bg="white">
          <Box width={"30%"} padding="10px 10px 10px 20px">
            NAME
          </Box>
          <Box padding="10px 0px">ACCESS</Box>
        </Flex>
        {groups.groups.map((group) => {
          return (
            <Flex
              bg="white"
              padding={"5px"}
              key={group._id}
              borderLeft={"1px solid"}
              borderRight={"1px solid"}
              borderBottom={"1px solid"}
            >
              <Box padding="0px 0px 0px 10px" width={"30%"}>
                {group.name}
              </Box>
              <Box borderLeft={"1px dashed"} paddingLeft="10px" width={"63%"}>
                <Flex gap={"5px"}>
                  <AiOutlinePlusCircle />
                  <p>Access</p>
                </Flex>
              </Box>
              <Box borderLeft={"1px dashed"} paddingLeft="10px" width={"70px"}>
                <GroupsEditModal />
              </Box>
              <Box borderLeft={"1px dashed"} paddingLeft="10px" width={"70px"}>
                <GroupsDeleteModal
                  name={group.name}
                  handleDelete={() => handleDelete(group._id)}
                />
              </Box>
            </Flex>
          );
        })}
      </Box>
    );
  } else if (isSmallerThan1365 && isLargerThan195) {
    return (
      <Box>
        <Flex marginBottom={"20px"}>
          <Input marginRight={"20px"} placeholder="Add new user group" />
          <Box>
            <Button backgroundColor={"#038fce"} color="white">
              ADD
            </Button>
          </Box>
        </Flex>

        <Box>
          <Box bg={"#e4eaee"} padding="5px 10px" border={"1px solid"}>
            Groups
          </Box>
          <Flex
            padding={"10px"}
            borderLeft={"1px solid"}
            borderRight={"1px solid"}
            borderBottom={"1px solid"}
          >
            <Box width={"95%"}>Name</Box>
            <Box>
              <Button background={"#E1F5FE"} onClick={() => setItem(!item)}>
                {item ? (
                  <RiArrowDropUpLine fontSize={"30px"} />
                ) : (
                  <RiArrowDropDownLine fontSize={"30px"} />
                )}
              </Button>
            </Box>
          </Flex>
          {groups.groups.map((group) => {
            return (
              <Box key={group._id}>
                {item ? (
                  <Flex
                    padding={"10px"}
                    borderLeft={"1px solid"}
                    borderRight={"1px solid"}
                    borderBottom={"1px solid"}
                  >
                    <Box width={"95%"}>{group.name}</Box>
                    <Box>
                      <Button
                        background={"#E1F5FE"}
                        onClick={() => setItem(!item)}
                      >
                        <RiArrowDropUpLine fontSize={"30px"} />
                      </Button>
                    </Box>
                  </Flex>
                ) : (
                  <Box
                    padding={"10px"}
                    borderLeft={"1px solid"}
                    borderRight={"1px solid"}
                    borderBottom={"1px solid"}
                  >
                    <Flex>
                      <Box width={"95%"}>{group.name}</Box>
                      <Box>
                        <Button
                          background={"#E1F5FE"}
                          onClick={() => setItem(!item)}
                        >
                          <RiArrowDropDownLine fontSize={"30px"} />
                        </Button>
                      </Box>
                    </Flex>
                    <Box bg={"#e4eaee"}>
                      <Flex border={"1px solid"}>
                        <Box width={"50%"} padding="10px">
                          Members
                        </Box>
                        <Box borderLeft={"1px dashed"} padding="10px">
                          Members
                        </Box>
                      </Flex>
                      <Flex
                        borderLeft={"1px solid"}
                        borderRight={"1px solid"}
                        borderBottom={"1px solid"}
                      >
                        <Box width={"95%"} padding="10px">
                          EDIT
                        </Box>
                        <Box borderLeft={"1px dashed"} padding="10px">
                          <GroupsEditModal />
                        </Box>
                      </Flex>
                      <Flex
                        borderLeft={"1px solid"}
                        borderRight={"1px solid"}
                        borderBottom={"1px solid"}
                      >
                        <Box width={"95%"} padding="10px">
                          DELETE
                        </Box>
                        <Box borderLeft={"1px dashed"} padding="10px">
                          <GroupsDeleteModal
                            name={group.name}
                            handleDelete={() => handleDelete(group._id)}
                          />
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  }
};

export default Groups;
