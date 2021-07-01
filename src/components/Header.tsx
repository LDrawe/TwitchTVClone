import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Avatar, OnlineStatus, RightSide, Button } from 'Styles/Header';
import { MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';
const Header: React.FC = () => {
    return (
        <Container>
            <Avatar>
                <OnlineStatus />
            </Avatar>

            <RightSide>
                <Button>
                    <MaterialIcons name="notifications-none" color="white" size={26} />
                </Button>

                <Button>
                    <MaterialCommunityIcons name="message-outline" color="white" size={26} />
                </Button>

                <Button>
                    <Feather name="search" color="white" size={26} />
                </Button>
            </RightSide>
        </Container>
    )
}

export default Header;
