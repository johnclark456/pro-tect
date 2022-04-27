import React from "react";
import PropTypes from "prop-types";
import { ResponsibilitiesTemplate } from "../../templates/responsibilities";

const ResponsibilitiesPagePreview = ({ entry, widgetFor }) => (
  <ResponsibilitiesTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

ResponsibilitiesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ResponsibilitiesPagePreview;
