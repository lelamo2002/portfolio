import { motion } from "framer-motion";

interface ICheckboxProps {
  label: string;
  icon?: string;
  checked: boolean;
  onChange: () => void;
}

export default function Checkbox({
  label,
  checked,
  onChange,
  icon,
}: ICheckboxProps) {
  return (
    <div className="flex items-center gap-3 cursor-pointer" onClick={onChange}>
      {/* Custom Checkbox */}
      <motion.div
        className={`w-5 h-5 border-2 border-secondary-grey rounded-sm ${
          checked ? "bg-secondary-grey" : "bg-transparent"
        }`}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        {checked && (
          <motion.i
            className="ri-check-line text-white text-lg flex items-center justify-center leading-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>

      {/* Label */}
      <div className="flex flex-row items-center gap-2 cursor-pointer">
        {icon && (
          <i
            className={`${icon} ${
              checked ? "opacity-100" : "opacity-50"
            } text-secondary-grey text-2xl leading-none`}
          ></i>
        )}
        <p
          className={` ${
            checked ? "text-secondary-white" : "text-secondary-grey"
          } text-base`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
