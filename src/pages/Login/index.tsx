import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { CPLogin } from '../../components/Login'
import { CPRegister } from '../../components/Register'
import { Container, ContainerCP } from '../../styles/PageLoginStyle'
const PageLogin = (): JSX.Element => {
  return (
    <Container>
      <ContainerCP>
        <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example">
          <Tab eventKey="Login" title="Login">
            <CPLogin />
          </Tab>
          <Tab eventKey="Registro" title="Registro">
            <CPRegister />
          </Tab>
        </Tabs>
      </ContainerCP>
    </Container>
  )
}
export default PageLogin
