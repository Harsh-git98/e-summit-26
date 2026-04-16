import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface UnstopCTAProps {
  href: string;
  className?: string;
  isExternal?: boolean;
}

const UnstopCTA = ({ href, className, isExternal = true }: UnstopCTAProps) => {
  const content = (
    <>
      <span className="font-bold tracking-tight uppercase">Register Now</span>
      <img
        src="https://res.cloudinary.com/diq6oo9ue/image/upload/q_auto/f_auto/v1775943637/unstop-logo_ihonix.svg"
        alt="Unstop"
        className="h-5 md:h-7 object-contain ml-2"
      />
    </>
  );

  const baseStyles = cn(
    "inline-flex items-center justify-center gap-1.5 px-6 py-3 md:px-8 md:py-4",
    "bg-[#fefefe] text-[#111111] rounded-full",
    "font-heading text-sm md:text-base transition-all duration-300",
    "shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]",
    "hover:scale-[1.02] active:scale-[0.98]",
    className
  );

  if (isExternal) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link to={href} className={baseStyles}>
        {content}
      </Link>
    </motion.div>
  );
};

export default UnstopCTA;
