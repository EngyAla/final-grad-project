import { useState, useEffect } from "react";
import SectionHeading from "../../Headings/SectionHeading";
import StoriesSliderItem from "./Stories_Components/StoriesSliderItem";
import StoriesModal from "../../Modals/StoriesModal/StoriesModal";
import "./StoriesSection.scss";

const storiesData = [
    {
        id: 3,
        stars: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptatibus quia dolor cumque officia tenetur neque illum incidunt nihil aliquam nam modi consectetur provident ratione quae quam atque iusto laboriosam cum dicta odit porro! Autem delectus nobis aperiam, labore a facere maxime. Nostrum sequi quod voluptatum. Aspernatur culpa ducimus sequi temporibus velit ad molestiae blanditiis modi facere! Molestiae quasi temporibus veritatis accusantium magni? At doloremque, accusantium quae ut harum repudiandae natus fugiat accusamus est error temporibus, impedit recusandae tempore! Maiores assumenda neque harum repellat enim expedita? Magni incidunt neque ex fuga non blanditiis quo explicabo provident quas corrupti quod dignissimos labore, repellat voluptas tempore eveniet corporis molestias repudiandae iste. Ratione ipsam quisquam illum consequuntur deleniti minima soluta eius quis voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptatibus quia dolor cumque officia tenetur neque illum incidunt nihil aliquam nam modi consectetur provident ratione quae quam atque iusto laboriosam cum dicta odit porro! Autem delectus nobis aperiam, labore a facere maxime. Nostrum sequi quod voluptatum. Aspernatur culpa ducimus sequi temporibus velit ad molestiae blanditiis modi facere! Molestiae quasi temporibus veritatis accusantium magni? At doloremque, accusantium quae ut harum repudiandae natus fugiat accusamus est error temporibus, impedit recusandae tempore! Maiores assumenda neque harum repellat enim expedita? Magni incidunt neque ex fuga non blanditiis quo explicabo provident quas corrupti quod dignissimos labore, repellat voluptas tempore eveniet corporis molestias repudiandae iste. Ratione ipsam quisquam illum consequuntur deleniti minima soluta eius quis voluptatibus!",
        author: "Michael Brown",
        date: "March 10, 2025",
    },
    {
        id: 1,
        stars: 5,
        text: "The booking process was seamless, and I was able to consult with a specialist within minutes. Highly recommended!",
        author: "Sarah Johnson",
        date: "March 15, 2025",
    },
    {
        id: 2,
        stars: 5,
        text: "The booking process was seamless, and I was able to consult with a specialist within minutes. Highly recommended!",
        author: "Sarah Johnson",
        date: "March 15, 2025",
    },
    {
        id: 4,
        stars: 5,
        text: "Amazing experience! The platform is user-friendly and the medical staff is top-notch.",
        author: "Emily Davis",
        date: "March 8, 2025",
    },
    {
        id: 5,
        stars: 5,
        text: "Quick and efficient booking system. The consultation was thorough and helpful.",
        author: "David Wilson",
        date: "March 5, 2025",
    },
    {
        id: 6,
        stars: 4,
        text: "Great platform for healthcare. Easy to use and very convenient for busy schedules.",
        author: "Lisa Anderson",
        date: "March 3, 2025",
    },
];

const StoriesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const [modalData, setModalData] = useState<{
        stars: number;
        text: string;
        author: string;
        date: string;
    } | null>(null);

    // Update itemsPerView based on screen size
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth <= 768) {
                setItemsPerView(1);
            } else if (window.innerWidth <= 992) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);
        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    const totalItems = storiesData.length;
    const maxIndex = Math.max(0, totalItems - itemsPerView);

    // Go to Previous
    const goToPrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    // Go to Next
    const goToNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    // Show Modal
    const handleShowModal = (data: {
        stars: number;
        text: string;
        author: string;
        date: string;
    }) => {
        setModalData(data);
    };

    // Close Modal
    const handleCloseModal = () => {
        setModalData(null);
    };

    return (
        <section id="stories" className="stories-section main-section">
            {/* Heading */}
            <SectionHeading title="STORIES THAT INSPIRE US" />

            {/* Stories Slider */}
            <div className="stories-slider">
                <div className="slider-container">
                    {/* Navigation Buttons */}
                    <button
                        className={`nav-btn prev-btn ${
                            currentIndex === 0 ? "disabled" : ""
                        }`}
                        onClick={goToPrevious}
                        disabled={currentIndex === 0}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    {/* Slider Content */}
                    <div className="slider-content">
                        <div
                            className="slider-track"
                            style={{
                                transform: `translateX(-${
                                    currentIndex * (100 / itemsPerView)
                                }%)`,
                                transition: "transform 0.3s ease-in-out",
                            }}
                        >
                            {storiesData.map((story) => (
                                <div
                                    key={story.id}
                                    className="slide-item"
                                    style={{ width: `${100 / itemsPerView}%` }}
                                >
                                    <StoriesSliderItem
                                        stars={story.stars}
                                        text={story.text}
                                        author={story.author}
                                        date={story.date}
                                        onShowModal={handleShowModal}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={`nav-btn next-btn ${
                            currentIndex >= maxIndex ? "disabled" : ""
                        }`}
                        onClick={goToNext}
                        disabled={currentIndex >= maxIndex}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            {/* Stories Modal */}
            <StoriesModal
                isOpen={!!modalData}
                onClose={handleCloseModal}
                modalData={modalData}
            />
        </section>
    );
};

export default StoriesSection;
