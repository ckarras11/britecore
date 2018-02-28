import React from 'react';
import Fields from './fields';
import FieldDetails from './field-details';
import FieldGroups from './field-groups';

const MainCard = () => {
    return (
        <div className="main-card">
          <Fields />
          <FieldDetails />
          <FieldGroups />
        </div>
      );
};

export default MainCard;
