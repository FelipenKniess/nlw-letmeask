import React, {useContext} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import {ThemeContextAll} from '../../hooks/themeAppProvider'

import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';

import { RoomCode } from '../../components/RoomCode';
import { Button } from '../../components/Button';

import { database } from '../../services/firebase';

type HeaderProps = {
    isAdmin?: boolean;
}

type RoomParams = {
    id: string;
}

export function Header({isAdmin = false}: HeaderProps){

    const params = useParams<RoomParams>();
    const history = useHistory();
    const roomId = params.id;

    const { colors, title } = useContext(ThemeContext);
    const { toggleTheme } = useContext(ThemeContextAll);

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
          endedAt: new Date(),
        })

        history.push('/');
    }

    return (
        <Container>
            <div className="content">
            <img src={logoImg} alt="Letmeask" />
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            />
            <div>
                <RoomCode code={roomId} />
                { isAdmin && (
                    <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                )}
            </div>
            </div>
        </Container>
    )
}