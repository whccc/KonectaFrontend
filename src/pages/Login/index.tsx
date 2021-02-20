import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { CPLogin } from '../../components/Login'
import { CPRegister } from '../../components/Register'
import { Container, ContainerCP } from '../../styles/PageLoginStyle'
import useUser from '../../hooks/useUser'
const PageLogin = (): JSX.Element => {
  const {
    HookCreateUserAsync,
    HookValidateEmailUserAsync,
    HookLoginUserAsync
  } = useUser()
  return (
    <Container>
      <ContainerCP>
        <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example">
          <Tab eventKey="Login" title="Login">
            <CPLogin HookLoginUserAsync={HookLoginUserAsync} />
          </Tab>
          <Tab eventKey="Registro" title="Registro">
            <CPRegister
              HookCreateUserAsync={HookCreateUserAsync}
              HookValidateEmailUserAsync={HookValidateEmailUserAsync}
            />
          </Tab>
        </Tabs>
      </ContainerCP>
    </Container>
  )
}
export default PageLogin
