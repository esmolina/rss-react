export interface ButtonProps {
  buttonType: 'button' | 'submit' | 'reset' | undefined;
  buttonText: string;
  customClass: string;
  isSubmit: boolean;
  handleSubmit?: () => void;
}
