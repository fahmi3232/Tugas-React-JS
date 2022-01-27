import { useFormik } from "formik";
import * as Yup from 'yup';
import { Fade } from "react-awesome-reveal";

const FormRegisComp = () => {

    const doregister = (values) => {
        console.log("Form values", values);
        setTimeout(() => {
            formik.setSubmitting(false);
            formik.resetForm()
        }, 2000)
    }

  const formik = useFormik({
    // initial values
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreement: false
    },
    validationSchema: Yup.object({
        username: Yup.string()
            .required(),
        email: Yup.string()
            .required()
            .email("Invalid Email Format"),
        password: Yup.string()
            .required()
            .min(8, 'Should More than 8 Characters')
            .matches(/[a-z]/g, 'Should Contain at Least 1 Lowercase')
            .matches(/[A-Z]/g, 'Should Contain at Least 1 Uppercase')
            .matches(/[0-9]/g, 'Should Contain at Least 1 Number')
            .matches(/^\S*$/, 'Should Not Contain Spaces'),
        confirmPassword: Yup.string()
            .required()
            .oneOf([Yup.ref('password')], 'Paaword must match' ),
        agreement: Yup.bool()
            .isTrue('Field must be checked')
    }),
    onSubmit: doregister
  });
//   console.log(formik)
  return (
    <Fade delay={500}>
      <div style={{ margin: "70px auto", width: 500 }}>
        <h1>Form Pendaftaran</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label className="label-required">Username</label>
            <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.username && formik.errors.username && <div className="error">{formik.errors.username}</div>}
          </div>
          <div className="form-group">
            <label className="label-required">Email</label>
            <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
          </div>
          <div className="form-group">
            <label className="label-required">Password</label>
            <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.password && formik.errors.password && <div className="error">{formik.errors.password}</div>}
          </div>
          <div className="form-group">
            <label className="label-required">Confirm Password</label>
            <input type="password" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="error">{formik.errors.confirmPassword}</div>}
          </div>
          <div className="form-group">
            <input id="agreement" type="checkbox" name="agreement" checked={formik.values.agreement} value={formik.values.agreement} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="agreement" className="label-required">
              I agree to Terms of Services
            </label>
            {formik.touched.agreement && formik.errors.agreement && <div className="error">{formik.errors.agreement}</div>}
          </div>
          <button className="btnn" type="submit" disabled={formik.isSubmitting}>
            Daftar
          </button>
        </form>
      </div>
    </Fade>
  );
};

export default FormRegisComp;
