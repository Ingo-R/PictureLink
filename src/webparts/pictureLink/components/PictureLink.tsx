import * as React from 'react';
import styles from './PictureLink.module.scss';
import { IPictureLinkProps } from './IPictureLinkProps';
export default class PictureLink extends React.Component<IPictureLinkProps,  {}> {
  public render(): React.ReactElement<IPictureLinkProps> {
    const bildURL: string  = this.props.linkBild;
    const clickAufBild = () => {
      window.open(this.props.linkZiel);
    };
    return (
      <div className={styles.pictureLink}>
        <div className={styles.container}>
              <div>
                <span className={styles.name}>{this.props.name}</span>
                <div className={styles.bild}>
                  <img alt='Bild' onClick={() => clickAufBild()} src={bildURL} />
                </div>
                <div className={styles.beschreibung}>
                  {this.props.beschreibung}
                </div>
              </div>
            </div>
          </div>
    );
  }
}