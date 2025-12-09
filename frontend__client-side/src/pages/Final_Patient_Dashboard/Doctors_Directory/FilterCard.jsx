// @ts-ignore
import styles from '../Doctors_Directory/doctorDirectory.module.css'
import { Grid } from '@mui/material'
import Select from 'react-select';



const FilterCard = ({title, icon, option, size, setValue, type}) => {

    const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderColor: state.isFocused ? "#1e5eff" : "#2653D0",
        boxShadow: state.isFocused ? "0 0 0 2px rgba(22, 80, 227, 0.2)" : "none",
        "&:hover": {
        borderColor: "#1e5eff",
        },
        borderRadius: "7px",
        padding: "2px 6px",
        cursor: "pointer",
    }),
    placeholder: (provided) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
        color: "#2653D0",
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "#2653D0",
        fontWeight: "500", 
    }),
    option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    backgroundColor: state.isFocused ? "rgba(30, 94, 255, 0.1)" : "white",
    color: "#000",
    }),
};


    return (
        <Grid className={styles.filter_card} size={{ sm: 12, md: size }}>
            {
                type === "text" ? (
                    <div className={styles.select_container_text}>
                        <input
                            type="text"
                            className={styles.text_input}
                            placeholder={title}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                ) : (
                    <Select
                        className={styles.select_container}
                        // @ts-ignore 
                        onChange={(selected) => setValue(selected.value || '')}
                        options={option}
                        styles={customStyles}
                        placeholder={
                            <div className={styles.select_content}>
                                {icon}<span>{title}</span>
                            </div>
                        }
                    />
                )
            }
        </Grid>
    )
}

export default FilterCard;