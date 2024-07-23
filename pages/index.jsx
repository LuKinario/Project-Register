// pages/index.js

import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import UserList from "../components/UserList";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Home() {
  const [reloadUsers, setReloadUsers] = useState(false);

  const handleUserAdded = () => {
    setReloadUsers(!reloadUsers);
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center p-4">
      <ThemeSwitcher />
      <RegisterForm onUserAdded={handleUserAdded} />
      <UserList key={reloadUsers} />
    </div>
  );
}
