import { useEffect, useState } from "react";
import API from "../services/api";

function FansCRUD() {
  const [fans, setFans] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [editingId, setEditingId] = useState(null);

  const getFans = async () => {
    const response = await API.get("fans/");
    setFans(response.data);
  };

  useEffect(() => {
    getFans();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await API.put(`fans/${editingId}/`, form);
      setEditingId(null);
    } else {
      await API.post("fans/", form);
    }

    setForm({ name: "", email: "", message: "" });
    getFans();
  };

  const handleEdit = (fan) => {
    setEditingId(fan.id);
    setForm(fan);
  };

  const handleDelete = async (id) => {
    await API.delete(`fans/${id}/`);
    getFans();
  };

  return (
    <section className="container py-5">
      <h2 className="section-title">Registro de Fans</h2>

      <form onSubmit={handleSubmit} className="mb-5">
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Correo"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="message"
              placeholder="Mensaje"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button className="btn btn-danger mt-3">
          {editingId ? "Actualizar" : "Registrar"}
        </button>
      </form>

      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Mensaje</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {fans.map((fan) => (
              <tr key={fan.id}>
                <td>{fan.name}</td>
                <td>{fan.email}</td>
                <td>{fan.message}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(fan)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(fan.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default FansCRUD;
