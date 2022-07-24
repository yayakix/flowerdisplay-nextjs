import footerStyles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={footerStyles.footergrid}>
      <div className={footerStyles.footersection1}>section 1</div>
      <div className={footerStyles.footersection2}>section 2</div>
      <div className={footerStyles.footersection3}>section 3</div>
    </div>
  );
}
