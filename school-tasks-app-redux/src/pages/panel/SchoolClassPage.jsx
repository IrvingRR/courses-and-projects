import { useEffect, useState } from 'react';
import { WorksHeader, WorksHeaderActions, WorksHeaderInput, WorksHeaderToggle } from '../../styled';
import { IconButton, IconDropDown } from '../../components';
import { FiFilter, FiGrid, FiList, FiSearch, FiX } from 'react-icons/fi';
import { WorksCardsView, WorksListView } from '../../views';
import { useDispatch } from 'react-redux';
import { startReadSchoolClassThunk } from '../../redux/schoolClass';
import { useParams } from 'react-router-dom';

const optionsFilter = ['All', 'Pending', 'In proccess', 'Completed'];

export const SchoolClassPage = () => {

    const { id } = useParams();

    const [isInputActive, setIsInputActive] = useState(false);
    const [isListViewActive, setIsListViewActive] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startReadSchoolClassThunk(id));
    }, []);

  return (
    <>
        <WorksHeader>
        <h2>Works</h2>
        <WorksHeaderActions>
            <IconDropDown icon={<FiFilter/>} options={optionsFilter}/>
            <WorksHeaderToggle>
                <IconButton variant={isListViewActive ? 'outline' : ''} icon={<FiGrid/>} onClick={() => setIsListViewActive(false)}/>
                <IconButton variant={isListViewActive ? '' : 'outline'} icon={<FiList/>} onClick={() => setIsListViewActive(true)}/>
            </WorksHeaderToggle>
            <WorksHeaderInput type='text' name='search' placeholder='Search' isInputActive={isInputActive}/>
            <IconButton icon={isInputActive ? <FiX/> : <FiSearch/>} onClick={() => setIsInputActive(!isInputActive)}/>
        </WorksHeaderActions>
        </WorksHeader>
        {
            isListViewActive
            ? <WorksListView/>
            : <WorksCardsView/>
        }
    </>
  );
};