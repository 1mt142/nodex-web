import React from "react";
import { Modal, ModalBody, Spinner } from "reactstrap";
import PropTypes from "prop-types";

const Loading = ({ loading }) => {
  return (
    <>
      <Modal isOpen={loading} centered className="loader-modal">
        <ModalBody>
          <div className="d-flex justify-content-center">
            <Spinner
              style={{
                width: "5rem",
                height: "5rem",
              }}
              color="primary"
              className="d-flex align-self-center"
            />
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
