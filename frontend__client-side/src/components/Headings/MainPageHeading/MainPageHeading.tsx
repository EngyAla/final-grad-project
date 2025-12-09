const MainPageHeading = ({ title }: { title: string }) => {
    return (
        <div className="Main-Page-Heading w-100">
            <h1 className="blue-bg white-color fs-1 text-center p-4 fw-semibold">
                {title}
            </h1>
        </div>
    );
};

export default MainPageHeading;
