import React, { useState } from "react";
import styles from "./index.module.css";

const Search = ({ onSearch }) => {
	const [value, setValue] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		onSearch(value);
	};

	return (
		<form className={styles.search} onSubmit={onSubmit}>
			<input className="form-control"
						 type="text"
						 value={value}
						 onChange={e => setValue(e.target.value)} placeholder="Enter GIF keyword" />
			<button className="btn btn-primary">Search</button>
		</form>
	);
};

export default Search;
