import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { galery1, a, c, n, o, t } from '../assets';
import Confetti from 'react-confetti';

const Contact = () => {
  const form = useRef();
  const contactRef = useRef(); // Reference for the contact section
  const [showConfetti, setShowConfetti] = useState(false); // State to show confetti
  const [confettiDimensions, setConfettiDimensions] = useState({ width: 0, height: 0 }); // State to store confetti dimensions
  const [confettiPosition, setConfettiPosition] = useState({ x: 0, y: 0 }); // State to store confetti position
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lwa83ws', 'template_u95754r', form.current, {
        publicKey: '40PI2JSEdNcCF1Sj-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);

          // Get the position and dimensions of the contact section
          if (contactRef.current) {
            const { width, height, top, left } = contactRef.current.getBoundingClientRect();
            // Adjust confetti position relative to the page scroll position
            setConfettiDimensions({ width, height });
            setConfettiPosition({ x: left + window.scrollX, y: top + window.scrollY });
          }

          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  useEffect(() => {
    if (contactRef.current) {
      const { width, height } = contactRef.current.getBoundingClientRect();
      setConfettiDimensions({ width, height });
    }
  }, [contactRef]);

  return (
    <section className="max-container flex flex-col justify-center min-h-screen md:h-screen w-[90%]" ref={contactRef}>
      <div className="flex flex-col md:flex-row justify-center items-center w-full mb-10 border-2 border-[#212121]">
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

          {!isSubmitted ? (
            <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center gap-2 w-full mb-10">
              <label>Name</label>
              <input type="text" name="user_name" placeholder="What's your name?" className="border-2 p-3 w-full md:w-3/4" />
              <label>Email</label>
              <input type="email" name="user_email" placeholder="E-Mail address" className="border-2 p-3 w-full md:w-3/4" />
              <label>Message</label>
              <textarea name="message" placeholder="Drop me a line..." className="border-2 p-3 w-full md:w-3/4" />
              <button
                className="flex justify-center items-center gap-2 px-10 py-2.5 mt-2.5 font-montserrat text-base leading-none text-[#212121] border-2 border-[#212121]"
                type="submit"
              >
                Send
              </button>
            </form>
          ) : (
            <div className="flex flex-col justify-center items-center gap-5 mb-5">
              {showConfetti && (
                <Confetti
                  width={confettiDimensions.width} // Confetti width based on section width
                  height={confettiDimensions.height} // Confetti height based on section height
                  numberOfPieces={200}
                  recycle={false}
                  gravity={0.3}
                  colors={['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd']}
                  confettiSource={{
                    x: confettiPosition.x, // Confetti position relative to the viewport
                    y: confettiPosition.y,
                    w: confettiDimensions.width,
                    h: confettiDimensions.height,
                  }}
                />
              )}
              <h2 className="text-2xl font-bold text-center">Great, thank you for your email!</h2>
              <p className="text-center">Your email has been successfully sent.</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-start flex-col md:flex-row justify-between w-full font-bodoni-moda text-[#6d6d6d]">
        <h1>
          <a href="#home">fadenfroh</a>
        </h1>
        <p>All rights reserved. @2024</p>
        <p>Policy Privacy</p>
      </div>
    </section>
  );
};

export default Contact;
