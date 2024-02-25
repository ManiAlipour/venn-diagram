import styles from "./index.module.css"

const Header = () => {
    return (
      <nav className={`${styles.navBar}`}>
        <div>
          <span className={`${styles.brandName}`}>Venn Project</span>
        </div>
      </nav>
    );
  };
  
  export default Header;