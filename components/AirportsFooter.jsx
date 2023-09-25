const AirportsFooter = () => {
    return (
        <div className="bg-transparent flex flex-col z-20">
            <div className="flex flex-row justify-between pl-14 pb-5">
                <div className="flex flex-row">
                    <h3 className="row_text_small">Credits</h3>
                    <h3 className="row_text_small">Privacy policy</h3>
                    <h3 className="row_text_small">Cookies Settings</h3>
                </div>
                <div className="flex flex-row pr-12">
                    <h2 className="row_text_big">Facebook</h2>
                    <h2 className="row_text_big">Instagram</h2>
                </div>
            </div>
        </div>

    );
};

export default AirportsFooter;