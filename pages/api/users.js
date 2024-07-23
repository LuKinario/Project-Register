// pages/api/users.js

let users = []; // Armazenamento em memória

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).json(users);
      break;

    case "POST":
      const newUser = req.body;
      users.push({ id: Date.now(), ...newUser });
      res.status(201).json({ message: "Usuário adicionado com sucesso!" });
      break;

    case "PUT":
      const { id, name, email, password } = req.body;
      users = users.map((user) =>
        user.id === id ? { ...user, name, email, password } : user
      );
      res.status(200).json({ message: "Usuário atualizado com sucesso!" });
      break;

    case "DELETE":
      const userId = req.body.id;
      users = users.filter((user) => user.id !== userId);
      res.status(200).json({ message: "Usuário removido com sucesso!" });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
