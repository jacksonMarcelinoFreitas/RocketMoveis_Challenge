import { FiUser, FiMail, FiLock, FiCamera  } from 'react-icons/fi';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Form } from './style';

export function Profile(){
    return(
     <Container>
        <header>
            <ButtonText />
        </header>
            <main>
            <div className='profile'>
                <img src=''></img>
                <div className='icon-camere'>
                    {FiCamera}
                </div>
            </div>
            <Form>
                <Input icon={FiUser}  value="Jackson Freitas"/>
                <Input icon={FiMail}  value="jacksonzitap.mc@gmail.com"/>
                <Input icon={FiLock}  placeholder="Senha atual"/>
                <Input icon={FiLock}  placeholder="Nova senha"/>
                <Button title="Salvar"/>
            </Form>
        </main>
     </Container>
    )
}
