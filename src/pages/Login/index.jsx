import { styled } from "styled-components";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import {useState} from "react";

        
        
const LoginContainer = styled.section``;

const Login = () => {

    const[ visiblePassword, setVisiblePassword] = useState(false);

  return (
    <LoginContainer className="h-screen flex justify-content-center align-items-center surface-500 p-3 md:p-0">
      <form className="w-12 md:w-4 surface-0 p-3 border-round-sm">
        <h3>Seja bem-vindo</h3>
        
        <InputText 
        type="e-mail"
        className="w-full mb-3"
        placeholder="email@email.com"/>
        
        <IconField inconPosition="right" className="mb-4">  
        <InputIcon 
        onClick={() => setVisiblePassword(!visiblePassword)}
        className={`pi ${visiblePassword ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}/>

        <InputText 
        type={visiblePassword ? 'text' : 'password'}
        className="w-full"
        placeholder="password"
        maxLength="10"/>
        </IconField>
      
        
        <Button
        type="Submit"
        label="Entrar"
        className="w-full"/>
        

      </form>
    </LoginContainer>
  );
};

export default Login;
