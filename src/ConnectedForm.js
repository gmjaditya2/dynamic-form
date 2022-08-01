import { connect } from "react-redux";
import FieldArraysForm from "./FieldArraysForm";

// fieldDefs could be any custom property (doesn't have to be named fieldDefs)
// its what renderMembers uses to build the initial form
const ConnectedForm = connect((state) => ({
  initialValues: {
    first: { members: { firstName: "John", lastName: "Doe", checkbox: true } },
    second: {
      members: {
        Test: "test",
        link: "Open google"
      }
    }
  },
  fieldDefs: {
    first: {
      members: [
        {
          label: "First Name",
          name: "firstName",
          // properties: { hidden: true }
        },
        {
          label: "Last Name",
          name: "lastName",
          properties: { readOnly: true }
        },
        {
          label: "new field",
          name: "new field",
          
        },
        { label: "Checkbox", name: "checkbox", type: "checkbox" }
      ]
    },
    second: {
      members: [
        {
          label: "Test button",
          name: "Test",
          type: "button",
          properties: {
            onClick: function () {
              alert("works");
            }
          }
        },
        {
          label: "Test Link",
          name: "link",
          type: "button",
          properties: {
            onClick: function () {
              window.open("https://google.com", "_blank");
            }
          }
        }
      ]
    }
  }
}))(FieldArraysForm);

export default ConnectedForm;
