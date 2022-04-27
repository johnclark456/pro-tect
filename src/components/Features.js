import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <article
            className={`blog-list-item tile is-child box notification`}
            style={{ backgroundColor: "hsl(0, 0%, 94%)" }}
          >
            <div className="has-text-centered">
              <div
                style={{
                  display: "inline-block",
                  maxWidth: "103px",
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            <h4 className="has-text-centered">{item.heading}</h4>
            <p className="has-text-justified">{item.text}</p>
            <Link className="button" to={item.slug}>
              Keep Reading →
            </Link>
          </article>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
