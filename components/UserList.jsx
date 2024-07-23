// components/UserList.js

import { useState, useEffect } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    // Buscar usuários quando o componente é montado
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const deleteUser = async (id) => {
    await fetch("/api/users", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  const saveUser = async (user) => {
    await fetch("/api/users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    setUsers(users.map((u) => (u.id === user.id ? user : u)));
    setEditingUser(null);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">Lista de Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center mb-2">
            {editingUser?.id === user.id ? (
              <EditForm user={editingUser} saveUser={saveUser} />
            ) : (
              <>
                <span className="flex-1">
                  {user.name} - {user.email}
                </span>
                <div>
                  <button
                    className="btn btn-sm btn-secondary mr-2"
                    onClick={() => editUser(user)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => deleteUser(user.id)}
                  >
                    Excluir
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EditForm({ user, saveUser }) {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="input input-bordered"
        placeholder="Nome"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="input input-bordered"
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="input input-bordered"
        placeholder="Senha"
      />
      <button type="submit" className="btn btn-primary">
        Salvar
      </button>
    </form>
  );
}
