import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
const formValidationSchema = yup.object({
 email : yup.string().email().required().min(5),
 password : yup.string().required().min(8).max(12)
})

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "kavya", password: "abc" },
    validationSchema : formValidationSchema,
    onSubmit : (values)=>{
    console.log("onSubmit",values)
    }
  }
  );
  return (
     <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        placeholder="Enter email"
        value={formik.values.email}
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <input
        type="password"
        placeholder="Enter password"
        value={formik.values.password}
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
      <button type="submit">Submit</button>
      {/* <p>{JSON.stringify(formik.values)}</p>
      <p>{JSON.stringify(formik.errors)}</p>
      <p>{JSON.stringify(formik.touched)}</p> */}
    </form>
  );
}
