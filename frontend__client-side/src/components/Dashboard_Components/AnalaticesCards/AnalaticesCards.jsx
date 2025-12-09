import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
// import { LineChart } from '@mui/x-charts/LineChart';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { FavouriteContext } from '../../../context/Patient_Context/AddToFavCtx';
import { useContext } from 'react';
import { Link } from 'react-router';
import { AppointmentsContext } from '../../../context/Patient_Context/AppointmentsCtx';



const AnalaticesCards = () => {
    // @ts-ignore
    const { appointments } = useContext(AppointmentsContext);
    const [selectedCard, setSelectedCard] = React.useState(-1);
    // @ts-ignore
    const { favourites } = useContext(FavouriteContext);
    const cards = [
        {
            id: 1,
            title: 'Total Reservations',
            total_numbers: appointments.length,
            icon: <BookmarkAddedIcon style={{fontSize: "28px", color: "#2653D0"}}/>,
            route: '/patient/patientreservations'
        },
        {
            id: 2,
            title: 'Favorite Doctors',
            total_numbers: favourites.length,
            icon: <FavoriteIcon style={{fontSize: "28px", color: "#F4181C"}}/>,
            route: '/patient/favdoctors'
        },
        {
            id: 3,
            title: 'My Reviews',
            total_numbers: '0',
            icon: <StarIcon style={{fontSize: "28px", color: "#FCB52F"}}/>,
            route: '/'
        },
    ];

    return (
        <Box
        sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
            gap: 2,
            marginBottom: "40px"
        }}
        >
        {cards.map((card, index) => (
            <Card key={index}>
            <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? '' : undefined}
                sx={{
                height: '100%',
                '&[data-active]': {
                    backgroundColor: 'action.selected',
                    '&:hover': {
                    backgroundColor: 'action.selectedHover',
                    },
                },
                }}
            >
                <Link to={card.route} style={{color: " #1E1E1E"}}>
                    <CardContent sx={{ height: '100%' }}>
                        <Typography variant="h6" component="div" sx={{display: "flex", justifyContent: "space-between"}}>
                            {card.title}
                            <div>
                                {card.icon}
                            </div>
                        </Typography>
                        <Typography variant="h5" sx={{mb: 3, fontWeight: 700}}>
                            {card.total_numbers}
                        </Typography>
                        {/* <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        height={100}
                        /> */}
                    </CardContent>
                </Link>

            </CardActionArea>
            </Card>
        ))}

        </Box>
    )
}

export default AnalaticesCards