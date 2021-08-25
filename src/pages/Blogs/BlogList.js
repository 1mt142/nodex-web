import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

// import PropTypes from 'prop-types'
import { GET_BLOGS } from "../../apiEndpoints";
import { getDataWithAuth } from "../../helpers/axiosUtils";
import handleError from "../../helpers/handleError";
import Loader from "../../components/Loader";

function BlogList() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getBlogList = () => {
    const params = {
      limit: 100,
      page: 1,
    };
    setLoading(true);
    getDataWithAuth(GET_BLOGS, { params })
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
    if (data !== null && data.length <= 1) {
      getBlogList();
    }
  }, []);

  const columns = [
    {
      title: "title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Action",
      minWidth: "200px",
      cell: (...row) => (
        <div>
          <div>
            <NavLink to={`/blog/${row[0].id}`}>
              <Button size="sm" color="secondary">
                Edit
              </Button>
            </NavLink>{" "}
            |
            <NavLink to={`/blog/${row[0].id}`}>
              <Button size="sm" color="success">
                View
              </Button>
            </NavLink>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Loader loading={isLoading} />
      <DataTable title="Blog List" columns={columns} data={data} pagination />
    </div>
  );
}

// BlogList.propTypes = {

// }

export default BlogList;
