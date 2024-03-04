import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useNavigate } from 'react-router-dom';
import { logEvent } from 'firebase/analytics';
import FlexColumnContainer from '../../components/FlexColumnContainer';
import './waiver.css';
import FirebaseResources from '../../services/firebase/FirebaseResources.ts';
import { WAIVER_AGREEMENT, WAIVER_TEXT, WAIVER_TITLE } from '../../text/JoinUs';

function Waiver({ onWaiverSubmit }) {
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();
  const firebaseResources = new FirebaseResources();

  const handleCheckboxChange = (event) => {
    setIsAgreed(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const analytics = firebaseResources.getAnalytics;
    logEvent(analytics, 'signed_waiver', {
      signed: isAgreed,
    });
    if (isAgreed) {
      localStorage.setItem('waiverSigned', 'true');
      onWaiverSubmit();
    } else {
      navigate('/');
    }
  };

  return (
    <FlexColumnContainer>
      <h2 className="waiver-title">{WAIVER_TITLE}</h2>
      <form className="waiver-form" onSubmit={handleSubmit}>
        <p className="waiver-text">{WAIVER_TEXT}</p>
        <label className="waiver-agree-checkbox" htmlFor="waiver-agree-checkbox">
          <input
            id="waiver-agree-checkbox"
            type="checkbox"
            checked={isAgreed}
            onChange={handleCheckboxChange}
          />
          <span className="waiver-agree-text">{WAIVER_AGREEMENT}</span>
        </label>
        <button type="submit" className="btn lg" disabled={!isAgreed}>
          Submit
        </button>
      </form>
    </FlexColumnContainer>
  );
}

Waiver.propTypes = {
  onWaiverSubmit: PropTypes.func.isRequired,
};

export default Waiver;
