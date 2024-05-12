import styles from './no-info.module.css';

export type NoInfoProps = {
  message?: string;
};

export const NoInfo = ({ message = '' }: NoInfoProps) => (
  <div className={styles.noInfo}>{message ? message : 'No info loaded...'}</div>
);
