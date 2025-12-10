import { useContext, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Headings/SectionHeading";
import { DoctorsContext } from '../../../context/Patient_Context/DoctorsCtx.jsx'
import {
    FilterTabs,
    SpecialistsGrid,
    PaginationDots,
    NavigationButtons,
    specialistFilters,
} from "./OurSpecialistsSection_Components";
import "./OurSpecialistsSection.scss";
// import { NavLink } from "react-router-dom";
import type { Specialist } from "../../../common/Types/Interfaces";
import {
    ScrollAnimation,
    scrollStaggerContainer,
    scrollStaggerItem,
    sliderSwipeVariants,
} from "../../../common/Animations";

const OurSpecialistsSection = () => {

    const { allDoctors } = useContext<any>(DoctorsContext);
    const [activeFilter, setActiveFilter] = useState<string>("All");
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [direction, setDirection] = useState<number>(0);
    const specialistsPerPage = 6;
    const totalPages = Math.ceil(allDoctors.length / specialistsPerPage);

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        setCurrentPage(0); // Reset to first page when filter changes
        console.log("Active filter:", filter);
        // Call the API to get the specialists data based on the filter
        // getTopSpecialists(filter);
    };

    const handlePageChange = (page: number) => {
        setDirection(page > currentPage ? 1 : -1);
        setCurrentPage(page);
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setDirection(-1);
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setDirection(1);
            setCurrentPage(currentPage + 1);
        }
    };

    const handleBookNow = (specialist: Specialist) => {
        console.log("Booking appointment with:", specialist);
        // Handle booking logic here
    };

    const adaptedDoctors: Specialist[] = allDoctors.map((doc) => ({
        id: doc._id,
        name: `${doc.firstName + " " + doc.lastName}`,
        specialization: doc.specialization,
        rating: doc.rating ?? 0,
        image: doc.profileImage
    }));


    // Filter specialists based on active filter
    const filteredSpecialists =
    activeFilter === "All"
        ? adaptedDoctors
        : adaptedDoctors.filter((doctor) =>
            doctor.specialization
            ?.toLowerCase()
            .includes(activeFilter.toLowerCase())
        );


    // Get current page specialists
    const startIndex = currentPage * specialistsPerPage;
    const endIndex = startIndex + specialistsPerPage;
    const currentSpecialists = filteredSpecialists.slice(startIndex, endIndex);

    return (
        <section
            className="OurSpecialists-Section main-section"
            id="our-specialists"
        >
            <div className="container">
                <ScrollAnimation variants={scrollStaggerContainer}>
                    {/* =============== Section Heading =============== */}
                    <ScrollAnimation variants={scrollStaggerItem}>
                        <SectionHeading title="OUR SPECIALISTS" />
                    </ScrollAnimation>

                    {/* =============== Filter Tabs =============== */}
                    <ScrollAnimation variants={scrollStaggerItem}>
                        <FilterTabs
                            filters={specialistFilters}
                            activeFilter={activeFilter}
                            onFilterChange={handleFilterChange}
                        />
                    </ScrollAnimation>

                    {/* =============== Specialists Grid =============== */}
                    <ScrollAnimation variants={scrollStaggerItem}>
                        <motion.div
                            key={`${activeFilter}-${currentPage}`}
                            custom={direction}
                            variants={sliderSwipeVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                },
                                opacity: { duration: 0.2 },
                            }}
                        >
                            {currentSpecialists.length > 0 ? (
                                <SpecialistsGrid
                                    specialists={currentSpecialists}
                                    onBookNow={handleBookNow}
                                />
                            ) : (
                                <div className="text-center fw-semibold fs-4">
                                    No specialists found
                                </div>
                            )}
                        </motion.div>
                    </ScrollAnimation>

                    {/* =============== Pagination =============== */}
                    <ScrollAnimation variants={scrollStaggerItem}>
                        <div className="pagination-container d-flex justify-content-center align-items-center position-relative">
                            <PaginationDots
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                            <div className="navigation-buttons-wrapper position-absolute end-0">
                                <NavigationButtons
                                    canGoLeft={currentPage > 0}
                                    canGoRight={currentPage < totalPages - 1}
                                    onPrevious={handlePrevious}
                                    onNext={handleNext}
                                />
                            </div>
                        </div>
                    </ScrollAnimation>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default OurSpecialistsSection;
