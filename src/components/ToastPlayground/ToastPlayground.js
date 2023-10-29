import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [toastMessage, setToastMessage] = React.useState( "" );
    const [toastVariant, setToastVariant] = React.useState( VARIANT_OPTIONS[0] );
    const [isOpen, setIsOpen] = React.useState( false );
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
        <Toast variant={toastVariant} isOpen={isOpen} setIsOpen={setIsOpen}>
            {toastMessage}
        </Toast>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={toastMessage} onChange={ (e) => setToastMessage( e.target.value) }/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
          {VARIANT_OPTIONS.map( option => (
            <label htmlFor={`variant-${option}`} key={option}>
              <input
                id={`variant-${option}`}
                type="radio"
                name="variant"
                value={option}
                selected={option === toastVariant }
                onChange={ (e) => setToastVariant( e.target.value ) }
              />
              {option}
            </label>
          ))}

          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={ () => { setIsOpen( true ) }}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
