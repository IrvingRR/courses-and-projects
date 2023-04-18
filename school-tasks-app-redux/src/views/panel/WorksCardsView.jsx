import { FiEdit, FiEye, FiMoreHorizontal, FiTrash } from "react-icons/fi"
import { WorkCard, WorkCardFooter, WorkCardHeader, WorkCardHeaderOption, WorkCardHeaderOptions, WorksCards } from "../../styled"
import { useState } from "react"

export const WorksCardsView = () => {

    const [isOptionsActive, setIsOptionsActive] = useState(false);

  return (
    <WorksCards>
        <WorkCard>
            <WorkCardHeader>
                <h3>Completed</h3>
                <FiMoreHorizontal onClick={() => setIsOptionsActive(!isOptionsActive)}/>
                    <WorkCardHeaderOptions isOptionsActive={isOptionsActive}>
                        <WorkCardHeaderOption>
                            <FiEdit/>
                            Edit
                        </WorkCardHeaderOption>
                        <WorkCardHeaderOption>
                            <FiTrash/>
                            Delete
                        </WorkCardHeaderOption>
                        <WorkCardHeaderOption>
                            <FiEye/>
                            Show
                        </WorkCardHeaderOption>
                    </WorkCardHeaderOptions>
              
            </WorkCardHeader>
            <WorkCardFooter>
                <p>Homework</p>
                <h3>Universe exposition</h3>
            </WorkCardFooter>
        </WorkCard>
    </WorksCards>
  )
}
