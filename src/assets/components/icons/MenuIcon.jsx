const MenuIcon = (props) => {
  return (
    <>
      <svg 
      {...props}
      width="20" 
      height="14" 
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFF"
      fillRule="evenodd">
        <path
          d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
        />
      </svg>
    </>
  );
};

export default MenuIcon;
