import { ChangeEvent } from "react";
import { usersBase } from "../mock/usersBase"
import { IauthData, IauthDataMore } from "../types/pages/auth/authTypes";
type SetAuthDataType = React.Dispatch<React.SetStateAction<IauthDataMore>>;

type useAuthType = {
    setAuthData: SetAuthDataType,
    authData: IauthData,
    changeRole: (item: string) => void,
    navigation: (item: string) => void,
    handleChangeName: (item: any) => void,
}

const useAuth = ({setAuthData, authData, changeRole, navigation, handleChangeName}: useAuthType): any => {
    const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>): void => {
        setAuthData((prev: any) => ({ ...prev, login: e.target.value }));
      };
    
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthData((prev: any) => ({ ...prev, password: e.target.value }));
      };

      
    const handleSubmit = () => {
        if (
          authData.login.length > 5 &&
          authData.password.length > 5
        ) {
          const user = usersBase.find(
            (user) =>
              user.login === authData.login && user.password === authData.password
          );
          if (user) {
            changeRole("default");
            navigation("/");
            handleChangeName(user.name)
          } else {
            alert("Пользователь не найден")
          }
        }
      };
    return {
        handleChangeLogin,
        handleChangePassword,
        handleSubmit
    }
}

export { useAuth }