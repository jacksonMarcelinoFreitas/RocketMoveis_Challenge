import { Container} from './style';

export function Star({icon: Icon, ...rest}){
    return(
        <Container {...rest}>
            {Icon && <Icon size={14}/>}
        </Container>
    )
}

