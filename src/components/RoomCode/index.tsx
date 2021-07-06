import copyImg from '../../assets/images/copy.svg';

import { Container } from './styles';

import { useToast } from '../../hooks/useToast';
type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  const { addToast } = useToast();

  function copyRoomCodeToClipboard() {
    addToast({
      title: 'Código copiado com sucesso!',
      description: '',
      type: 'info'
    });

    navigator.clipboard.writeText(props.code);
  }

  return (
    <Container className="room-code" onClick={copyRoomCodeToClipboard}>
        <div>
            <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala #{props.code}</span>
    </Container>
  )
}