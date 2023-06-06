import { Container } from './style';
import { Tag } from '../Tag';
import { Star } from '../../components/Star';
import { IoMdStarOutline, IoMdStar } from 'react-icons/io';
import { TbClockHour3 } from 'react-icons/tb';



export function Note({data, ...rest}){
    let {stars} = data;
    let {screen} = data;
    let emptyStar = 0;

    if(stars !== 5){
        emptyStar = 5 - stars;
    }

    return(
        <Container {...rest}>
            <div className='box-title-stars'>
                <h1>{data.title}</h1>
                <div>
                    {Array.from({ length: stars }).map((_, index) => (
                        <Star className="star" key={index} icon={IoMdStar} />
                    ))}
                    {Array.from({ length: emptyStar }).map((_, index) => (
                        <Star className="star" key={index} icon={IoMdStarOutline} />
                    ))}
                </div>
            </div>

            {/*renderização condicional por tela*/}
            {
                screen === 2 && (
                <div className='box-user-time'>

                    <div className='box-user'>
                        <div className='avatar'>
                            <img
                                src="https://github.com/jacksonMarcelinoFreitas.png"
                                alt="Foto do Usuário">
                            </img>
                        </div>
                        <p>Por {data.user}</p>
                    </div>

                    <div className='box-time'>
                        { <TbClockHour3 className='icon-time' /> }
                        <p>{data.time}</p>
                    </div>

                </div>
            )}

            <div className="box-desc-tag">
                <p>{data.description}</p>
                {
                    data.tags &&
                    <footer>
                        {
                            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                        }
                    </footer>
                }
            </div>

        </Container>
    )
}

// Propriedades de dados:

// data: Um objeto contendo dados relevantes para o componente.
// items: Uma lista de itens a serem renderizados.
// text: Uma string de texto para exibição.
// Propriedades de eventos:

// onClick: Uma função a ser executada quando o componente é clicado.
// onSubmit: Uma função a ser executada quando um formulário é submetido.
// onChange: Uma função a ser executada quando o valor de um campo de entrada é alterado.
// Propriedades de estilos:

// className: Uma classe CSS a ser aplicada ao componente.
// style: Um objeto contendo estilos em linha para o componente.
// Propriedades booleanas:

// isActive: Um valor booleano para indicar o estado ativo do componente.
// isVisible: Um valor booleano para indicar se o componente deve ser exibido ou oculto.
