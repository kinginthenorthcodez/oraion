import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [Loading, setLoading] = useState(true);
  const [Users, setUsers] = useState([]);

  const getUsers = async () => {
    const repsonse = await fetch(url);
    const data = await repsonse.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, [url]);

  return { Loading, Users };
};
