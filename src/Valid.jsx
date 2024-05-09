import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  var errors = {};
  if (!values.firstName) {
    errors.firstName = "*Required FirstName";
  } else if (values.firstName.length > 8) {
    errors.firstName = "*Must be 8 Charactors Only Allowed";
  }
  if (!values.lastName) {
    errors.lastName = "*Required FirstName";
  } else if (values.lastName.length > 8) {
    errors.lastName = "*Must be 8 Charactors Only Allowed";
  }
  if (!values.email) {
    errors.email = "*Required FirstName";
  }else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
    errors.email="*Invalid Email"
  }
  if (!values.password) {
    errors.password = "*Required FirstName";
  } else if (values.password.length > 8) {
    errors.password = "*Must be 8 Charactors Only Allowed";
  } else if (values.password.length < 4) {
    errors.password = "*More  then 5 Charactors Only Allowed";
  }
  if (!values.cpassword) {
    errors.cpassword = "*Required FirstName";
  } else if (values.cpassword.length > 8) {
    errors.cpassword = "*Must be 8 Charactors Only Allowed";
  } else if (values.cpassword.length < 4) {
    errors.cpassword = "*More  then 5 Charactors Only Allowed";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "*Not Matched Your Password";
  }

  return errors;

};


export function Valid() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate,
onSubmit : values =>{
alert(`successfully login`);
}


  });
  console.log(formik.values);
  console.log(formik.onsubmit);
  return (
    <>
      <div className="container mt-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form action="" onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label mt-3">
                      First Name:
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-control"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <span className="form-text">
                        {formik.errors.firstName}
                      </span>
                    ) : null}
                    <br />
                    <label htmlFor="lastName" className="form-label mt-3">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="form-control"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <span className="form-text">
                        {formik.errors.lastName}
                      </span>
                    ) : null}
                    <br />
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />

                    {formik.touched.email && formik.errors.email ? (
                      <span className="form-text">{formik.errors.email}</span>
                    ) : null}
                    <br />
                    <label htmlFor="password" className="form-label mt-3">
                      Password:
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />

                    {formik.touched.password && formik.errors.password ? (
                      <span className="form-text">
                        {formik.errors.password}
                      </span>
                    ) : null}
                    <br />
                    <label htmlFor="cpassword" className="form-label mt-3">
                      Confirm Password:
                    </label>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      className="form-control"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cpassword}
                    />

                    {formik.touched.cpassword && formik.errors.cpassword ? (
                      <span className="form-text">
                        {formik.errors.cpassword}
                      </span>
                    ) : null}
                    <br />
                    <input
                      type="button"
                      value="Submit"
                      className="btn btn-primary w-100 mt-3"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Valid;
