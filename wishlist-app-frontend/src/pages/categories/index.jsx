import { useContext, useState, useEffect } from "react";
import { SearchForm, CategoriesList, Modal, CategoryCreateForm, Loader, CategoryUpdateForm } from "../../components";
import { Box, Button} from "../../components/atoms";
import { SessionContext } from "../../contexts/SessionContext";
import { Container } from "../../global-styles-components";
import { useModal } from "../../hooks";
import { getCategoriesService } from "../../services";

export const Categories = () => {

  const { session } = useContext(SessionContext);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {

    const getCategories = async () => {
      
      try {

        setIsLoading(true);
        const request = await getCategoriesService(session.token);
        setCategories(request.categories);

      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
   }

    getCategories();

   }, []);

   const closeFunction = () => setCategoryData({});
   const { isOpen, openModal, closeModal } = useModal(closeFunction);

  return (
    <Container>
        <Loader isLoading={ isLoading }/>
        <Modal isOpen={ isOpen } closeModal={ closeModal } title={ categoryData.id ? 'Update category' : 'Create category'}>
          {
            categoryData
            ? <CategoryUpdateForm categoryData={ categoryData }/>
            : <CategoryCreateForm closeModal={ closeModal } setCategories={ setCategories }/>
          }
        </Modal>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
            <h2>Categories</h2>
            <SearchForm/>
        </Box>
        <Box>
            <Button onClick={ openModal }>Create</Button>
        </Box>
        <CategoriesList categories={ categories } setCategoryData={setCategoryData} openModal={ openModal }/>
    </Container>
  )
}
