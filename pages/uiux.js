import Link from 'next/link';
import { motion , AnimatePresence} from 'framer-motion';

export default function uiux() {
  return (
    <>
    <div class="uiux-container">
      <h1 class="text-white text-center">UI UX Portfolios</h1>
      <Link class="btn btn-primary m-3" href="/">Back</Link>
    </div>
    </>
  )
}