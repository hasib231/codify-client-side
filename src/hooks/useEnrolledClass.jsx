import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useEnrolledClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: myEnrolledClass = [] } = useQuery({
    queryKey: ["myEnrolledClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/myEnrolledClass?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [myEnrolledClass, refetch];
};
export default useEnrolledClass;
