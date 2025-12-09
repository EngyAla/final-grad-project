import "./MainLoader.scss";

const MainLoader = () => {
    return (
        <div className="main-loader">
            <div className="loading-wave">
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
            </div>
        </div>
    );
};

export default MainLoader;
