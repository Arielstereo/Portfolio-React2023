import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { motion } from "framer-motion";

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
      <h4>Send me a message</h4>
      <div className="container__contact">
        <div className="container__card">
          <GlowCapture>
            <Glow>
              <a
                href="mailto:arielstereo@msn.com"
                target="_blank"
                rel="noreferrer"
              >
                <article className="card__contact">
                  <h3 className="card__title">
                    <MdOutlineAlternateEmail />
                    Email
                  </h3>
                  <h4>arielstereo@msn.com</h4>
                </article>
              </a>
            </Glow>
          </GlowCapture>
          <GlowCapture>
            <Glow>
              <a
                href="https://api.whatsapp.com/send?phone=1126922128"
                target="_blank"
                rel="noreferrer"
              >
                <article className="card__contact2">
                  <h3 className="card__title">
                    <BsWhatsapp />
                    WhatsApp
                  </h3>
                  <h4>+54 11 26922128</h4>
                </article>
              </a>
            </Glow>
          </GlowCapture>
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
            <motion.button
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ ease: "backInOut", duration: 1 }}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              type="submit"
              className="btn__contact"
            >
              SEND
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
