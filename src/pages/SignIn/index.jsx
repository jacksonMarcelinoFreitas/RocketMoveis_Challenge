import { ButtonText } from '../../components/ButtonText';
import { Container, Background, Form } from './style';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
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
                    id="email"
                />
                <Input
                    placeholder = 'Senha'
                    type = 'password'
                    icon = {FiKey}
                    id="senha"
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