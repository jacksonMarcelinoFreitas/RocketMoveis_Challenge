import { Header } from '../../components/Header';
import { Container, Content } from './style';
import { Note } from '../../components/Note';


export function Home(){
    return(
        <Container>
            <Header />
            
            <Content>
                <Note 
                data={
                        {
                            title: 'Interestellar',
                            tags:[
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