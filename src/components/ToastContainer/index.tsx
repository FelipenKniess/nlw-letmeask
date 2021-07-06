import React from 'react';
import { useTransition } from 'react-spring';

import  {ToastMessage} from '../../hooks/useToast'
import { Container } from './styles';

import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
      messages,
      {
        from: {right: '-120%', opacity: 0},
        enter: {right: '0%', opacity: 1},
        leave: {right: '-120%', opacity: 0},
      }
    )

  return (
    <Container>

      {messagesWithTransitions((style, item) => (
        <Toast key={item.title} style={style} message={item}/>
      ))}

    </Container>
  );
};

export default ToastContainer;