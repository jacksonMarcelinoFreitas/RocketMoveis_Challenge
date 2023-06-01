import { Container, Background, Form } from './style';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { FiMail, FiKey } from "react-icons/fi";

export function SignIn(){
    return(
        <Container>
            <Form>
                <div>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                    <h2>Faça seu login</h2>
                </div>
                <Input 
                    placeholder = 'E-mail'
                    type = 'email'
                    icon = {FiMail}
                />
                <Input 
                    placeholder = 'Senha'  
                    type = 'password'
                    icon = {FiKey}
                />
                <Button 
                    title = 'Entrar' 
                />
                <ButtonText 
                    title = 'Criar conta'
                />
            </Form>
            <Background />
        </Container>
    )
}