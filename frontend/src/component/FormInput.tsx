import styled from "@emotion/styled";

const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

const Form = styled.div`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    top: -14px;
    font-size: 12px;
    color: black;
  }
`;

const FormLabel = styled.div`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    top: -14px;
    font-size: 12px;
    color: black;
  }
`;

export const FormInput = ({ handleChange, label, ...otherProps }) => (
  <Group>
    <Form>
      <input onChange={handleChange} {...otherProps} />
      {
        label ? (
          <label 
            className={`${
              otherProps.value.length ? 'shrink' : ''
            } FormLabel`}
          >
            {label}
        </label>
        ) : null}
    </Form>
  </Group>
);