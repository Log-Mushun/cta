

const Plexus = () => {
  return (
    <div className="hidden lg:block">
      <video autoPlay={true} loop muted className="mix-blend-hard-light opacity-70">
        <source src="videos/plexusv3.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Plexus;
