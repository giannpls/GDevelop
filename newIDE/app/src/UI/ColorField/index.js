import { t } from '@lingui/macro';
import React, { Component } from 'react';
import TextField from '../TextField';
import ColorPicker from './ColorPicker';

const styles = {
  container: {
    position: 'relative',
    display: 'inline-block',
  },
  picker: {
    position: 'absolute',
    right: '8px',
    top: '26px',
  },
};

export default class ColorField extends Component {
  onClick = () => {
    if (this.textField) this.textField.blur();
    if (this.picker) this.picker.open();
  };

  render() {
    return (
      <div
        style={{
          ...styles.container,
          width: this.props.fullWidth ? '100%' : undefined,
        }}
      >
        <TextField
          fullWidth
          floatingLabelText={this.props.floatingLabelText}
          floatingLabelFixed
          helperText={this.props.helperText}
          type="text"
          hintText={t`Click to choose`}
          onClick={this.onClick}
          onFocus={this.onClick}
          value=""
          ref={textField => (this.textField = textField)}
        />
        <div style={styles.picker}>
          <ColorPicker {...this.props} ref={picker => (this.picker = picker)} />
        </div>
      </div>
    );
  }
}
