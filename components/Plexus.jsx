

const Plexus = () => {
  return (
    <div className="w-screen h-screen">
      <video autoPlay={true} loop muted>
        <source src="videos/plexus.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Plexus;
