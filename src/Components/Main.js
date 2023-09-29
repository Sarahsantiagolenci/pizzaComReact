import { useState } from "react";

export default function Main() {
  const [ImagemPizza, setImagemPizza] = useState();

  const [Sabor, setSabor] = useState();

  const Pizza1 = () => {
    setImagemPizza("https://encurtador.com.br/afnvZ");
    setSabor("La cuma");
  };
  const Pizza2 = () => {
    setImagemPizza("https://encurtador.com.br/lrzL8");
    setSabor("La menta");
  };
  const Pizza3 = () => {
    setImagemPizza("https://encurtador.com.br/fhwU3");
    setSabor("La bana");
  };

  return (
    <main>
      <h2>Escolha seu sabor</h2>
      <div>
        <img src={ImagemPizza} alt="" />
        <h3>{Sabor}</h3>
      </div>

      <section>
        <figure>
          <img src="https://encurtador.com.br/afnvZ" alt="La cuma" />
          <figcaption>La cuma</figcaption>
          <button onClick={Pizza1}>Comprar</button>
        </figure>

        <figure>
          <img src="https://encurtador.com.br/lrzL8" alt="La menta" />
          <figcaption>La menta</figcaption>
          <button onClick={Pizza2}>Comprar</button>
        </figure>

        <figure>
          <img src="https://encurtador.com.br/fhwU3" alt="La bana" />
          <figcaption>La bana</figcaption>
          <button onClick={Pizza3}>Comprar</button>
        </figure>
      </section>
    </main>
  );
}
