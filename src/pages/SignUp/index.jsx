import { FiMail, FiKey, FiUser, FiArrowLeft } from "react-icons/fi";
import { ButtonText } from '../../components/ButtonText';
import { Container, Background, Form } from './style';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignUp(){
    return(
        <Container>
            <Form>
                <div>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                    <h2>Faça seu login</h2>
                </div>
                <Input
                    placeholder = 'Nome'
                    type = 'text'
                    icon = {FiUser}
                    id="nome"
                />
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
                    title = 'Cadastrar'
                />
                <ButtonText to="/"
                    icon = {FiArrowLeft}
                    title = 'Voltar para o login'
                />
            </Form>
            <Background />
        </Container>
    )
}