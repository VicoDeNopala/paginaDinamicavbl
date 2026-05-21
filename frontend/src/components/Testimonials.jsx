function Testimonials() {
  return (
    <section className="container py-5">
      <h2 className="section-title">Testimonios</h2>

      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card card-rock p-5 text-center">
              <h4>"La mejor banda regional de rock clásico"</h4>
              <p>— Revista Hidalgo Musical</p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card card-rock p-5 text-center">
              <h4>"Una experiencia inolvidable en vivo"</h4>
              <p>— Fan destacado</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
