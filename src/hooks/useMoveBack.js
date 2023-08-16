import { useNavigate } from "react-router-dom";

/**
 * Move back to the previous page.
 */
export function useMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
