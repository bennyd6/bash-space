import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import "./team.css";

export default function Team({ members, autoplay = false }) {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % members.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + members.length) % members.length);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="team-container">
      <div className="team-grid">
        <div className="team-image">
          <AnimatePresence>
            {members.map((member, i) =>
              i === active ? (
                <motion.img
                  key={member.src}
                  src={member.src}
                  alt={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="team-photo"
                />
              ) : null
            )}
          </AnimatePresence>
        </div>
        <div className="team-text">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{members[active].name}</h3>
            <p className="designation">{members[active].designation}</p>
            <div className="quote">
              {members[active].quote.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ filter: "blur(8px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
                  transition={{ delay: 0.02 * i }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </div>
          </motion.div>
          <div className="team-buttons">
            <button onClick={handlePrev}>
              <IconArrowLeft size={20} />
            </button>
            <button onClick={handleNext}>
              <IconArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
