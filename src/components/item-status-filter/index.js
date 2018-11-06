import React from 'react';

const BUTTONS = [
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' },
  { name: 'all', label: 'All' },
];

const ItemStatusFilter = ({
  filter,
  onFilterChange,
}) => {

  const buttons = BUTTONS.map(({ name, label }, index) => {
    const isActive = filter === name;
    const ButtonClassNames = isActive ? 'btn-info' : 'btn-outline-secondary';
    return (
      <button key={index} name={name} type="button" onClick={() => onFilterChange(name)} className={`btn ${ButtonClassNames}`}>
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
}

export default ItemStatusFilter;