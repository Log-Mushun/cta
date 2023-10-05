import Languages from "./Languages/Languages";

const AirportsFooter = () => {
    return (
       <div className="bg-transparent flex flex-col z-30 experience_footer fixed bottom-1 " style={{zIndex:1000}}>
  <div className="flex flex-row justify-between pl-14 pb-5 align-center">
    <div className="flex flex-row align-center justify-center">
      <h3 className="row_text_small">Credits</h3>
      <h3 className="row_text_small">Privacy policy</h3>
      <h3 className="row_text_small">Cookies Settings</h3>
      <Languages />
    </div>
    <div className="flex flex-row pr-12 fixed right-5">
      <h2 className="row_text_big">Facebook</h2>
      <h2 className="row_text_big">Instagram</h2>
    </div>
  </div>
</div>


    );
};

export default AirportsFooter;