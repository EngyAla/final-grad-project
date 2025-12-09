import { Card, CardContent, Typography, Box } from '@mui/material';

const StatCard = ({ title, value, icon, color }) => {
    return (
        <Card sx={{ minWidth: 250, flex: 1, me: 1, mb: 2, boxShadow: 2 }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <Box
            sx={{
                bgcolor: `${color}1A`, 
                color: color,
                borderRadius: 2,
                p: 2,
                mr: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            {icon}
            </Box>
            <Box>
            <Typography variant="h5" component="div" fontWeight="bold">
                {value}
            </Typography>
            <Typography color="text.secondary">{title}</Typography>
            <Box sx={{ bgcolor: '#f5f5f5', height: 5, width: 80, borderRadius: 5, mt: 1 }} />
            </Box>
        </CardContent>
        </Card>
    );
};

export default StatCard;
