const HeroBanner = ({img, alt, text, title}) => {
  return (
    <section className="banner">
      <div className="banner-hero mt-3 text-center-sm text-center-md">
        <img src={img} alt={alt} title={title} crossOrigin="true"/>
      </div>
      <div className="banner-text hide-sm text-center-md">
        <h2>
          {text}
        </h2>
      </div>
    </section>
  )
}

export default HeroBanner
