import { useState } from "react";
import { FiSearch, FiUserPlus, FiX } from "react-icons/fi";
import { Button, IconButton, Modal } from "../../components/ui";
import { TeachersActions, TeachersHeader, TeachersHeaderActions, TeachersHeaderInput } from "../../styled/panel/pages";
import { useModal } from "../../hooks/useModal";
import { CreateTeacherForm, TeachersCards } from "../../components/panel";

export const TeachersPage = () => {

  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();
  const [isInputActive, setIsInputActive] = useState(false);

  return (
    <>
      <Modal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}>
        <CreateTeacherForm/>
      </Modal>
      <TeachersHeader>
        <h2>Teachers</h2>
        <TeachersHeaderActions>
          <TeachersHeaderInput  placeholder='Search' autoComplete='off'/>
          <IconButton icon={ isInputActive ? <FiX/> : <FiSearch/> } onClick={ () => setIsInputActive(!isInputActive) }/>
        </TeachersHeaderActions>
      </TeachersHeader>
      <TeachersActions>
        <h3>
            Total: <span>10 teachers</span>
        </h3>
        <Button variant='outline' onClick={handleOpenModal}>
          <FiUserPlus/>
          Add teacher
        </Button>
      </TeachersActions>
      <TeachersCards/>
    </>
  );
};
