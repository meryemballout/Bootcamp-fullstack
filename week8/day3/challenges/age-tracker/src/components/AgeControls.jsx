import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../store/ageSlice';

export default function AgeControls() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.age.loading);

  return (
    <div>
      <button onClick={() => dispatch(ageUpAsync())} disabled={loading}>
        Age Up
      </button>
      <button onClick={() => dispatch(ageDownAsync())} disabled={loading} style={{ marginLeft: '1rem' }}>
        Age Down
      </button>
    </div>
  );
}
