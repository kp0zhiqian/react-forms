import React from 'react';
import PropTypes from 'prop-types';
import { Switch as Pf4Switch } from '@patternfly/react-core';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';
import FormGroup from '../common/form-group';
import IsRequired from '../common/is-required';

const Switch = (props) => {
  const { label, offText, onText, isRequired, helperText, meta, description, input, isReadOnly, isDisabled, id, ...rest } = useFieldApi({
    ...props,
    type: 'checkbox'
  });
  return (
    <FormGroup isRequired={isRequired} helperText={helperText} meta={meta} description={description} hideLabel id={id || input.name}>
      <Pf4Switch
        {...rest}
        {...input}
        id={id || input.name}
        isDisabled={isDisabled || isReadOnly}
        label={isRequired ? <IsRequired>{onText || label}</IsRequired> : onText || label}
        labelOff={isRequired ? <IsRequired>{offText || label}</IsRequired> : offText || label}
      />
    </FormGroup>
  );
};

Switch.propTypes = {
  label: PropTypes.node,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  helperText: PropTypes.node,
  description: PropTypes.node,
  isDisabled: PropTypes.bool,
  id: PropTypes.string,
  onText: PropTypes.node,
  offText: PropTypes.node
};

export default Switch;