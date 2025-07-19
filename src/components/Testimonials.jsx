import { useState, useRef } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
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

  const testimonials = [
    {
      name: "John Doe",
      title: "Frontend Developer",
      message: "Integrating this component was seamless. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      name: "Jane Smith",
      title: "Full Stack Engineer",
      message: "Improved our UI consistency across the board.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      name: "Bonnie Green",
      title: "UX Designer",
      message: "Intuitive and flexible design. Rapid prototyping made easy.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    },
  ];

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
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white w-full px-6 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="flex flex-wrap items-center justify-center gap-6 py-16">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            variants={fadeInUp}
            custom={index + 2}
            className="relative border border-gray-200 rounded-lg overflow-hidden max-w-sm hover:shadow-lg transition-shadow duration-300"
          >
            {tooltip.visible && tooltip.text === testimonial.name && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute px-2.5 py-1 text-sm rounded text-nowrap bg-indigo-500 text-white pointer-events-none"
                style={{ top: tooltip.y + 8, left: tooltip.x + 8 }}
              >
                {tooltip.text}
              </motion.span>
            )}

            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-4 text-gray-500">
                <h3 className="text-lg font-semibold text-gray-900">
                  Very easy to integrate
                </h3>
                <p className="my-4 text-sm line-clamp-3">
                  {testimonial.message}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="rounded-full w-9 h-9"
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                />
                <div className="space-y-0.5 font-medium text-left ml-3">
                  <p>{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
