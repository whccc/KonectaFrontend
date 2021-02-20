import React, { useEffect, useState } from 'react'
import {
  Container,
  Button,
  ContainerCategories
} from '../../styles/PageCategoriesAdmingStyle'
import { CPNavbarAdmin } from '../../components/NavBarAdmin'
import { CPModalCategory } from '../../components/ModalCategory'
import { FaPlus } from 'react-icons/fa'
import useCategory from '../../hooks/useCategory'
import { CPDetailCategories } from '../../components/DetailCategoriesAdmin'
const PageCategories = (): JSX.Element => {
  const [ShowModal, setShowModal] = useState(false)
  const {
    HookCreateCategoryAsync,
    HookGetCategoriesAsync,
    JsonDataCategories
  } = useCategory()
  const InitialDataCategoryAsync = async () => {
    await HookGetCategoriesAsync()
  }
  useEffect(() => {
    InitialDataCategoryAsync()
  }, [])
  return (
    <Container>
      <CPNavbarAdmin />
      <h2>Categorías</h2>
      <ContainerCategories>
        <CPDetailCategories JsonDataCategories={JsonDataCategories} />
      </ContainerCategories>
      <Button onClick={() => setShowModal(true)}>
        <FaPlus />
      </Button>
      <CPModalCategory
        ShowModal={ShowModal}
        onShowModal={() => {
          setShowModal(!ShowModal)
        }}
        HookCreateCategoryAsync={HookCreateCategoryAsync}
        InitialDataCategoryAsync={InitialDataCategoryAsync}
      />
    </Container>
  )
}

export default PageCategories
