import { ClassesListContainer, TableClasses } from "../../styled/panel";
import { ClassListItem, } from '../../components';

export const ClassesListView = ({ classes = [] }) => {

  return (
    <ClassesListContainer>
      <TableClasses>
        <thead>
          <tr>
            <th>Teacher</th>
            <th>Name</th>
            <th>Description</th>
            {/* <th>Works</th> */}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            classes.length > 0
            ? classes.map(currentClass => <ClassListItem key={currentClass.id} data={currentClass}/>)
            : <tr className="table-no-records">No classes</tr>
          }
          
        </tbody>
      </TableClasses>
    </ClassesListContainer>
  )
}


  