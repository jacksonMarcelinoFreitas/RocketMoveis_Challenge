import { Container, Profile } from './style';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from '../Input';

export function Header(){
   return(
        <Container>

            <h1>RocketMovies</h1>

            <Input icon={FiSearch} placeholder ="Pesquisar pelo título" type="text" >

            </Input>

            <Profile to="/profile">
                <div>
                    <strong>Jackson Freitas</strong>
                    <Link to="/">sair</Link>
                </div>
                <img src="https://github.com/jacksonMarcelinoFreitas.png" alt="foto do usuario" />
            </Profile>

        </Container>
    )
}