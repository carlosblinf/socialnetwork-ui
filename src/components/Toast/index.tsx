import React, { useEffect } from 'react';
import './Toast.scss';

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}
export interface ToastProps {
  id: string;
  destroy: () => void;
  title: string;
  content: string;
  duration?: number;
  type?: ToastType;
}

function Toast(props: ToastProps) {
  const { destroy, content, title, duration = 3000, id, type = ToastType.ERROR } = props;

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      destroy();
    }, duration);

    return () => clearTimeout(timer);
  }, [destroy, duration]);

  return (
    <div className="toast">
      <div className={'toast-header ' + type}>
        <div>{title}</div>
        <button onClick={destroy}>X</button>
      </div>
      <div className={'toast-body'}>{content}</div>
    </div>
  );
}

export default Toast;
