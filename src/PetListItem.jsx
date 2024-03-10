import React from "react";
import { Link } from "react-router-dom";

function PetListItem({ id, name }) {
  return (
    <div>
      <h3>{name}</h3>
      <Link to={`/edit-pet/${id}`}>Edit</Link>
    </div>
  );
}

export default PetListItem;
