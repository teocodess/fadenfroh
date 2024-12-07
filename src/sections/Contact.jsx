import emailjs from '@emailjs/browser';
import { galery1, a, c, n, o, t } from '../assets';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { arrowRight } from '../assets';
import { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();  // Create a reference for the form
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);  // Track submission status

  const sendEmail = (e) => {
    e.preventDefault();  // Prevent the default form submission
    navigate('/thankyou'); // Navigate to the "Thank You" page after success

    emailjs
      .sendForm(
        'service_lwa83ws',  // Your EmailJS service ID
        'template_u95754r', // Your EmailJS template ID
        form.current,       // Reference to the form
        '40PI2JSEdNcCF1Sj-' // Your EmailJS public key
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);  // Mark as successfully submitted
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="max-container flex flex-col justify-center md:h-screen w-[90%]">
      <div className="flex flex-col md:flex-row justify-center items-center w-full mb-7 border-2 border-[#212121]">
        <img src={galery1} className="object-cover md:h-full md:w-1/2" />

        <div className="flex flex-col justify-center items-center gap-10 md:w-[50%]">
          <div className="flex flex-row sm:w-[25px] md:w-[50px] items-center w-full justify-center">
            <img src={c} width="50px" />
            <img src={o} width="50px" />
            <img src={n} width="50px" />
            <img src={t} width="50px" />
            <img src={a} width="50px" />
            <img src={c} width="50px" />
            <img src={t} width="50px" />
          </div>

          <form
            ref={form}  // Attach form reference
            onSubmit={sendEmail}  // Attach the sendEmail function to form submission
            className="flex flex-col justify-center items-center gap-2 w-full mb-10"
          >
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="What's your name?"
              className="border-2 p-3 w-full md:w-3/4"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="E-Mail address"
              className="border-2 p-3 w-full md:w-3/4"
            />
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Drop me a line..."
              className="border-2 p-3 w-full md:w-3/4"
            />

            <Button
              label="Send"
              type="submit"  // Use type="submit" to trigger form submission
              iconURL={arrowRight}
            />
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
