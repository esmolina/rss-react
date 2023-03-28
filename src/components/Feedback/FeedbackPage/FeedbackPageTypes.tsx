import { FeedbackCardProps } from '../FeedbackCard/FeedbackCardTypes';

export interface FeedbackPageProps {
  handleGoAnotherChange: (pageName: string) => void;
}

export interface FeedbackPageState {
  feedbacks: Array<FeedbackCardProps>;
}
