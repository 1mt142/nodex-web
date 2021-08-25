import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

// import PropTypes from 'prop-types'
import { GET_BLOGS } from "../../apiEndpoints";
import { getDataWithAuth } from "../../helpers/axiosUtils";
import handleError from "../../helpers/handleError";
import Loader from "../../components/Loader";

function BlogList() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const getBlogList = () => {
    setLoading(true);
    getDataWithAuth(GET_BLOGS, {})
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
      getBlogList();
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
      <DataTable title="Blog List" columns={columns} data={[]} />
    </div>
  );
}

// BlogList.propTypes = {

// }

export default BlogList;
