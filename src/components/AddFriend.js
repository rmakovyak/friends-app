import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, RadioGroup, Switch } from 'formik-material-ui';

import { FormControlLabel, Paper, Radio, Button } from '@material-ui/core';

const AddFriend = ({ onSubmit }) => (
  <Fragment>
    <p className="font-weight-bold ml-4 mt-4 h3 text-uppercase">Add a friend</p>
    <Paper className="m-4 mt-0 p-4">
      <Formik
        initialValues={{ name: '', isStared: false, sex: 'female' }}
        onSubmit={values => onSubmit(values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              type="text"
              name="name"
              label="Name"
              className="mb-4"
            />
            <div>
              <FormControlLabel
                label="Starred"
                control={<Field component={Switch} name="isStared" />}
              />
            </div>
            <Field component={RadioGroup} name="sex" className="mb-4">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </Field>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              disabled={isSubmitting}
            >
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  </Fragment>
);

export default AddFriend;
