import { Link } from '@/components/ui/link'
import s from './footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={s.footer}>
      <Link className={s.brand} href="/">
        Atelier R.J.
      </Link>
      <p className={s.copyright}>
        &copy; {year} Atelier R.J. All rights reserved.
      </p>
    </footer>
  )
}
