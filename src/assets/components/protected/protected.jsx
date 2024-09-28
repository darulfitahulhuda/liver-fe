import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";
import { toast } from "react-toastify";

function TokenProtected({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = CookieStorage.get(CookieKeys.AuthToken);
    if (!token) {
      navigate("/login");
      toast.warning("anda harus login terlebih dahulu");
    }
  }, []);

  return children;
}

export default TokenProtected;
