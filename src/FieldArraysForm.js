import React from "react";
import { Field, FormSection, reduxForm } from "redux-form";

// sections is an arbitrary name.
const sections = ["first", "second"];

const renderField = ({
  input,
  properties,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} {...properties} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderMembers = ({ fieldDefs, key }) => {
  const fields = fieldDefs[key].members;
  return (
    <ul>
      <li>
        <h4>Section {key}</h4>
      </li>
      {fields.map((member, index) => {
        const name = `members.${member.name}`;
        return (
          <li key={index}>
            <Field
              name={name}
              type={member.type}
              properties={member.properties}
              component={renderField}
              label={member.label}
            />
          </li>
        );
      })}
    </ul>
  );
};

const FieldArraysForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, fieldDefs } = props;
  return (
    <form onSubmit={handleSubmit}>
      {sections.map((c, i) => (
        <FormSection key={i} name={`${c}`}>
          {renderMembers({ fieldDefs, key: c })}
        </FormSection>
      ))}
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "fieldArrays" // a unique identifier for this form
  // validate
})(FieldArraysForm);
