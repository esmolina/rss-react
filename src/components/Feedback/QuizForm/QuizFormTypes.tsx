import { FeedbackCardProps } from '../FeedbackCard/FeedbackCardTypes';

export interface QuizProps {
  handleNewFeedback: (newFeedback: FeedbackCardProps) => void;
}
export interface FormFields {
  name: string;
  date: string;
  product: string;
  estimate: string;
  file: FileList;
  agreement: boolean;
}

export interface ProductOptionsInterface {
  value: string;
  label: string;
}
