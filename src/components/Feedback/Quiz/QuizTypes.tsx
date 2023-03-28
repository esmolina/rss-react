import { FeedbackCardProps } from '../FeedbackCard/FeedbackCardTypes';

export interface QuizProps {
  handleNewFeedback: (newFeedback: FeedbackCardProps) => void;
}

export interface QuizState {
  userName: string;
  userDate: string;
  userProduct: string;
  userFilePath: string;
  nameIsValid: boolean;
  dateIsValid: boolean;
  productIsValid: boolean;
  estimateIsValid: boolean;
  fileCoordsIsValid: boolean;
  agreementIsValid: boolean;
  showMessage: boolean;
}
