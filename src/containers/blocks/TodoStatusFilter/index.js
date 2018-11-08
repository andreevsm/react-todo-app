import React from 'react';

const BUTTONS = [
  { id: 1, name: 'active', label: 'Active' },
  { id: 2, name: 'done', label: 'Done' },
  { id: 3, name: 'all', label: 'All' },
];

const ItemStatusFilter = ({
  filter,
  onFilterChange,
}) => {
  const buttons = BUTTONS.map(({ id, name, label }) => {
    const isActive = filter === name;
    const ButtonClassNames = isActive ? 'btn-info' : 'btn-outline-secondary';
    return (
      <button key={id} name={name} type="button" onClick={() => onFilterChange(name)} className={`btn ${ButtonClassNames}`}>
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default ItemStatusFilter;
