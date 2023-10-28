import styles from './BlockColor.module.scss';
import cl from 'classnames';

export const BlockColor = () => {
  console.log();
  return (
    <div className={styles.blockColor}>
      <div className={cl(styles.day, styles.days)}>
        <span>В день</span>
      </div>
      <div className={cl(styles.night, styles.days)}>
        <span>В ночь</span>
      </div>
    </div>
  );
};
