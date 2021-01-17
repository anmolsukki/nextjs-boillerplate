export default function Custom404() {
  return (
    <div className="notFound">
      <section className="error">
        <div className="content">
          <canvas className="snow" id="snow" />
          <div className="main-text">
            <h1>
              <div>We couldn’t find the page you’re looking for.</div>
              <div className="subtext">
                <div className="subtextsub">You may have clicked the wrong link or mistyped the address. Please use the links below.</div>
              </div>
            </h1>
            <div>
              <a className="button" href="/">
                <span>Go Back to Home</span>
              </a>
            </div>
            <div className="ground">
              <div className="mound">
                <div className="mound_text">404</div>
                <div className="mound_spade" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
