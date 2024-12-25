import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    console.log(1, "useEffect");
    const getConversastions = async () => {
      console.log(2, "getConversastions");
      setLoading(true);
      try {
        console.log(3, "try");
        const response = await fetch("/api/users");
        const data = await response.json();
        if (data.error) {
          console.log(4, "if (data.error)");
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversastions();
  }, []);
  console.log(conversations);

  return { loading, conversations };
};

export default useGetConversations;
