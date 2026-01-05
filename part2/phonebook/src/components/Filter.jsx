const Filter = ({value, onChange}) => {
    return (
        <div>
            filter shown with
            <input
                id='search-form'
                value={value}
                onChange={onChange}
            />
      </div>
    );
}

export default Filter