import {Link, Typography} from "@mui/material";

const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary" align='center'>
            {'YingZhe Jiang © '}
            <Link color="inherit" href="https://github.com/kroblus">
                Online Stone
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright