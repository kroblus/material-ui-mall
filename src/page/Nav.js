import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import SearchBasic from "../component/SearchBasic";
import {IconButton} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Person} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    margin: '10px 0 0 0',
    color: theme.palette.text.secondary,
}));

const Nav = ({setProducts}) => {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={24} sx={{ padding: '10px' }}>
                <Grid item xs={2} xsOffset={3} >
                    <Item >OZON</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={6} xsOffset={1}>
                    <SearchBasic setProducts={setProducts}/>
                </Grid>
                <Grid item xs={2} xsOffset={1}>
                    <IconButton  aria-label="shopping cart" size="large">
                        <ShoppingCartIcon fontSize="large"/>
                    </IconButton>
                </Grid>
                <Grid item xs={2}>
                    <IconButton onClick={() => navigate('/login')} aria-label="person" size="large">
                        <Person fontSize="large"/>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Nav;