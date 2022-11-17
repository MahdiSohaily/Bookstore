import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ id, title, author }) {
  return (
    <div>
      {id}
      {title}
      {author}
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
