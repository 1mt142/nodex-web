import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

// import PropTypes from 'prop-types'
import { GET_USERS } from "../../apiEndpoints";
import { getDataWithAuth } from "../../helpers/axiosUtils";
import handleError from "../../helpers/handleError";
import Loader from "../../components/Loader";

function UserList() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const getUsers = () => {
    setLoading(true);
    getDataWithAuth(GET_USERS, {})
      .then((res) => {
        const { results } = res;
        setData(results);
      })
      .catch((err) => {
        setData(false);
        handleError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (data === null) {
      getUsers();
    }
  }, [data]);
  console.log(data);
  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      email: "E-mail",
      selector: "email",
      sortable: true,
    },
  ];
  return (
    <div>
      <Loader loading={isLoading} />
      <DataTable title="User List" columns={columns} data={data} />
    </div>
  );
}

// UserList.propTypes = {

// }

export default UserList;
