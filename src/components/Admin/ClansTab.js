import CardTable from "components/Cards/CardTable.js";
import { motion } from "framer-motion";
export const ClansTab = () => (
  <motion.div
    className="col-span-2 lg:col-span-2"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <CardTable color="dark" title="Listado de usuarios" />
  </motion.div>
);