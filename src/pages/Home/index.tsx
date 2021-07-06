import { useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react';

import { Container } from './styles';
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';

export default function Home() {
  const history = useHistory();
  const { addToast } = useToast();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      addToast({
        title: 'Falha ao entrar na sala',
        description: 'Essa sala não existe!',
        type: 'error'
      })
      return;
    }

    if (roomRef.val().endedAt) {
      addToast({
        title: 'Falha ao entrar na sala',
        description: 'Essa sala já se encerrou!',
        type: 'error'
      })
      return;
    }

    addToast({
      title: 'Sucesso!',
      description: 'Bem vindo a sala!',
      type: 'success'
    })

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <Container>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button disabled={roomCode.length === 0 && true} type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </Container>
  )
}
