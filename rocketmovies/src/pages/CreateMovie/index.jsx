import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { FiArrowLeft} from 'react-icons/fi';
import { Container, Form} from './style';

export function CreateMovie(){
    return(
        <Container>
            <Header />

            <main>
                <div>
                    <ButtonText icon={FiArrowLeft} title="voltar"/>
                    <h1>Novo Filme</h1>
                </div>
                
                <Form>
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                    < Textarea 
                        placeholder="Observações"
                        // value={'Texte de valor aqui!'}
                    />

                    <Section title="Marcadores">
                        <div class="box-tags">
                            <NoteItem value="React" />
                            <NoteItem isNew placeholder="Novo marcador" />
                        </div>
                    </Section>

                    <Button title="Exluir filme" />
                    <Button title="Salvar alterações" />
                    
                </Form>
            </main>
        </Container>
    )
}