import React from 'react';
import styles from './HomePage.module.css'
import { Link } from 'react-router-dom';
import Container from 'components/Container/Container';


export default function HomePage() {
  return (
      <Container>
          <h1 className={styles.title}>
              Welcome!
              <br/>
              Please <Link to='/login' className={styles.link}>{'login'}</Link> or
              <Link to='/register' className={styles.link}>{' register'}</Link> to continue.
          </h1>
      </Container>
  )
};
