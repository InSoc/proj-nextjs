- install: 
  - babel-plugin-module-resolver: config path: ~ -> ../../ --> .babelrc
  - update file: jsconfig.json
  - customize-cra -> config-overrides.js

- install sass



- Step1: using 2 or more classes inside element: 
  className= {[styles.classname1, styles.classname2].join(' ')}
  className= {`${styles.classname1} ${styles.classname2}`}

- using clsx $ npm install --save clsxS
  className= { clsx(styles.classname1, styles.classname2, styles.classname3) }