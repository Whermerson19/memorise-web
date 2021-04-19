import {
  useRef,
  useCallback,
  useEffect,
  useState,
  InputHTMLAttributes,
} from "react";

import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from 'react-icons/fi'

import { useField } from "@unform/core";

import { Container, Error } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

export default function Input({ name, icon: Icon, ...rest }: IInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { registerField, fieldName, error, defaultValue } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInpuFocus = useCallback(() => setIsFocused(true), []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [registerField, fieldName]);

  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
      <Icon size={25} />
      <input
        ref={inputRef}
        name={name}
        onFocus={handleInpuFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        {...rest}
      />

      {
        !!error &&
        <Error isVisible={!!error} >
          <span>{error}</span>
          <FiAlertCircle size={25} color="var(--red)" />
        </Error>
      }
    </Container>
  );
}
