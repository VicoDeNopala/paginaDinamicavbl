import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarWhatsApp = (e) => {
    e.preventDefault();

    const telefono = "5217121624097";

    const texto = `
Hola CansinoRock 🎸

Nombre: ${form.nombre}
Correo: ${form.correo}

Mensaje:
${form.mensaje}
`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="container py-5">
      <h2 className="section-title">Contacto</h2>

      <form onSubmit={enviarWhatsApp} className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            placeholder="Correo"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="col-12">
          <button className="btn btn-success">Enviar por WhatsApp</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
