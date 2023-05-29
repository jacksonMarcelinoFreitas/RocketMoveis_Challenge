import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Tags } from './style';

export function CreateMovie(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <div>
                        <ButtonText icon={FiArrowLeft}/>
                        <h1>Novo Filme</h1>
                    </div>
                
                    <div>
                        <Input />
                        <Input />
                    </div>

                    <Input />

                    <h2>Marcadores</h2>

                    <Tags>
                        <Input />
                    </Tags>
                </Form>
            </main>
        </Container>
    )
}