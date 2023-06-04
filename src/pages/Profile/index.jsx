import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft  } from 'react-icons/fi';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Form, Avatar } from './style';

export function Profile(){
    return(
     <Container>
        <header>
            <ButtonText icon={FiArrowLeft} title="Voltar"/>
        </header>
            <main>
                <Avatar>
                    <img
                        src="https://github.com/jacksonMarcelinoFreitas.png"
                        alt="Foto do Usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>
                <Form>
                    <div className="box-input">
                        <Input type="text" icon={FiUser}  placeholder="Nome"/>
                        <Input type="e-mail" icon={FiMail}  placeholder="jacksonzitap.mc@gmail.com"/>
                    </div>
                    <div className="box-input">
                        <Input type="password" icon={FiLock}  placeholder="Senha atual"/>
                        <Input type="password" icon={FiLock}  placeholder="Nova senha"/>
                        <Button title="Salvar"/>
                    </div>
                </Form>
            </main>
     </Container>
    )
}
