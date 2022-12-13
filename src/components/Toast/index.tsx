import React, { useEffect } from 'react';
import './Toast.scss';

export interface ToastProps {
  id: string;
  destroy: () => void;
  title: string;
  content: string;
  duration?: number;
}

function Toast(props: ToastProps) {
  const { destroy, content, title, duration = 0, id } = props;

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      destroy();
    }, duration);

    return () => clearTimeout(timer);
  }, [destroy, duration]);

  return (
    <div className="toast">
      <div className={'toast-header'}>
        <div>{title}</div>
        <button onClick={destroy}>X</button>
      </div>
      <div className={'toast-body'}>{content}</div>
    </div>
  );
}

export default Toast;
