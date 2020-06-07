import {useHistory} from "react-router";
import {useSelector} from "react-redux";


export const useAuthRedirect = () => {
  const history = useHistory();
  const isAuth = useSelector((state) =>  state.auth.user.isAuth);
  if (!isAuth) {
   history.push("/login");
  }
};