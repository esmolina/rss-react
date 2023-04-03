import React from 'react';

export interface ButtonProps {
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  buttonText: string;
  customClass: string;
  handleSubmit?: (event: React.MouseEvent) => void;
}
