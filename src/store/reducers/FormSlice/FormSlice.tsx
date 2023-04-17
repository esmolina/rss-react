import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormStateInterface } from './FormSliceTypes';
import { FeedbackCardProps } from '../../../components/Feedback/FeedbackCard/FeedbackCardTypes';

const initialState: FormStateInterface = {
  feedbacks: [],
};

export const FormSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    setStoreNewFeedback(state, action: PayloadAction<FeedbackCardProps>) {
      state.feedbacks = [...state.feedbacks, action.payload];
    },
  },
});

export default FormSlice.reducer;
