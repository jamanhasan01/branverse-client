import { motion } from "framer-motion";

const AnimatedBorderCard = ({
  children,
  borderWidth = "6px", // increased for visibility
  borderRadius = "16px",
  colors = ["#3ABEFF", "#2563EB", "#5EEAD4"], // better glowing combo
  duration = 6,
  className = "",
  contentClassName = "",
}) => {
  const gradientVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const gradientColors = colors.join(", ");

  return (
    <div
      className={`relative ${className}`}
      style={{
        borderRadius,
        padding: borderWidth,
      }}
    >
      {/* Glowing Layer */}
      <motion.div
        className="absolute inset-0  opacity-70 brightness-125 z-0"
        style={{
          background: `linear-gradient(90deg, ${gradientColors})`,
          backgroundSize: "300% 300%",
          borderRadius,
        }}
        variants={gradientVariants}
        animate="animate"
      />

      {/* Sharp Layer */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(90deg, ${gradientColors})`,
          backgroundSize: "300% 300%",
          borderRadius,
        }}
        variants={gradientVariants}
        animate="animate"
      />

      {/* Inner Content */}
      <div
        className={`relative bg-white z-20 ${contentClassName}`}
        style={{
          borderRadius,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorderCard;
