import { motion, AnimatePresence } from "framer-motion";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="mt-4 text-gray-500 text-center italic"
      >
        No todos for today yet.....
      </motion.p>
    );
  }

  return (
    <ul className="mt-10 space-y-4 md:w-3/4 mx-auto px-6 lg:w-1/2">
      <AnimatePresence>
        {todos.map((todo, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <TodoItem
              todo={todo}
              onToggle={() => onToggle(index)}
              onDelete={() => onDelete(index)}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
