import { ButtonText } from '../../components/ButtonText';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { FiArrowLeft} from 'react-icons/fi';
import { Container, Form} from './style';

export function CreateMovie(){
    return(
        <Container>
            <Header />
            <main>
                <div className="container">
                    <div className="header-main">
                        <ButtonText icon={FiArrowLeft} title="voltar"/>
                        <h1>Novo Filme</h1>
                    </div>
                    <Form className='Form'>
                        <div className="box-input" >
                            <Input placeholder="Título"/>
                            <Input placeholder="Sua nota (de 0 a 5)"/>
                        </div>
                        < Textarea
                            placeholder="Observações"
                        />
                        <Section title="Marcadores">
                            <div className="box-tags">
                                <NoteItem value="React" className="noteItem"/>
                                <NoteItem isNew placeholder="Novo marcador" className="noteItem" />
                            </div>
                        </Section>
                        <div className="box-button">
                            <Button className="button-variance" title="Exluir filme" />
                            <Button title="Salvar alterações" />
                        </div>
                    </Form>
                </div>
            </main>
        </Container>
    )
}