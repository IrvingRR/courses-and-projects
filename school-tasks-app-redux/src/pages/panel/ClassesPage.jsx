import { useEffect, useState } from 'react';
import { ClassesFilters, ClassesGroupButtons, ClassesHeader, ClassesHeaderActions, ClassesHeaderInput } from '../../styled';
import { Button, IconButton, Loader, Modal } from '../../components/ui';
import { FiGrid, FiList, FiSearch, FiX } from 'react-icons/fi';
import { useModal } from '../../hooks/useModal';
import { CreateClassForm } from '../../components/';
import { ClassesCardsView, ClassesListView } from '../../views';
import { useDispatch, useSelector } from 'react-redux';
import { startReadClassesThunk, startSearchClassesThunk } from '../../redux/classes/classesThunks';

export const ClassesPage = () => {

    const { classes, isLoading } = useSelector(state => state.classes);
    const dispatch = useDispatch();

    const [isInputActive, setIsInputActive] = useState(false);
    const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();
    const [isListViewActive, setIsListViewActive] = useState(false);


    useEffect(() => {

        dispatch(startReadClassesThunk());

    }, []);

    const onSearchClasses = (e) => {
        dispatch(startSearchClassesThunk(e.target.value));
    };

    return (
        <>
            <Loader isLoading={isLoading}/>
            <Modal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}>
                <CreateClassForm handleCloseModal={handleCloseModal}/>
            </Modal>
            <ClassesHeader>
                <h2>Classes</h2>
                <ClassesHeaderActions>
                    <ClassesGroupButtons>
                        <IconButton variant={!isListViewActive ? '' : 'outline'} icon={<FiGrid/>} onClick={() => setIsListViewActive(false)}/>
                        <IconButton variant={isListViewActive ? '' : 'outline'} icon={<FiList/>} onClick={() => setIsListViewActive(true)}/>
                    </ClassesGroupButtons>
                    <ClassesHeaderInput type='text' name='search' placeholder='Search' isInputActive={isInputActive} onChange={onSearchClasses}/>
                    <IconButton icon={ isInputActive ? <FiX/> : <FiSearch/> } onClick={ () => setIsInputActive(!isInputActive) }/>
                </ClassesHeaderActions>
            </ClassesHeader>
            <ClassesFilters>
                <h3>
                    Total: <span>{classes.length} classes</span>
                </h3>
                <Button variant='outline' onClick={handleOpenModal}>Create new class</Button>
            </ClassesFilters>
            {
                isListViewActive
                ? <ClassesListView classes={classes}/>
                : <ClassesCardsView classes={classes}/>
            }
        </>
    );
};