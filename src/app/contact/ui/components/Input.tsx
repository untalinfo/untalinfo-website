'use client'

import React, { forwardRef, useState, useEffect, CSSProperties } from 'react';
import './Input.scss';

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
	size?: 'fullWidth' | 'medium' | 'small';
	error?: string;
	errorClassName?: string;
	className?: string;
	label?: string;
	name?: string;
	containerStyle?: CSSProperties;
	required?: boolean;
	maxLength?: number;
	labelClassName?: string;
	labelStyle?: CSSProperties;
}

export const InputComponent = forwardRef<HTMLInputElement, Props>(
  (
    {
      size,
      className,
      error,
      type,
      errorClassName,
      label,
      name,
      containerStyle = {},
      required,
      maxLength,
      labelClassName = "",
      labelStyle = {},
      ...props
    },
    ref
  ) => {
    const [typeInput, setTypeInput] = useState(type);
    const [_value, setValue] = useState(props.value);

    useEffect(() => {
      setTypeInput(type);
    }, [type]);

    useEffect(() => setValue(props.value), [props.value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event?.target?.value);
      props.onChange && props.onChange(event);
    };

    return (
      <div className={`suite-input-container `}>
        {label && (
          <div className="suite-input-label-wrapper">
            <label
              className={`suite-input-label ${labelClassName}`}
              style={labelStyle}
              htmlFor={name}
            >
              {required ? `${label}*` : label}
            </label>
            {maxLength && (
              <span className="color-secondary-600t">
                {`${_value?.toString().length || 0}/${maxLength}`}
              </span>
            )}
          </div>
        )}
        <div
          className={`suite-input-wrapper -${size} ${
            error ? "error" : ""
          }`}
          style={containerStyle}
        >
          <input
            ref={ref}
            type={typeInput}
            name={name}
            className={`suite-input ${className} color-primary`}
            maxLength={maxLength}
            {...props}
            value={_value}
            onChange={handleChange}
          />
        </div>
        {error && <small className='color-error'>{error}</small>}
      </div>
    );
  }
);

InputComponent.displayName = "InputComponent";
