import { useState, useEffect } from "react";
import { DoctorsContext } from "./DoctorsCtx";


export const DoctorsProvider = ({ children }) => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/doctors/all");
        const data = await response.json();

        setAllDoctors(data);
        setFilteredDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);
  console.log(allDoctors)

  return (
    <DoctorsContext.Provider value={{ allDoctors, filteredDoctors, setFilteredDoctors, loading }}>
      {children}
    </DoctorsContext.Provider>
  );
};