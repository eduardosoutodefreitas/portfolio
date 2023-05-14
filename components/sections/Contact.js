import { VscFilePdf } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPerson } from "react-icons/md";
import CustomButton from "../CustomButton";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 font-primary text-primary px-40 flex items-center justify-center gap-20 tablet:px-20 tablet:flex-col"
    >
      <div>
        <p className="font-semibold text-xl font-special">
          Fale <span className="text-orange">comigo</span>
        </p>
        <h2 className="font-bold text-4xl my-3 font-special">Contato</h2>
        <p className="mb-6 w-3/4">
          Me mande um oi! Buscarei responder o mais rápido possível.
        </p>
        <div className="flex gap-x-14">
          <VscFilePdf size={28} cursor={"pointer"} color="#363636" />
          <FiGithub size={28} cursor={"pointer"} color="#363636" />
          <FaLinkedinIn size={28} cursor={"pointer"} color="#363636" />
        </div>
      </div>
      <form className="w-5/12 p-6 flex flex-col border rounded-sm shadow-lg min-w-[300px] tablet:w-4/5 smartphone:p-3 smartphone:min-w-[170px]">
        <fieldset className="relative">
          <label for="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Insira seu nome"
            className="placeholder:text-primary/70 smartphone:placeholder:text-sm outline-none w-full bg-gray-50 border  border-primary/70 rounded-md pl-9 py-1"
          />
          <MdPerson className="absolute left-3 bottom-2" size={20} />
        </fieldset>
        <fieldset className="relative my-3">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Insira seu email"
            className="placeholder:text-primary/70 smartphone:placeholder:text-sm outline-none w-full bg-gray-50 border  border-primary/70 rounded-md pl-9 py-1"
          />
          <MdEmail className="absolute left-3 bottom-2" size={20} />
        </fieldset>
        <fieldset className="mb-5">
          <label for="message">Mensagem</label>
          <textarea
            placeholder="Sua Mensagem"
            className="placeholder:text-primary/70 smartphone:placeholder:text-sm resize-none outline-none w-full bg-gray-50 border border-primary/70 rounded-md pl-3 py-1 h-24"
            id="message"
            name="Message"
            cols="40"
            rows="10"
            maxLength={200}
          ></textarea>
        </fieldset>
        <CustomButton fill={true} children={"Enviar"} />
      </form>
    </section>
  );
}

export default Contact;
