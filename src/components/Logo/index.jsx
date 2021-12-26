const Logo = (props) => {
  const {className} = props

  const classes = 'Logo ' + (className || '');

  return (
    <a href='/' className={classes}>
      Logo
    </a>
  );
};

export default Logo;
