import Card from "./Card";

// se necesita recibir un listado de tarjetas
const Cards = ({ cards }) => {
  return (
    <div className="">
      <h2>Lista de Tarjetas</h2>
      {cards.map((card) => (
        // falta asignar un id para las tarjetas
        <Card key={card.id} cardName={card.name} id={card.id} />
      ))}
    </div>
  );
};

export default Cards;
