import React from 'react';
import Toast, { ToastProps } from '../Toast';
import ReactDOM from 'react-dom/client';

interface ToastOptions {
  id?: string;
  title: string;
  content: string;
  duration?: number;
}

export class ToastManager {
  private containerRef: HTMLDivElement;
  private toasts: ToastProps[] = [];

  constructor() {
    const toastContainer = document.createElement('div') as HTMLDivElement;
    toastContainer.id = 'toast-container-main';
    this.containerRef = toastContainer;
    document.body.appendChild(this.containerRef);
  }

  public show(options: ToastOptions): void {
    const toastId = Math.random().toString(36);
    const toast: ToastProps = {
      id: toastId,
      ...options,
      destroy: () => this.destroy(options.id ?? toastId),
    };

    const index = this.toasts.findIndex((t) => t.id == toast.id);

    if (index < 0) {
      this.toasts = [toast, ...this.toasts];
      this.render();
    } else {
      let toastFinded = this.toasts[index];
      if (toastFinded.content != toast.content) {
        this.toasts[index] = toast;
        this.render();
      }
    }
  }

  public destroy(id: string): void {
    this.toasts = this.toasts.filter((toast: ToastProps) => toast.id !== id);
    this.render();
  }

  private render(): void {
    const toastsList = this.toasts.map((toastProps: ToastProps) => (
      <Toast key={toastProps.id} {...toastProps} />
    ));
    ReactDOM.createRoot(this.containerRef).render(toastsList);
  }
}

export const toast = new ToastManager();
