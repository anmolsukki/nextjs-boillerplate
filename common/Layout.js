const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <p className="header">Header Components</p>
      </header>
      {children}
      <footer className="footer">&copy; {new Date().getFullYear()}</footer>

      <style jsx>{`
        header {
          width: 100%;
          display: flex;
          justify-content: space-around;
          padding: 1em;
          font-size: 1.2rem;
          background: indigo;
        }
        footer {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 1em;
          font-size: 1.2rem;
          background: tomato;
        }
      `}</style>
    </div>
  );
};

export default Layout;
