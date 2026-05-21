function About() {
  return (
    <section id="nosotros" className="container py-5">
      <h2 className="section-title">Sobre Nosotros</h2>

      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
            className="img-fluid rounded"
            alt="Banda de rock"
          />
        </div>

        <div className="col-md-6">
          <p>
            CansinoRock nace en Nopala de Villagrán, Hidalgo con la misión de
            mantener vivo el espíritu del rock clásico.
          </p>

          <p>
            La banda ha participado en festivales regionales, eventos culturales
            y conciertos privados llevando música de calidad y energía en vivo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
