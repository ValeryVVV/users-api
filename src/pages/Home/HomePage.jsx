import React, { useEffect, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import { getUsers } from "../../api/user-api";
import FilterUserName from "../FilterUsersName/FilterUserNamePage";
import UsersList from "../UsersList/UsersListPage";

const Home = () => {
    const [user, setUser] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => { 
        const fetchUsers = async () => {
            const result  = await getUsers();
            setUser(result);
        };
        fetchUsers();
    }, []);

    const changeFilter = e => {
            setFilter(e.currentTarget.value.trim())
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return user.filter(contact =>
            contact.username.toLowerCase().includes(normalizedFilter)
        );
    };
        
    const visibleContacts = getVisibleContacts();


    return (
        <div>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 5,
                    pb: 5,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h3"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        User Detail Information
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <FilterUserName value={filter} onChange={changeFilter} />
                    </Stack>
                </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <UsersList users={visibleContacts} />
            </Container>
        </div >
        )
    };


export default Home;