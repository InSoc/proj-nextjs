import clsx from 'clsx';

import styles from './Header.module.scss'

function Header() {

  return (
    <>
      <header className= { clsx(styles.header) }>
        <div className= { clsx(styles.container) }>
          <h1> header </h1>
        </div>
      </header>
    </>
  )
}

export default Header;