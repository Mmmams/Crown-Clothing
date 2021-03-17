import React from "react";

import CollectionItem from "../../components/cart-item/cart-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

import "./collection.style.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="category">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.path.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
