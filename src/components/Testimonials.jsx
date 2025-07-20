import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const testimonials = [
  {
    name: "John Doe",
    title: "Frontend Developer",
    message:
      "This component has greatly improved our development speed and efficiency. The documentation was clear and easy to follow.",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    name: "Jane Smith",
    title: "Full Stack Engineer",
    message:
      "This solution not only simplified our workflow but also improved our UI consistency across the board. Excellent tool for modern teams.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    name: "Bonnie Green",
    title: "UX Designer",
    message:
      "I was impressed with how intuitive and flexible the design was. It allowed us to rapidly prototype and launch features with confidence.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
  },
];

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: 40,
    x: i % 2 === 0 ? -40 : 40,
    scale: 0.95,
  }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Testimonials = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const bounds = cardRefs.current[index].getBoundingClientRect();
    setTooltip({
      visible: true,
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
      text: testimonials[index].name,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <section className="py-6 bg-gray-50 w-full">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-0">
        What Our Guests Say
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
        Real feedback from guests who have stayed at Hotel Bliss.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 px-6">
        {testimonials.map((testimonial, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={false}
          >
            <motion.div
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              className="relative bg-white border border-gray-200 rounded-xl overflow-hidden max-w-sm w-full p-8 text-center transition-all duration-300"
            >
              {/* Tooltip */}
              {tooltip.visible && tooltip.text === testimonial.name && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute px-2.5 py-1 text-sm rounded bg-indigo-600 text-white pointer-events-none z-50"
                  style={{ top: tooltip.y + 8, left: tooltip.x + 8 }}
                >
                  {tooltip.text}
                </motion.span>
              )}

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {testimonial.message.slice(0, 40)}...
              </h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                {testimonial.message}
              </p>
              <div className="flex items-center justify-center mt-4">
                <img
                  className="rounded-full w-10 h-10"
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                />
                <div className="text-left ml-3">
                  <p className="text-sm font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
