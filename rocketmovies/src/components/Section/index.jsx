import {Container} from './style'

export function Section({title, children}){
    return(
        <Container>
            <h2>{ title }</h2>
            { children } //tags filhas que estarão dentro
        </Container>
    )
}