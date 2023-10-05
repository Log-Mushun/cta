const Plexus = (props) => {
  if(props.isStart){
    return (
      <div className="hidden lg:block">
        <video autoPlay={true} loop muted className="h-screen opacity-70 fixed left-0 top-0 z-0">
          <source src="videos/plexusv3.webm" type="video/webm" />
        </video>
      </div>
    );
  }else{
    return (
      <div className="hidden lg:block fixed inset-0 w-full h-full z-10 bg-gradient-radial-a">
        <video autoPlay={true} loop muted className="h-screen opacity-70 z-[100] fixed">
          <source src="../videos/plexusv3.webm" type="video/webm" />
        </video>
      </div>
    );
  }
};

export default Plexus;
