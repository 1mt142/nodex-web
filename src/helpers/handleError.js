/**
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-05-03 16:11:52
 * @modify date 2021-05-03 16:11:52
 * @desc [description]
 */
import { toast } from "react-toastify";

const handleError = (error, actions = null) => {
  if (
    error.response &&
    error.response.data &&
    error.response.data.errors &&
    actions
  ) {
    const errObj = {};
    error.response.data.errors.forEach((item) => {
      const key = Object.keys(item)[0];
      errObj[key] = item[key];
    });
    actions.setErrors(errObj);
  } else toast.error(error.message);
};

export default handleError;
