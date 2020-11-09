import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import {RootState} from "@store/root-reducer";


export const useAuthRedirect = () => {
  const history = useHistory();
  const isAuth = useSelector((state:RootState) => state.auth.isAuth);
  if (!isAuth) {

    history.push("/login");
  }
};