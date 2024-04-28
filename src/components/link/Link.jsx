import ArrowIcon from '@mui/icons-material/ArrowForwardIos';
import { animate, motion } from "framer-motion";

const rotate = {
    initial: { rotate: 0 },
    animate: { rotate: 90 }
}

export default function Link(props) {
    return (
        <motion.a
            initial="initial"
            animate="initial"
            whileHover="animate"
            className="animLink text-[#9c27b0] font-semibold text-lg cursor-pointer" href={props.href}>
            {props.children}
            <motion.span
                variants={rotate}
                transition={{ duration: 0.5, type: "spring", stiffness: 500 }}
                className='text-sm ml-2 relative bottom-[1px]'>
                <ArrowIcon fontSize='smaller' />
            </motion.span>
        </motion.a>
    )
}