import { Header } from '../../components/Header';
import { Container, Content, AddFilme } from './style';
import { Note } from '../../components/Note';
import { Button } from '../../components/Button';
import { FiPlus } from 'react-icons/fi';

export function Home(){
    return(
        <Container>
            <Header />

            <AddFilme>
                    <h1>Meus filmes</h1>
                    <Button icon={FiPlus} title='Adicionar filme'/>
            </AddFilme>

            <Content>
                    <Note data={
                            {
                                title: 'Interestellar',
                                stars: 0,
                                description:
                                'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de ',
                                tags:
                                [
                                    {id: '1', name: 'Ficão Cientifica'},
                                    {id: '2', name: 'Drama'},
                                    {id: '3', name: 'Família'},
                                ]
                            }
                        }
                    />
                    <Note data={
                            {
                                title: 'Iron Men',
                                stars: 0,
                                description:
                                'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de ',
                                tags:
                                [
                                    {id: '1', name: 'Ficão Cientifica'},
                                    {id: '2', name: 'Drama'},
                                    {id: '3', name: 'Família'},
                                ]
                            }
                        }
                    />
                    <Note data={
                            {
                                title: 'Go to live',
                                stars: 5,
                                description:
                                'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de ',
                                tags:
                                [
                                    {id: '1', name: 'Ficão Cientifica'},
                                    {id: '2', name: 'Drama'},
                                    {id: '3', name: 'Família'},
                                ]
                            }
                        }
                    />
            </Content>
        </Container>
    )
};