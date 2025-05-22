import React from "react";

function Footer() {
  return (
    <div className="bg-[#141416] border-t border-[#3f3f46] py-10">
      <div className="container mx-auto">
        <p className="text-center text-gray-400">
          &copy;
          {" "}
          {new Date().getFullYear()}
          {" "}
          GlossaryUP. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default Footer;
