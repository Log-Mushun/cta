

const Plexus = () => {
  return (
    <div className="hidden lg:block">
      <video autoPlay={true} loop muted className="h-screen mix-blend-hard-light opacity-70 z-0">
        <source src="videos/plexusv3.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Plexus;
