import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsSend } from "react-icons/bs";
import { Toaster, toast } from "sonner";

const Contact = () => {
  const form = useRef();

  const servicesId = import.meta.env.VITE_SERVICES_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(servicesId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    toast.success("Sent message!");
    e.target.reset();
  };

  return (
    <section className="container" id="contact">
      <Toaster richColors />
      <h2>Contact me</h2>
      <div className="container__contact">
        <div className="container__card">
          <article className="card__contact">
            <h3 className="card__title">
              <MdOutlineAlternateEmail />
              Email
            </h3>
            <h4>arielstereo@msn.com</h4>
            <a
              href="mailto:arielstereo@msn.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message <BsSend />
            </a>
          </article>
          <article className="card__contact">
            <h3 className="card__title">
              <BsWhatsapp />
              WhatsApp
            </h3>
            <h4>+54 11 26922128</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+1126922128"
              target="_blank"
              rel="noreferrer"
            >
              Send a message <BsSend />
            </a>
          </article>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="">Full name</label>
            <input type="text" name="name" placeholder="Full name" required />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
            <label>Send message</label>
            <textarea
              name="message"
              rows="10"
              placeholder="Send message"
              required
            ></textarea>
            <button type="submit" className="btn__primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
