function Services() {
  return (
    <section id="servicios" className="container py-5">
      <h2 className="section-title">Servicios y Productos</h2>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card card-rock p-3 h-100">
            <h4>Discos</h4>
            <p>Álbumes físicos y digitales.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card card-rock p-3 h-100">
            <h4>Merchandising</h4>
            <p>Playeras, posters y accesorios oficiales.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card card-rock p-3 h-100">
            <h4>Eventos en vivo</h4>
            <p>Presentaciones privadas y festivales.</p>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-dark table-bordered text-center">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Precio</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Disco Álbum</td>
              <td>CD edición especial</td>
              <td>$250 MXN</td>
            </tr>
            <tr>
              <td>Playera Oficial</td>
              <td>Merchandising</td>
              <td>$350 MXN</td>
            </tr>
            <tr>
              <td>Evento Privado</td>
              <td>Presentación en vivo</td>
              <td>$12,000 MXN</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Services;
