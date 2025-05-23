import React from "react";

function LoginPage() {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">Comece sua jornada</h1>
      <div className="w-max flex flex-col items-center justify-center border border-gray-600 rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4">Entrar</h1>
        <p>Faça login para começar sua jornada de aprendizado</p>
      </div>
    </div>
  );
}

export default LoginPage;
