import Pokecard from './Pokecard'

const Pokedex = ({pokemon}) => {
    return (
        <>
        {pokemon.map(p => (
            <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
        ))}
        </>
    )
}

export default Pokedex;