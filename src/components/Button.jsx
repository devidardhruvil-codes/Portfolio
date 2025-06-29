const Button = ({ text, className, id, href, download }) => {
  const handleClick = (e) => {
    if (href && download) {
      // Allow default behavior for download links
      return;
    }
    e.preventDefault();
    const target = document.getElementById("counter");

    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a
      onClick={handleClick}
      className={`${className ?? " "} cta-wrapper`}
      href={href || "#"}
      download={download}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="down-arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
