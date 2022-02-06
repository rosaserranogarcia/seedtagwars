import '../styles/layout/footer.css';

const Footer = () => {
  return (
    <>
  <div className='footer  footer-bottom'>
    <p className='text-xs-center'>
    &copy;{new Date().getFullYear()} Rosa Serrano
    </p>

  </div>
    </>
  );
};
export default Footer;