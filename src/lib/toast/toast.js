import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (message, type) => {
  switch (type) {
    case "SUCCESS":
      toast.success(message, { position: toast.POSITION.TOP_RIGHT });
      break;
    case "ERROR":
      toast.error(message, { position: toast.POSITION.TOP_RIGHT });
      break;
    default:
      toast.info(message, { position: toast.POSITION.TOP_RIGHT });
      break;
  }
};

export default showToast;
